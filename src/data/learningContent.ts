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
  platform: string;
}

export const learningContentData: LearningContent[] = [
  // Python Courses
  {
    id: 1,
    title: "Python for Beginners - Complete Course",
    tags: ["Python"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/python-beginners",
    description: "Learn Python programming from scratch with hands-on exercises and projects.",
    platform: "Coursera"
  },
  {
    id: 2,
    title: "Advanced Python Data Structures",
    tags: ["Python"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "45 minutes",
    link: "https://www.youtube.com/embed/R-HLU9Fl5ug",
    description: "Explore advanced Python data structures and their applications.",
    platform: "YouTube"
  },
  {
    id: 3,
    title: "Python Web Scraping Masterclass",
    tags: ["Python"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "1 hour",
    link: "https://example.com/web-scraping",
    description: "Extract data from websites using Python and BeautifulSoup.",
    platform: "FreeCodeCamp"
  },
  {
    id: 4,
    title: "Data Science with Python",
    tags: ["Python"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/data-science",
    description: "Complete data science workflow using Python and popular libraries.",
    platform: "edX"
  },
  {
    id: 5,
    title: "Python Django Web Development",
    tags: ["Python"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/django",
    description: "Build web applications using Django framework.",
    platform: "Udemy"
  },
  {
    id: 6,
    title: "Python Testing and TDD",
    tags: ["Python"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "25 minutes",
    link: "https://example.com/python-testing",
    description: "Master test-driven development in Python with pytest.",
    platform: "Medium"
  },
  {
    id: 7,
    title: "Python Machine Learning Basics",
    tags: ["Python"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/embed/ml-basics",
    description: "Introduction to machine learning with Python and scikit-learn.",
    platform: "YouTube"
  },
  {
    id: 8,
    title: "Python Flask Microservices",
    tags: ["Python"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/flask-microservices",
    description: "Build microservices architecture using Python Flask.",
    platform: "Real Python"
  },
  {
    id: 9,
    title: "Python Automation Scripts",
    tags: ["Python"],
    skillLevel: "Beginner",
    type: "Book",
    duration: "4 hours",
    link: "https://example.com/python-automation",
    description: "Automate daily tasks using Python scripts.",
    platform: "O'Reilly"
  },
  {
    id: 10,
    title: "Python Performance Optimization",
    tags: ["Python"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "30 minutes",
    link: "https://example.com/python-performance",
    description: "Optimize Python code for better performance and memory usage.",
    platform: "Dev.to"
  },

  // JavaScript Courses
  {
    id: 11,
    title: "JavaScript Fundamentals",
    tags: ["JavaScript"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "5 hours",
    link: "https://example.com/js-fundamentals",
    description: "Learn JavaScript from the ground up with practical examples.",
    platform: "FreeCodeCamp"
  },
  {
    id: 12,
    title: "Modern JavaScript ES6+",
    tags: ["JavaScript"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "1 hour",
    link: "https://www.youtube.com/embed/NCwa_xi0Uuc",
    description: "Learn modern JavaScript features and syntax improvements.",
    platform: "YouTube"
  },
  {
    id: 13,
    title: "JavaScript Async Programming",
    tags: ["JavaScript"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "2 hours",
    link: "https://example.com/js-async",
    description: "Master asynchronous programming with promises and async/await.",
    platform: "JavaScript.info"
  },
  {
    id: 14,
    title: "JavaScript DOM Manipulation",
    tags: ["JavaScript"],
    skillLevel: "Beginner",
    type: "Article",
    duration: "20 minutes",
    link: "https://example.com/dom-manipulation",
    description: "Learn to interact with web pages using JavaScript DOM APIs.",
    platform: "MDN Web Docs"
  },
  {
    id: 15,
    title: "JavaScript Design Patterns",
    tags: ["JavaScript"],
    skillLevel: "Advanced",
    type: "Book",
    duration: "6 hours",
    link: "https://example.com/js-patterns",
    description: "Common design patterns and best practices in JavaScript.",
    platform: "Packt"
  }
];