import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { interests, skillLevel, contentType, userId } = await req.json();
    
    // Initialize Supabase client
    const supabase = createClient(supabaseUrl!, supabaseServiceKey!);
    
    // Get all available courses from database
    const { data: courses, error: coursesError } = await supabase
      .from('courses')
      .select('*');
    
    if (coursesError) {
      throw new Error(`Failed to fetch courses: ${coursesError.message}`);
    }

    // Create AI prompt for course recommendations
    const coursesContext = courses.map(course => 
      `Course: ${course.title}
      Type: ${course.type}
      Skill Level: ${course.skill_level}
      Duration: ${course.duration}
      Tags: ${course.tags?.join(', ')}
      Description: ${course.description}`
    ).join('\n\n');

    const prompt = `Based on the user's learning preferences, recommend the most suitable courses from the available options:

User Preferences:
- Interests: ${interests.join(', ')}
- Skill Level: ${skillLevel}
- Preferred Content Type: ${contentType}

Available Courses:
${coursesContext}

Please provide a JSON response with an array of recommended course IDs, ranked by relevance (most relevant first). Also include a brief explanation for each recommendation. Format:
{
  "recommendations": [
    {
      "course_id": "uuid",
      "relevance_score": 0.95,
      "explanation": "This course perfectly matches your interest in..."
    }
  ]
}

Limit to top 5 recommendations.`;

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: 'You are an expert learning advisor that analyzes user preferences and recommends the most suitable courses. Always respond with valid JSON format.' 
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3,
      }),
    });

    const aiData = await response.json();
    const aiRecommendations = JSON.parse(aiData.choices[0].message.content);
    
    // Get detailed course information for recommended courses
    const recommendedCourseIds = aiRecommendations.recommendations.map((rec: any) => rec.course_id);
    const { data: recommendedCourses } = await supabase
      .from('courses')
      .select('*')
      .in('id', recommendedCourseIds);

    // Combine AI recommendations with course details
    const finalRecommendations = aiRecommendations.recommendations.map((aiRec: any) => {
      const course = recommendedCourses?.find(c => c.id === aiRec.course_id);
      return {
        ...course,
        relevance_score: aiRec.relevance_score,
        ai_explanation: aiRec.explanation
      };
    }).filter(Boolean);

    return new Response(
      JSON.stringify({ 
        recommendations: finalRecommendations,
        total_courses: courses.length,
        user_preferences: { interests, skillLevel, contentType }
      }), 
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in ai-course-recommendations function:', error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});