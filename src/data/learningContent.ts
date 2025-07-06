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
  {
    id: 1,
    title: "Intro to ML by Andrew Ng",
    tags: ["ML", "AI"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "60 hours",
    link: "https://coursera.org/ml-ng",
    description: "Comprehensive machine learning course by Andrew Ng covering fundamentals of AI and ML.",
    platform: "Coursera"
  },
  {
    id: 2,
    title: "Python Basics",
    tags: ["Python"],
    skillLevel: "Beginner",
    type: "Video",
    duration: "4 hours",
    link: "https://youtube.com/py-basics",
    description: "Learn Python programming fundamentals from scratch with practical examples.",
    platform: "YouTube"
  },
  {
    id: 3,
    title: "Web Dev Crash Course",
    tags: ["HTML", "CSS", "Web Development"],
    skillLevel: "Beginner",
    type: "Video",
    duration: "8 hours",
    link: "https://youtube.com/web-crash",
    description: "Complete web development crash course covering HTML and CSS basics.",
    platform: "freeCodeCamp"
  },
  {
    id: 4,
    title: "JavaScript Full Course",
    tags: ["JavaScript", "Web Development"],
    skillLevel: "Beginner",
    type: "Video",
    duration: "8 hours",
    link: "https://www.youtube.com/watch?v=jS4aFq5-91M",
    description: "Complete JavaScript course from basics to advanced concepts for web development.",
    platform: "freeCodeCamp"
  },
  {
    id: 5,
    title: "Data Structures and Algorithms in C++",
    tags: ["Data Structures", "C++"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "40 hours",
    link: "https://practice.geeksforgeeks.org/courses/DSA-Self-Paced",
    description: "Master data structures and algorithms using C++ for competitive programming.",
    platform: "GeeksforGeeks"
  },
  {
    id: 6,
    title: "Operating System Crash Course",
    tags: ["Operating Systems"],
    skillLevel: "Beginner",
    type: "Video",
    duration: "5 hours",
    link: "https://www.youtube.com/watch?v=26QPDBe-NB8",
    description: "Comprehensive overview of operating system concepts and theory.",
    platform: "YouTube"
  },
  {
    id: 7,
    title: "DBMS Full Tutorial",
    tags: ["Database", "SQL"],
    skillLevel: "Beginner",
    type: "Video",
    duration: "6 hours",
    link: "https://www.youtube.com/watch?v=ESiqDY2mr5A",
    description: "Complete database management systems tutorial covering SQL and MySQL.",
    platform: "Gate Smashers"
  },
  {
    id: 8,
    title: "Java Programming for Beginners",
    tags: ["Java"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "25 hours",
    link: "https://www.coursera.org/learn/java-programming",
    description: "Learn Java programming from basics including object-oriented programming concepts.",
    platform: "Coursera"
  },
  {
    id: 9,
    title: "Git & GitHub for Beginners",
    tags: ["Git", "GitHub"],
    skillLevel: "Beginner",
    type: "Video",
    duration: "1 hour",
    link: "https://www.youtube.com/watch?v=RGOj5yH7evk",
    description: "Master version control with Git and GitHub for collaborative development.",
    platform: "YouTube"
  },
  {
    id: 10,
    title: "Computer Networks Crash Course",
    tags: ["Networking"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "12 hours",
    link: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjX3C9ZpG2Ob3J2Q1y_MFNa",
    description: "Complete computer networking course covering TCP/IP and network protocols.",
    platform: "Neso Academy"
  },
  {
    id: 11,
    title: "System Design Primer",
    tags: ["System Design"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "10 hours",
    link: "https://github.com/donnemartin/system-design-primer",
    description: "Comprehensive guide to system design concepts and scalable architecture patterns.",
    platform: "GitHub"
  },
  {
    id: 12,
    title: "Data Science with Python",
    tags: ["Python", "Data Science"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "35 hours",
    link: "https://www.coursera.org/learn/data-analysis-with-python",
    description: "Learn data science using Python, pandas, and machine learning techniques.",
    platform: "Coursera"
  },
  {
    id: 13,
    title: "Introduction to Cybersecurity",
    tags: ["Cybersecurity"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "15 hours",
    link: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
    description: "Fundamental cybersecurity concepts and network security principles.",
    platform: "Cisco Networking Academy"
  },
  {
    id: 14,
    title: "Full Stack Web Development",
    tags: ["React", "Frontend", "Web Development"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "12 hours",
    link: "https://www.youtube.com/watch?v=4W4LvJnNegk",
    description: "Complete full stack web development course using MERN stack (React, Node.js).",
    platform: "freeCodeCamp"
  },
  {
    id: 15,
    title: "Cloud Computing Basics",
    tags: ["Cloud Computing"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "20 hours",
    link: "https://www.coursera.org/learn/cloud-computing-basics",
    description: "Introduction to cloud computing concepts including AWS and GCP fundamentals.",
    platform: "IBM/Coursera"
  }
];