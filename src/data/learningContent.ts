// Learning content dataset with 25+ sample resources
export interface LearningContent {
  id: number;
  title: string;
  tags: string[];
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'Video' | 'Article' | 'Course' | 'Tutorial' | 'Book';
  duration: string;
  link: string;
  description: string;
}

export const learningContentData: LearningContent[] = [
  {
    id: 1,
    title: "Python for Beginners - Complete Course",
    tags: ["Python", "Programming", "Basics", "Fundamentals"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/python-beginners",
    description: "Learn Python programming from scratch with hands-on exercises and projects."
  },
  {
    id: 2,
    title: "Introduction to Machine Learning",
    tags: ["Machine Learning", "AI", "Data Science", "Python"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/ml-intro",
    description: "Comprehensive introduction to machine learning concepts and algorithms."
  },
  {
    id: 3,
    title: "React Hooks Deep Dive",
    tags: ["React", "JavaScript", "Frontend", "Hooks"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "15 minutes",
    link: "https://example.com/react-hooks",
    description: "Master React hooks with practical examples and best practices."
  },
  {
    id: 4,
    title: "Advanced Python Data Structures",
    tags: ["Python", "Data Structures", "Algorithms", "Advanced"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "45 minutes",
    link: "https://example.com/python-advanced",
    description: "Explore advanced Python data structures and their applications."
  },
  {
    id: 5,
    title: "CSS Grid Layout Mastery",
    tags: ["CSS", "Frontend", "Layout", "Design"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "30 minutes",
    link: "https://example.com/css-grid",
    description: "Master CSS Grid layout with practical examples and exercises."
  },
  {
    id: 6,
    title: "JavaScript ES6+ Features",
    tags: ["JavaScript", "ES6", "Modern JavaScript", "Frontend"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "1 hour",
    link: "https://example.com/js-es6",
    description: "Learn modern JavaScript features and syntax improvements."
  },
  {
    id: 7,
    title: "Data Science with Python",
    tags: ["Python", "Data Science", "Analytics", "Statistics"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/data-science",
    description: "Complete data science workflow using Python and popular libraries."
  },
  {
    id: 8,
    title: "Web Development Fundamentals",
    tags: ["Web Development", "HTML", "CSS", "JavaScript"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "10 hours",
    link: "https://example.com/web-dev",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript."
  },
  {
    id: 9,
    title: "Deep Learning with TensorFlow",
    tags: ["Deep Learning", "AI", "TensorFlow", "Neural Networks"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "20 hours",
    link: "https://example.com/deep-learning",
    description: "Build neural networks and deep learning models with TensorFlow."
  },
  {
    id: 10,
    title: "Node.js Backend Development",
    tags: ["Node.js", "Backend", "JavaScript", "API"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "2 hours",
    link: "https://example.com/nodejs",
    description: "Build scalable backend applications with Node.js and Express."
  },
  {
    id: 11,
    title: "Git and GitHub Essentials",
    tags: ["Git", "GitHub", "Version Control", "Development"],
    skillLevel: "Beginner",
    type: "Video",
    duration: "40 minutes",
    link: "https://example.com/git-github",
    description: "Master version control with Git and collaborate using GitHub."
  },
  {
    id: 12,
    title: "SQL Database Design",
    tags: ["SQL", "Database", "Design", "Backend"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "25 minutes",
    link: "https://example.com/sql-design",
    description: "Learn database design principles and SQL optimization techniques."
  },
  {
    id: 13,
    title: "Docker for Developers",
    tags: ["Docker", "DevOps", "Containerization", "Deployment"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "4 hours",
    link: "https://example.com/docker",
    description: "Containerize applications and manage deployments with Docker."
  },
  {
    id: 14,
    title: "UI/UX Design Principles",
    tags: ["Design", "UI", "UX", "User Experience"],
    skillLevel: "Beginner",
    type: "Article",
    duration: "20 minutes",
    link: "https://example.com/ui-ux",
    description: "Fundamental principles of user interface and experience design."
  },
  {
    id: 15,
    title: "Advanced React Patterns",
    tags: ["React", "JavaScript", "Frontend", "Advanced"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "1.5 hours",
    link: "https://example.com/react-patterns",
    description: "Master advanced React patterns and architectural concepts."
  },
  {
    id: 16,
    title: "Python Web Scraping",
    tags: ["Python", "Web Scraping", "Data Collection", "Automation"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "1 hour",
    link: "https://example.com/web-scraping",
    description: "Extract data from websites using Python and BeautifulSoup."
  },
  {
    id: 17,
    title: "Artificial Intelligence Basics",
    tags: ["AI", "Machine Learning", "Fundamentals", "Technology"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "5 hours",
    link: "https://example.com/ai-basics",
    description: "Introduction to artificial intelligence concepts and applications."
  },
  {
    id: 18,
    title: "TypeScript for JavaScript Developers",
    tags: ["TypeScript", "JavaScript", "Frontend", "Type Safety"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "2 hours",
    link: "https://example.com/typescript",
    description: "Add type safety to JavaScript projects with TypeScript."
  },
  {
    id: 19,
    title: "Cloud Computing with AWS",
    tags: ["AWS", "Cloud", "Infrastructure", "Deployment"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "15 hours",
    link: "https://example.com/aws",
    description: "Deploy and manage applications on Amazon Web Services."
  },
  {
    id: 20,
    title: "Responsive Web Design",
    tags: ["CSS", "Design", "Responsive", "Mobile"],
    skillLevel: "Beginner",
    type: "Tutorial",
    duration: "1.5 hours",
    link: "https://example.com/responsive",
    description: "Create websites that work on all devices and screen sizes."
  },
  {
    id: 21,
    title: "Data Visualization with D3.js",
    tags: ["D3.js", "Data Visualization", "JavaScript", "Charts"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "3 hours",
    link: "https://example.com/d3js",
    description: "Create interactive data visualizations with D3.js library."
  },
  {
    id: 22,
    title: "Cybersecurity Fundamentals",
    tags: ["Cybersecurity", "Security", "Privacy", "Technology"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/cybersecurity",
    description: "Learn essential cybersecurity concepts and best practices."
  },
  {
    id: 23,
    title: "Kubernetes Orchestration",
    tags: ["Kubernetes", "DevOps", "Orchestration", "Containers"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/kubernetes",
    description: "Master container orchestration with Kubernetes."
  },
  {
    id: 24,
    title: "Mobile App Development with React Native",
    tags: ["React Native", "Mobile", "JavaScript", "iOS", "Android"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/react-native",
    description: "Build cross-platform mobile apps with React Native."
  },
  {
    id: 25,
    title: "Blockchain Technology Explained",
    tags: ["Blockchain", "Cryptocurrency", "Technology", "Distributed Systems"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "30 minutes",
    link: "https://example.com/blockchain",
    description: "Understand blockchain technology and its applications."
  }
];