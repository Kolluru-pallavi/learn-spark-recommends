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
  },

  // C Programming
  {
    id: 16,
    title: "C Programming for Beginners",
    tags: ["C"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/c-programming",
    description: "Learn C programming language fundamentals and memory management.",
    platform: "Coursera"
  },
  {
    id: 17,
    title: "Advanced C Programming",
    tags: ["C"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "3 hours",
    link: "https://www.youtube.com/embed/c-advanced",
    description: "Master advanced C concepts like pointers, structures, and file handling.",
    platform: "YouTube"
  },

  // C++ Programming
  {
    id: 18,
    title: "C++ Object-Oriented Programming",
    tags: ["C++"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "10 hours",
    link: "https://example.com/cpp-oop",
    description: "Master object-oriented programming concepts in C++.",
    platform: "edX"
  },
  {
    id: 19,
    title: "C++ STL Complete Guide",
    tags: ["C++"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "4 hours",
    link: "https://example.com/cpp-stl",
    description: "Comprehensive guide to C++ Standard Template Library.",
    platform: "GeeksforGeeks"
  },

  // Java Programming
  {
    id: 20,
    title: "Java Programming Fundamentals",
    tags: ["Java"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/java-basics",
    description: "Learn Java programming from basics to object-oriented concepts.",
    platform: "Oracle"
  },
  {
    id: 21,
    title: "Java Spring Boot Framework",
    tags: ["Java"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "15 hours",
    link: "https://example.com/spring-boot",
    description: "Build enterprise applications with Java Spring Boot.",
    platform: "Udemy"
  },

  // Data Structures
  {
    id: 22,
    title: "Data Structures and Algorithms",
    tags: ["Data Structures"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "20 hours",
    link: "https://example.com/dsa",
    description: "Master fundamental data structures and algorithms.",
    platform: "MIT OpenCourseWare"
  },
  {
    id: 23,
    title: "Advanced Data Structures",
    tags: ["Data Structures"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "5 hours",
    link: "https://www.youtube.com/embed/advanced-ds",
    description: "Trees, graphs, heaps, and advanced algorithmic concepts.",
    platform: "YouTube"
  },

  // Web Development
  {
    id: 24,
    title: "Full Stack Web Development",
    tags: ["Web Development"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "30 hours",
    link: "https://example.com/fullstack",
    description: "Complete web development course covering frontend and backend.",
    platform: "FreeCodeCamp"
  },
  {
    id: 25,
    title: "Modern Web Development Tools",
    tags: ["Web Development"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/web-tools",
    description: "Learn modern tools and workflows for web development.",
    platform: "Dev.to"
  },

  // Frontend Development
  {
    id: 26,
    title: "Frontend Development Bootcamp",
    tags: ["Frontend"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "25 hours",
    link: "https://example.com/frontend-bootcamp",
    description: "Complete frontend development course with HTML, CSS, and JavaScript.",
    platform: "Coursera"
  },
  {
    id: 27,
    title: "Advanced Frontend Architectures",
    tags: ["Frontend"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "45 minutes",
    link: "https://example.com/frontend-arch",
    description: "Modern frontend architecture patterns and best practices.",
    platform: "Smashing Magazine"
  },

  // HTML
  {
    id: 28,
    title: "HTML5 Complete Guide",
    tags: ["HTML"],
    skillLevel: "Beginner",
    type: "Tutorial",
    duration: "4 hours",
    link: "https://example.com/html5-guide",
    description: "Learn HTML5 semantic elements, forms, and multimedia integration.",
    platform: "W3Schools"
  },
  {
    id: 29,
    title: "HTML Accessibility Best Practices",
    tags: ["HTML"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "30 minutes",
    link: "https://example.com/html-accessibility",
    description: "Build accessible web applications with proper HTML structure.",
    platform: "A11y Project"
  },

  // CSS
  {
    id: 30,
    title: "CSS Grid and Flexbox Mastery",
    tags: ["CSS"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/css-grid-flex",
    description: "Master modern CSS layout techniques with Grid and Flexbox.",
    platform: "CSS-Tricks"
  },
  {
    id: 31,
    title: "Advanced CSS Animations",
    tags: ["CSS"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/embed/css-animations",
    description: "Create stunning animations and transitions with CSS.",
    platform: "YouTube"
  },

  // React
  {
    id: 32,
    title: "React Fundamentals",
    tags: ["React"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/react-fundamentals",
    description: "Learn React basics including components, state, and props.",
    platform: "React.dev"
  },
  {
    id: 33,
    title: "React Hooks and Context",
    tags: ["React"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "6 hours",
    link: "https://example.com/react-hooks",
    description: "Master React Hooks and Context API for state management.",
    platform: "Egghead"
  },
  {
    id: 34,
    title: "React Performance Optimization",
    tags: ["React"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "3 hours",
    link: "https://www.youtube.com/embed/react-performance",
    description: "Optimize React applications for better performance.",
    platform: "YouTube"
  }
];