import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface UserPreferences {
  interests: string[];
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  contentType: 'Video' | 'Article' | 'Course' | 'Tutorial' | 'Book' | 'Any';
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userPreferences }: { userPreferences: UserPreferences } = await req.json();

    if (!openAIApiKey) {
      console.error('OpenAI API key not found in environment variables');
      return new Response(JSON.stringify({ 
        error: 'OpenAI API key not configured',
        details: 'Please add OPENAI_API_KEY to your Supabase Edge Function secrets'
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate API key format
    if (!openAIApiKey.startsWith('sk-')) {
      console.error('Invalid OpenAI API key format - should start with sk-');
      return new Response(JSON.stringify({ 
        error: 'Invalid OpenAI API key format',
        details: 'OpenAI API key should start with "sk-". Please check your API key.'
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Processing AI recommendations request for:', userPreferences);

    const contentTypeFilter = userPreferences.contentType === 'Any' ? 'any type of content' : userPreferences.contentType.toLowerCase();
    
    const prompt = `Generate 10 personalized learning recommendations for a ${userPreferences.skillLevel.toLowerCase()} level learner interested in: ${userPreferences.interests.join(', ')}.

Focus on ${contentTypeFilter} from reputable platforms like Coursera, edX, freeCodeCamp, YouTube, MIT OpenCourseWare, Khan Academy, Udacity, etc.

Return ONLY a valid JSON array with exactly this structure:
[
  {
    "id": 1,
    "title": "Course Title",
    "tags": ["tag1", "tag2"],
    "skillLevel": "Beginner|Intermediate|Advanced",
    "type": "Video|Article|Course|Tutorial|Book",
    "duration": "X hours",
    "link": "https://actual-working-url.com",
    "description": "Brief description of what the course covers",
    "platform": "Platform Name"
  }
]

Requirements:
- Use REAL, working URLs from actual educational platforms
- Match the skill level requested
- Include relevant tags from the user's interests
- Provide accurate duration estimates
- Ensure platform names match the URLs
- No additional text, just the JSON array`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          { 
            role: 'system', 
            content: 'You are an expert educational content curator. Generate accurate, helpful learning recommendations with real URLs from legitimate educational platforms.' 
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('OpenAI API Error:', data);
      throw new Error(`OpenAI API error: ${data.error?.message || 'Unknown error'} (Status: ${response.status})`);
    }

    console.log('OpenAI API Response received successfully');

    const aiResponse = data.choices[0].message.content;
    
    // Parse the JSON response
    let recommendations;
    try {
      console.log('Parsing AI response...');
      recommendations = JSON.parse(aiResponse);
    } catch (parseError) {
      console.error('Failed to parse AI response as JSON:', parseError);
      console.log('Raw AI response:', aiResponse);
      
      // If parsing fails, try to extract JSON from the response
      const jsonMatch = aiResponse.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        try {
          recommendations = JSON.parse(jsonMatch[0]);
          console.log('Successfully extracted JSON from response');
        } catch (extractError) {
          console.error('Failed to extract JSON from response:', extractError);
          throw new Error('Failed to parse AI response as JSON');
        }
      } else {
        throw new Error('No valid JSON found in AI response');
      }
    }

    // Validate the structure
    if (!Array.isArray(recommendations)) {
      console.error('AI response is not an array:', typeof recommendations);
      throw new Error('AI response is not an array');
    }

    if (recommendations.length === 0) {
      console.warn('AI returned empty recommendations array');
      throw new Error('No recommendations generated by AI');
    }

    console.log(`Successfully generated ${recommendations.length} recommendations`);

    // Add match scores for compatibility with existing frontend
    const recommendationsWithScores = recommendations.map((rec: any, index: number) => ({
      content: rec,
      score: Math.max(0.7, 1 - (index * 0.05)), // Decreasing scores for ranking
      matchedTags: rec.tags.filter((tag: string) => 
        userPreferences.interests.some(interest => 
          interest.toLowerCase().includes(tag.toLowerCase()) || 
          tag.toLowerCase().includes(interest.toLowerCase())
        )
      )
    }));

    console.log('Sending successful response with recommendations');
    return new Response(JSON.stringify({ recommendations: recommendationsWithScores }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-recommendations function:', error);
    
    // Log the full error details for debugging
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    
    return new Response(JSON.stringify({ 
      error: 'Failed to generate recommendations', 
      details: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});