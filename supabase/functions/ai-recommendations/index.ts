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
    },
    // Specialized/Niche Topics
    {
      id: 16,
      title: "Blockchain Development with Solidity",
      tags: ["blockchain", "solidity", "ethereum", "smart contracts"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "20 hours",
      link: "https://www.udemy.com/course/blockchain-developer/",
      description: "Build decentralized applications on Ethereum blockchain",
      platform: "Udemy"
    },
    {
      id: 17,
      title: "Cybersecurity Fundamentals",
      tags: ["cybersecurity", "ethical hacking", "security", "penetration testing"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "15 hours",
      link: "https://www.coursera.org/learn/cyber-security-basics",
      description: "Learn essential cybersecurity concepts and practices",
      platform: "Coursera"
    },
    {
      id: 18,
      title: "Cloud Architecture with AWS",
      tags: ["aws", "cloud computing", "architecture", "devops"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "25 hours",
      link: "https://aws.amazon.com/training/",
      description: "Design scalable cloud solutions using AWS services",
      platform: "AWS Training"
    },
    {
      id: 19,
      title: "Game Development with Unity",
      tags: ["unity", "game development", "c#", "3d graphics"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "30 hours",
      link: "https://learn.unity.com/",
      description: "Create 2D and 3D games using Unity engine",
      platform: "Unity Learn"
    },
    {
      id: 20,
      title: "Digital Marketing Analytics",
      tags: ["digital marketing", "analytics", "seo", "social media"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "12 hours",
      link: "https://www.google.com/skillshop/course/58",
      description: "Master digital marketing strategies and analytics",
      platform: "Google Skillshop"
    },
    {
      id: 21,
      title: "Mobile App Development with Flutter",
      tags: ["flutter", "dart", "mobile development", "cross-platform"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "22 hours",
      link: "https://flutter.dev/docs/get-started/learn-flutter",
      description: "Build beautiful mobile apps for iOS and Android",
      platform: "Flutter Docs"
    },
    {
      id: 22,
      title: "3D Modeling with Blender",
      tags: ["blender", "3d modeling", "animation", "rendering"],
      skillLevel: "Beginner",
      type: "Tutorial",
      duration: "18 hours",
      link: "https://www.blender.org/support/tutorials/",
      description: "Create stunning 3D models and animations",
      platform: "Blender Foundation"
    },
    {
      id: 23,
      title: "Quantum Computing Basics",
      tags: ["quantum computing", "physics", "algorithms", "qubits"],
      skillLevel: "Advanced",
      type: "Course",
      duration: "16 hours",
      link: "https://www.ibm.com/quantum/learn",
      description: "Understand quantum computing principles and applications",
      platform: "IBM Quantum"
    },
    {
      id: 24,
      title: "Artificial Intelligence Ethics",
      tags: ["ai ethics", "philosophy", "responsible ai", "bias"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "8 hours",
      link: "https://www.edx.org/course/artificial-intelligence-ethics",
      description: "Explore ethical considerations in AI development",
      platform: "edX"
    },
    {
      id: 25,
      title: "Robotics Engineering",
      tags: ["robotics", "engineering", "automation", "sensors"],
      skillLevel: "Advanced",
      type: "Course",
      duration: "40 hours",
      link: "https://www.coursera.org/specializations/robotics",
      description: "Design and program autonomous robotic systems",
      platform: "Coursera"
    },
    // B.Tech Core Engineering Courses
    {
      id: 26,
      title: "Engineering Mathematics - Linear Algebra",
      tags: ["mathematics", "linear algebra", "engineering", "matrices"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "25 hours",
      link: "https://www.khanacademy.org/math/linear-algebra",
      description: "Master linear algebra concepts essential for engineering",
      platform: "Khan Academy"
    },
    {
      id: 27,
      title: "Calculus for Engineers",
      tags: ["calculus", "mathematics", "engineering", "derivatives"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "30 hours",
      link: "https://www.edx.org/course/calculus-1a-differentiation",
      description: "Learn differential and integral calculus for engineering applications",
      platform: "edX"
    },
    {
      id: 28,
      title: "Engineering Physics",
      tags: ["physics", "engineering", "mechanics", "thermodynamics"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "35 hours",
      link: "https://www.coursera.org/learn/engineering-physics",
      description: "Fundamental physics concepts for engineering students",
      platform: "Coursera"
    },
    {
      id: 29,
      title: "Engineering Chemistry",
      tags: ["chemistry", "engineering", "materials", "polymers"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "20 hours",
      link: "https://www.nptel.ac.in/courses/103/103/103103029/",
      description: "Chemical principles and applications in engineering",
      platform: "NPTEL"
    },
    {
      id: 30,
      title: "Data Structures and Algorithms for Engineers",
      tags: ["data structures", "algorithms", "programming", "computer science"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "45 hours",
      link: "https://www.coursera.org/specializations/data-structures-algorithms",
      description: "Essential CS concepts for engineering problem solving",
      platform: "Coursera"
    },
    {
      id: 31,
      title: "Object Oriented Programming with Java",
      tags: ["java", "oop", "programming", "software engineering"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "40 hours",
      link: "https://www.coursera.org/learn/object-oriented-java",
      description: "Learn OOP principles using Java programming",
      platform: "Coursera"
    },
    {
      id: 32,
      title: "C Programming for Engineers",
      tags: ["c programming", "programming", "embedded systems", "microcontrollers"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "30 hours",
      link: "https://www.edx.org/course/introduction-c-programming",
      description: "Master C programming for engineering applications",
      platform: "edX"
    },
    {
      id: 33,
      title: "Digital Electronics and Logic Design",
      tags: ["digital electronics", "logic design", "circuits", "boolean algebra"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "35 hours",
      link: "https://www.nptel.ac.in/courses/117/106/117106086/",
      description: "Fundamentals of digital circuits and logic systems",
      platform: "NPTEL"
    },
    {
      id: 34,
      title: "Microprocessors and Microcontrollers",
      tags: ["microprocessors", "microcontrollers", "embedded systems", "8085"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "40 hours",
      link: "https://www.nptel.ac.in/courses/117/105/117105061/",
      description: "Architecture and programming of microprocessors",
      platform: "NPTEL"
    },
    {
      id: 35,
      title: "Computer Networks for Engineers",
      tags: ["computer networks", "networking", "protocols", "tcp/ip"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "35 hours",
      link: "https://www.coursera.org/learn/computer-networking",
      description: "Network protocols and communication systems",
      platform: "Coursera"
    },
    {
      id: 36,
      title: "Operating Systems Concepts",
      tags: ["operating systems", "processes", "memory management", "scheduling"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "40 hours",
      link: "https://www.udacity.com/course/introduction-to-operating-systems--ud923",
      description: "Core concepts of modern operating systems",
      platform: "Udacity"
    },
    {
      id: 37,
      title: "Database Management Systems",
      tags: ["database", "dbms", "sql", "normalization"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "30 hours",
      link: "https://www.coursera.org/learn/intro-sql",
      description: "Database design and SQL programming",
      platform: "Coursera"
    },
    {
      id: 38,
      title: "Software Engineering Principles",
      tags: ["software engineering", "sdlc", "testing", "project management"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "35 hours",
      link: "https://www.edx.org/course/software-engineering-introduction",
      description: "Software development lifecycle and best practices",
      platform: "edX"
    },
    {
      id: 39,
      title: "Engineering Graphics and CAD",
      tags: ["cad", "autocad", "engineering drawing", "3d modeling"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "25 hours",
      link: "https://www.coursera.org/learn/autocad",
      description: "Technical drawing and computer-aided design",
      platform: "Coursera"
    },
    {
      id: 40,
      title: "Strength of Materials",
      tags: ["mechanics", "materials", "stress", "strain"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "30 hours",
      link: "https://www.nptel.ac.in/courses/112/105/112105129/",
      description: "Mechanical behavior of materials under load",
      platform: "NPTEL"
    },
    {
      id: 41,
      title: "Fluid Mechanics for Engineers",
      tags: ["fluid mechanics", "hydraulics", "fluid dynamics", "engineering"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "35 hours",
      link: "https://www.edx.org/course/fluid-mechanics",
      description: "Principles of fluid statics and dynamics",
      platform: "edX"
    },
    {
      id: 42,
      title: "Thermodynamics and Heat Transfer",
      tags: ["thermodynamics", "heat transfer", "energy", "thermal engineering"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "40 hours",
      link: "https://www.nptel.ac.in/courses/112/103/112103296/",
      description: "Laws of thermodynamics and heat transfer mechanisms",
      platform: "NPTEL"
    },
    {
      id: 43,
      title: "Control Systems Engineering",
      tags: ["control systems", "feedback", "stability", "automation"],
      skillLevel: "Advanced",
      type: "Course",
      duration: "45 hours",
      link: "https://www.coursera.org/learn/control-of-mobile-robots",
      description: "Analysis and design of control systems",
      platform: "Coursera"
    },
    {
      id: 44,
      title: "Signal Processing for Engineers",
      tags: ["signal processing", "dsp", "fourier transform", "filtering"],
      skillLevel: "Advanced",
      type: "Course",
      duration: "35 hours",
      link: "https://www.edx.org/course/discrete-time-signal-processing",
      description: "Digital signal processing techniques and applications",
      platform: "edX"
    },
    {
      id: 45,
      title: "MATLAB for Engineers",
      tags: ["matlab", "programming", "simulation", "numerical methods"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "25 hours",
      link: "https://www.coursera.org/learn/matlab",
      description: "MATLAB programming for engineering computations",
      platform: "Coursera"
    },
    {
      id: 46,
      title: "Electrical Circuits Analysis",
      tags: ["electrical circuits", "circuit analysis", "ohm's law", "kirchhoff"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "30 hours",
      link: "https://www.edx.org/course/circuits-and-electronics-1-basic-circuit-analysis",
      description: "Fundamentals of electrical circuit analysis",
      platform: "edX"
    },
    {
      id: 47,
      title: "Power Systems Engineering",
      tags: ["power systems", "electrical power", "generators", "transmission"],
      skillLevel: "Advanced",
      type: "Course",
      duration: "40 hours",
      link: "https://www.nptel.ac.in/courses/108/103/108103029/",
      description: "Generation, transmission and distribution of electrical power",
      platform: "NPTEL"
    },
    {
      id: 48,
      title: "VLSI Design",
      tags: ["vlsi", "ic design", "cmos", "layout"],
      skillLevel: "Advanced",
      type: "Course",
      duration: "45 hours",
      link: "https://www.nptel.ac.in/courses/117/106/117106030/",
      description: "Very Large Scale Integration circuit design",
      platform: "NPTEL"
    },
    {
      id: 49,
      title: "Communication Systems",
      tags: ["communication", "modulation", "wireless", "telecommunications"],
      skillLevel: "Advanced",
      type: "Course",
      duration: "35 hours",
      link: "https://www.coursera.org/learn/wireless-communication-emerging-technologies",
      description: "Analog and digital communication principles",
      platform: "Coursera"
    },
    {
      id: 50,
      title: "Engineering Project Management",
      tags: ["project management", "planning", "resource management", "leadership"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "20 hours",
      link: "https://www.coursera.org/learn/engineering-project-management",
      description: "Project management skills for engineering projects",
      platform: "Coursera"
    },
    {
      id: 51,
      title: "Internet of Things (IoT) for Engineers",
      tags: ["iot", "sensors", "connectivity", "embedded systems"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "30 hours",
      link: "https://www.coursera.org/specializations/iot",
      description: "Building connected devices and IoT applications",
      platform: "Coursera"
    },
    {
      id: 52,
      title: "Engineering Ethics and Professional Practice",
      tags: ["ethics", "professional practice", "responsibility", "engineering"],
      skillLevel: "Beginner",
      type: "Course",
      duration: "15 hours",
      link: "https://www.edx.org/course/engineering-ethics",
      description: "Ethical principles and professional responsibilities",
      platform: "edX"
    },
    {
      id: 53,
      title: "Renewable Energy Systems",
      tags: ["renewable energy", "solar", "wind", "sustainability"],
      skillLevel: "Intermediate",
      type: "Course",
      duration: "30 hours",
      link: "https://www.coursera.org/learn/renewable-energy",
      description: "Solar, wind and other renewable energy technologies",
      platform: "Coursera"
    },
    {
      id: 54,
      title: "Artificial Intelligence for Engineers",
      tags: ["artificial intelligence", "machine learning", "neural networks", "ai"],
      skillLevel: "Advanced",
      type: "Course",
      duration: "40 hours",
      link: "https://www.edx.org/course/artificial-intelligence-for-everyone",
      description: "AI concepts and applications in engineering",
      platform: "edX"
    },
    {
      id: 55,
      title: "Structural Analysis and Design",
      tags: ["structural engineering", "analysis", "design", "construction"],
      skillLevel: "Advanced",
      type: "Course",
      duration: "45 hours",
      link: "https://www.nptel.ac.in/courses/105/105/105105104/",
      description: "Analysis and design of structural systems",
      platform: "NPTEL"
    }
  ];

  // Get popular tags to deprioritize them for AI-based diverse recommendations
  const popularTags = ['javascript', 'python', 'react', 'web development', 'data science', 'html', 'css', 'programming', 'frontend', 'backend'];

  console.log('Processing recommendation request for interests:', interests);

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
    
    // AI-based diversity: Check if resource has popular tags
    const hasPopularTag = resource.tags.some(tag => 
      popularTags.some(popular => tag.toLowerCase().includes(popular))
    );
    
    // If resource matches user interests but has popular tags, slightly reduce score
    if (hasPopularTag && interestMatches.length > 0) {
      score -= 1;
    }
    
    // If resource matches user interests and has NO popular tags (niche content), boost it significantly
    if (!hasPopularTag && interestMatches.length > 0) {
      score += 5; // Major boost for niche content that matches interests
    }
    
    // Boost specialized/advanced topics that aren't mainstream
    const specializedKeywords = ['blockchain', 'cybersecurity', 'quantum', 'robotics', 'unity', 'blender', 'ethics', 'flutter'];
    const hasSpecializedContent = resource.tags.some(tag => 
      specializedKeywords.some(keyword => tag.toLowerCase().includes(keyword))
    ) || specializedKeywords.some(keyword => 
      resource.title.toLowerCase().includes(keyword) || 
      resource.description.toLowerCase().includes(keyword)
    );
    if (hasSpecializedContent) score += 4;
    
    console.log(`Resource: ${resource.title}, Score: ${score}, Has Popular Tags: ${hasPopularTag}, Interest Matches: ${interestMatches.length}`);
    
    return { ...resource, matchScore: score };
  });

  // Filter and sort by relevance - ONLY show courses that actually match user interests
  scoredResources = scoredResources
    .filter(resource => {
      // Only include resources that have actual interest matches
      const hasInterestMatch = interests.some(interest => 
        resource.tags.some(tag => 
          tag.toLowerCase().includes(interest.toLowerCase()) || 
          interest.toLowerCase().includes(tag.toLowerCase())
        ) ||
        resource.title.toLowerCase().includes(interest.toLowerCase()) ||
        resource.description.toLowerCase().includes(interest.toLowerCase())
      );
      
      // Must have interest match AND positive score
      return hasInterestMatch && resource.matchScore > 0;
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 10); // Top 10 relevant recommendations

  console.log(`Filtered to ${scoredResources.length} relevant courses from ${learningResources.length} total courses`);

  // If no relevant matches found, return empty array instead of general recommendations
  if (scoredResources.length === 0) {
    console.log('No relevant courses found for user interests:', interests);
    return [];
  }

  // Remove matchScore before returning
  return scoredResources.map(({ matchScore, ...resource }) => resource);
}