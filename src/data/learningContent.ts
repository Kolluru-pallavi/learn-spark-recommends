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
  // Python Programming
  {
    id: 1,
    title: "Python Programming for Beginners",
    tags: ["Python"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "6 hours",
    link: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
    description: "Learn Python programming from scratch with hands-on exercises and projects.",
    platform: "freeCodeCamp"
  },
  {
    id: 2,
    title: "Python Data Science Tutorial",
    tags: ["Python"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "4 hours",
    link: "https://www.kaggle.com/learn/python",
    description: "Master Python for data science and analytics with practical examples.",
    platform: "Kaggle"
  },
  {
    id: 3,
    title: "Advanced Python Programming",
    tags: ["Python"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/watch?v=HGOBQPFzWKo",
    description: "Advanced Python concepts, decorators, generators, and metaclasses.",
    platform: "YouTube"
  },

  // JavaScript Programming
  {
    id: 4,
    title: "JavaScript Complete Course",
    tags: ["JavaScript"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "8 hours",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    description: "Complete JavaScript course covering fundamentals to advanced topics.",
    platform: "freeCodeCamp"
  },
  {
    id: 5,
    title: "Modern JavaScript ES6+",
    tags: ["JavaScript"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "1.5 hours",
    link: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
    description: "Learn modern JavaScript features and syntax improvements.",
    platform: "YouTube"
  },
  {
    id: 6,
    title: "JavaScript Algorithms and Data Structures",
    tags: ["JavaScript"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "10 hours",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    description: "Master algorithms and data structures using JavaScript.",
    platform: "freeCodeCamp"
  },

  // Java Programming
  {
    id: 7,
    title: "Java Full Course for Beginners",
    tags: ["Java"],
    skillLevel: "Beginner",
    type: "Video",
    duration: "12 hours",
    link: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
    description: "Complete Java programming course from basics to OOP concepts.",
    platform: "YouTube"
  },
  {
    id: 8,
    title: "Java Programming Masterclass",
    tags: ["Java"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "15 hours",
    link: "https://www.coursera.org/learn/java-programming",
    description: "Comprehensive Java programming course with real-world projects.",
    platform: "Coursera"
  },
  {
    id: 9,
    title: "Advanced Java Programming",
    tags: ["Java"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "8 hours",
    link: "https://www.edx.org/course/advanced-java-programming",
    description: "Advanced Java concepts including multithreading and design patterns.",
    platform: "edX"
  },

  // C Programming
  {
    id: 10,
    title: "C Programming Tutorial",
    tags: ["C"],
    skillLevel: "Beginner",
    type: "Tutorial",
    duration: "6 hours",
    link: "https://www.programiz.com/c-programming",
    description: "Learn C programming language fundamentals and memory management.",
    platform: "Programiz"
  },
  {
    id: 11,
    title: "Advanced C Programming",
    tags: ["C"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "3 hours",
    link: "https://www.youtube.com/watch?v=87SH2Cn0s9A",
    description: "Master advanced C concepts like pointers, structures, and file handling.",
    platform: "YouTube"
  },

  // C++ Programming
  {
    id: 12,
    title: "C++ Programming Course",
    tags: ["C++"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "10 hours",
    link: "https://www.learncpp.com/",
    description: "Complete C++ programming course from basics to advanced topics.",
    platform: "LearnCpp"
  },
  {
    id: 13,
    title: "C++ Object-Oriented Programming",
    tags: ["C++"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "4 hours",
    link: "https://www.youtube.com/watch?v=wN0x9eZLix4",
    description: "Master object-oriented programming concepts in C++.",
    platform: "YouTube"
  },
  {
    id: 14,
    title: "C++ STL Complete Guide",
    tags: ["C++"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "5 hours",
    link: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/",
    description: "Comprehensive guide to C++ Standard Template Library.",
    platform: "GeeksforGeeks"
  },

  // Data Structures and Algorithms
  {
    id: 15,
    title: "Data Structures and Algorithms",
    tags: ["Data Structures"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "20 hours",
    link: "https://www.freecodecamp.org/learn/coding-interview-prep/",
    description: "Master fundamental data structures and algorithms for coding interviews.",
    platform: "freeCodeCamp"
  },
  {
    id: 16,
    title: "Introduction to Algorithms",
    tags: ["Data Structures"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "40 hours",
    link: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/",
    description: "MIT's comprehensive algorithms course covering advanced concepts.",
    platform: "MIT OpenCourseWare"
  },
  {
    id: 17,
    title: "Data Structures Visualization",
    tags: ["Data Structures"],
    skillLevel: "Beginner",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://visualgo.net/en",
    description: "Interactive visualizations of data structures and algorithms.",
    platform: "VisuAlgo"
  },

  // Web Development
  {
    id: 18,
    title: "Full Stack Web Development",
    tags: ["Web Development"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "30 hours",
    link: "https://www.freecodecamp.org/learn/",
    description: "Complete web development course covering frontend and backend.",
    platform: "freeCodeCamp"
  },
  {
    id: 19,
    title: "Web Development Bootcamp",
    tags: ["Web Development"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "25 hours",
    link: "https://www.theodinproject.com/",
    description: "Comprehensive web development curriculum with hands-on projects.",
    platform: "The Odin Project"
  },

  // Frontend Development
  {
    id: 20,
    title: "Frontend Development Course",
    tags: ["Frontend"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "15 hours",
    link: "https://www.freecodecamp.org/learn/responsive-web-design/",
    description: "Learn HTML, CSS, and responsive web design principles.",
    platform: "freeCodeCamp"
  },
  {
    id: 21,
    title: "Advanced Frontend Techniques",
    tags: ["Frontend"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "2 hours",
    link: "https://web.dev/learn/",
    description: "Modern frontend development best practices and performance optimization.",
    platform: "Web.dev"
  },

  // HTML
  {
    id: 22,
    title: "HTML5 Complete Guide",
    tags: ["HTML"],
    skillLevel: "Beginner",
    type: "Tutorial",
    duration: "4 hours",
    link: "https://www.w3schools.com/html/",
    description: "Learn HTML5 semantic elements, forms, and multimedia integration.",
    platform: "W3Schools"
  },
  {
    id: 23,
    title: "HTML Accessibility Guide",
    tags: ["HTML"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "1 hour",
    link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/HTML",
    description: "Build accessible web applications with proper HTML structure.",
    platform: "MDN Web Docs"
  },

  // CSS
  {
    id: 24,
    title: "CSS Grid and Flexbox Course",
    tags: ["CSS"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "8 hours",
    link: "https://www.freecodecamp.org/learn/responsive-web-design/",
    description: "Master modern CSS layout techniques with Grid and Flexbox.",
    platform: "freeCodeCamp"
  },
  {
    id: 25,
    title: "Advanced CSS Animations",
    tags: ["CSS"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/watch?v=jgw82b5Y2MU",
    description: "Create stunning animations and transitions with CSS.",
    platform: "YouTube"
  },

  // React
  {
    id: 26,
    title: "React Official Tutorial",
    tags: ["React"],
    skillLevel: "Beginner",
    type: "Tutorial",
    duration: "6 hours",
    link: "https://react.dev/learn",
    description: "Official React tutorial covering components, state, and props.",
    platform: "React.dev"
  },
  {
    id: 27,
    title: "React Complete Course",
    tags: ["React"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "12 hours",
    link: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
    description: "Complete React course with hooks, context, and modern patterns.",
    platform: "YouTube"
  },
  {
    id: 28,
    title: "Advanced React Patterns",
    tags: ["React"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "8 hours",
    link: "https://epicreact.dev/",
    description: "Advanced React patterns and performance optimization techniques.",
    platform: "Epic React"
  }
];