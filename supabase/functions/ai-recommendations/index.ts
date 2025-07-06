import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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

    console.log('Processing free AI recommendations request for:', userPreferences);

    // Generate recommendations using a smart algorithm without API calls
    const recommendations = generateSmartRecommendations(userPreferences);

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

    console.log(`Successfully generated ${recommendations.length} free recommendations`);
    return new Response(JSON.stringify({ recommendations: recommendationsWithScores }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-recommendations function:', error);
    
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

// Smart recommendation engine that works without API calls
function generateSmartRecommendations(userPreferences: UserPreferences) {
  const { interests, skillLevel, contentType } = userPreferences;
  
  // Comprehensive learning resource database
  const learningResources = [
    // Programming & Web Development
    {
      id: 1,
      title: "Introduction to Python Programming",
      tags: ["python", "programming", "basics"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "6 hours",
      link: "https://www.codecademy.com/learn/learn-python-3",
      description: "Learn Python fundamentals including syntax, data types, and basic programming concepts",
      platform: "Codecademy"
    },
    {
      id: 2,
      title: "JavaScript Basics for Beginners",
      tags: ["javascript", "web development", "programming"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "8 hours",
      link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
      description: "Master JavaScript fundamentals and DOM manipulation",
      platform: "freeCodeCamp"
    },
    {
      id: 3,
      title: "React Complete Guide",
      tags: ["react", "javascript", "frontend", "web development"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "12 hours",
      link: "https://react.dev/learn",
      description: "Build modern web applications with React hooks and components",
      platform: "React.dev"
    },
    {
      id: 4,
      title: "Python Data Science Handbook",
      tags: ["python", "data science", "analytics", "machine learning"],
      skillLevel: "Intermediate",
      type: "Book",
      duration: "15 hours",
      link: "https://jakevdp.github.io/PythonDataScienceHandbook/",
      description: "Essential tools for working with data in Python",
      platform: "GitHub"
    },
    {
      id: 5,
      title: "Machine Learning Crash Course",
      tags: ["machine learning", "tensorflow", "python", "ai"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "15 hours",
      link: "https://developers.google.com/machine-learning/crash-course",
      description: "Learn ML fundamentals with TensorFlow APIs",
      platform: "Google AI"
    },
    {
      id: 6,
      title: "Advanced JavaScript Concepts",
      tags: ["javascript", "advanced", "closures", "async"],
      skillLevel: "Advanced",
      type: "Course",
      duration: "10 hours",
      link: "https://www.udemy.com/course/advanced-javascript-concepts/",
      description: "Master closures, prototypes, async/await, and advanced patterns",
      platform: "Udemy"
    },
    {
      id: 7,
      title: "CS50 Introduction to Computer Science",
      tags: ["computer science", "programming", "algorithms"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "90 hours",
      link: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
      description: "Harvard's introduction to computer science and programming",
      platform: "edX"
    },
    {
      id: 8,
      title: "Node.js Complete Course",
      tags: ["nodejs", "javascript", "backend", "server"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "14 hours",
      link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      description: "Build scalable server-side applications with Node.js",
      platform: "YouTube"
    },
    {
      id: 9,
      title: "Git and GitHub Tutorial",
      tags: ["git", "github", "version control", "development"],
      skillLevel: "Beginner",
      type: "Tutorial",
      duration: "3 hours",
      link: "https://www.freecodecamp.org/news/git-and-github-for-beginners/",
      description: "Master version control with Git and GitHub",
      platform: "freeCodeCamp"
    },
    {
      id: 10,
      title: "Full Stack Web Development",
      tags: ["web development", "fullstack", "html", "css", "javascript"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "300 hours",
      link: "https://www.theodinproject.com/",
      description: "Complete full-stack web development curriculum",
      platform: "The Odin Project"
    },
    // Data Science & Analytics
    {
      id: 11,
      title: "Statistics for Data Science",
      tags: ["statistics", "data science", "probability"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "8 hours",
      link: "https://www.khanacademy.org/math/statistics-probability",
      description: "Essential statistics concepts for data analysis",
      platform: "Khan Academy"
    },
    {
      id: 12,
      title: "SQL for Data Analysis",
      tags: ["sql", "database", "data analysis"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "6 hours",
      link: "https://www.w3schools.com/sql/",
      description: "Learn SQL for database queries and data manipulation",
      platform: "W3Schools"
    },
    {
      id: 13,
      title: "Deep Learning Specialization",
      tags: ["deep learning", "neural networks", "tensorflow", "ai"],
      skillLevel: "Advanced",
      type: "Course",
      duration: "120 hours",
      link: "https://www.coursera.org/specializations/deep-learning",
      description: "Master deep learning and neural networks",
      platform: "Coursera"
    },
    // Design & UI/UX
    {
      id: 14,
      title: "UI/UX Design Fundamentals",
      tags: ["design", "ui", "ux", "user experience"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "10 hours",
      link: "https://www.interaction-design.org/courses",
      description: "Learn principles of user interface and experience design",
      platform: "Interaction Design Foundation"
    },
    {
      id: 15,
      title: "Figma for Designers",
      tags: ["figma", "design", "prototyping", "ui"],
      skillLevel: "Beginner",
      type: "Tutorial",
      duration: "4 hours",
      link: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
      description: "Master Figma for UI design and prototyping",
      platform: "YouTube"
    }
  ];

  // Get popular tags to deprioritize them for AI-based diverse recommendations
  const popularTags = ['javascript', 'python', 'react', 'web development', 'data science', 'html', 'css', 'programming', 'frontend', 'backend'];

  // Smart matching algorithm with diversity boost
  let scoredResources = learningResources.map(resource => {
    let score = 0;
    
    // Interest matching (highest weight)
    const interestMatches = interests.filter(interest => 
      resource.tags.some(tag => 
        tag.toLowerCase().includes(interest.toLowerCase()) || 
        interest.toLowerCase().includes(tag.toLowerCase()) ||
        resource.title.toLowerCase().includes(interest.toLowerCase()) ||
        resource.description.toLowerCase().includes(interest.toLowerCase())
      )
    );
    score += interestMatches.length * 10;
    
    // Skill level matching
    if (resource.skillLevel === skillLevel) {
      score += 5;
    } else if (
      (skillLevel === 'Intermediate' && resource.skillLevel === 'Beginner') ||
      (skillLevel === 'Advanced' && resource.skillLevel === 'Intermediate')
    ) {
      score += 3; // Adjacent skill levels get partial credit
    }
    
    // Content type matching
    if (contentType === 'Any' || resource.type === contentType) {
      score += 3;
    }
    
    // AI-based diversity: Deprioritize overly popular topics to surface unique content
    const hasPopularTag = resource.tags.some(tag => 
      popularTags.some(popular => tag.toLowerCase().includes(popular))
    );
    if (hasPopularTag) {
      score -= 1; // Reduce score for popular topics to promote diversity
    } else {
      score += 3; // Boost unique/niche topics for AI-driven discovery
    }
    
    // Boost specialized/advanced topics that aren't mainstream
    const specializedKeywords = ['machine learning', 'blockchain', 'cybersecurity', 'devops', 'cloud', 'ai', 'algorithms', 'system design', 'microservices', 'kubernetes'];
    const hasSpecializedContent = resource.tags.some(tag => 
      specializedKeywords.some(keyword => tag.toLowerCase().includes(keyword))
    ) || specializedKeywords.some(keyword => 
      resource.title.toLowerCase().includes(keyword) || 
      resource.description.toLowerCase().includes(keyword)
    );
    if (hasSpecializedContent) score += 4;
    
    return { ...resource, matchScore: score };
  });

  // Filter and sort by relevance
  scoredResources = scoredResources
    .filter(resource => resource.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 10); // Top 10 recommendations

  // If no matches, provide general beginner-friendly resources
  if (scoredResources.length === 0) {
    scoredResources = learningResources
      .filter(resource => resource.skillLevel === 'Beginner')
      .slice(0, 5)
      .map(resource => ({ ...resource, matchScore: 1 }));
  }

  // Remove matchScore before returning
  return scoredResources.map(({ matchScore, ...resource }) => resource);
}