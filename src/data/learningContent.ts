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
  // Python Courses
  {
    id: 1,
    title: "Python for Beginners - Complete Course",
    tags: ["Python"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/python-beginners",
    description: "Learn Python programming from scratch with hands-on exercises and projects."
  },
  {
    id: 2,
    title: "Advanced Python Data Structures",
    tags: ["Python"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "45 minutes",
    link: "https://www.youtube.com/embed/R-HLU9Fl5ug",
    description: "Explore advanced Python data structures and their applications."
  },
  {
    id: 3,
    title: "Python Web Scraping Masterclass",
    tags: ["Python"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "1 hour",
    link: "https://example.com/web-scraping",
    description: "Extract data from websites using Python and BeautifulSoup."
  },
  {
    id: 4,
    title: "Data Science with Python",
    tags: ["Python"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/data-science",
    description: "Complete data science workflow using Python and popular libraries."
  },
  {
    id: 5,
    title: "Python Django Web Development",
    tags: ["Python"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/django",
    description: "Build web applications using Django framework."
  },
  {
    id: 6,
    title: "Python Testing and TDD",
    tags: ["Python"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "25 minutes",
    link: "https://example.com/python-testing",
    description: "Master test-driven development in Python with pytest."
  },
  {
    id: 7,
    title: "Python Machine Learning Basics",
    tags: ["Python"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/embed/ml-basics",
    description: "Introduction to machine learning with Python and scikit-learn."
  },
  {
    id: 8,
    title: "Python Flask Microservices",
    tags: ["Python"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/flask-microservices",
    description: "Build microservices architecture using Python Flask."
  },
  {
    id: 9,
    title: "Python Automation Scripts",
    tags: ["Python"],
    skillLevel: "Beginner",
    type: "Book",
    duration: "4 hours",
    link: "https://example.com/python-automation",
    description: "Automate daily tasks using Python scripts."
  },
  {
    id: 10,
    title: "Python Performance Optimization",
    tags: ["Python"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "30 minutes",
    link: "https://example.com/python-performance",
    description: "Optimize Python code for better performance and memory usage."
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
    description: "Learn JavaScript from the ground up with practical examples."
  },
  {
    id: 12,
    title: "Modern JavaScript ES6+",
    tags: ["JavaScript"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "1 hour",
    link: "https://www.youtube.com/embed/NCwa_xi0Uuc",
    description: "Learn modern JavaScript features and syntax improvements."
  },
  {
    id: 13,
    title: "JavaScript Async Programming",
    tags: ["JavaScript"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "2 hours",
    link: "https://example.com/js-async",
    description: "Master asynchronous programming with promises and async/await."
  },
  {
    id: 14,
    title: "JavaScript DOM Manipulation",
    tags: ["JavaScript"],
    skillLevel: "Beginner",
    type: "Article",
    duration: "20 minutes",
    link: "https://example.com/dom-manipulation",
    description: "Learn to interact with web pages using JavaScript DOM APIs."
  },
  {
    id: 15,
    title: "JavaScript Design Patterns",
    tags: ["JavaScript"],
    skillLevel: "Advanced",
    type: "Book",
    duration: "6 hours",
    link: "https://example.com/js-patterns",
    description: "Common design patterns and best practices in JavaScript."
  },
  {
    id: 16,
    title: "JavaScript Testing with Jest",
    tags: ["JavaScript"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "3 hours",
    link: "https://example.com/jest-testing",
    description: "Unit testing JavaScript applications with Jest framework."
  },
  {
    id: 17,
    title: "JavaScript Framework Comparison",
    tags: ["JavaScript"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "45 minutes",
    link: "https://www.youtube.com/embed/framework-comparison",
    description: "Compare popular JavaScript frameworks and libraries."
  },
  {
    id: 18,
    title: "JavaScript Performance Tips",
    tags: ["JavaScript"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "15 minutes",
    link: "https://example.com/js-performance",
    description: "Optimize JavaScript code for better performance."
  },
  {
    id: 19,
    title: "JavaScript Node.js Backend",
    tags: ["JavaScript"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "4 hours",
    link: "https://example.com/nodejs-backend",
    description: "Build backend applications with Node.js and Express."
  },
  {
    id: 20,
    title: "JavaScript React Fundamentals",
    tags: ["JavaScript"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/react-fundamentals",
    description: "Build user interfaces with React.js library."
  },

  // Java Courses
  {
    id: 21,
    title: "Java Programming Basics",
    tags: ["Java"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "10 hours",
    link: "https://example.com/java-basics",
    description: "Learn Java programming fundamentals and object-oriented concepts."
  },
  {
    id: 22,
    title: "Java Spring Boot Framework",
    tags: ["Java"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "3 hours",
    link: "https://www.youtube.com/embed/spring-boot",
    description: "Build enterprise applications with Spring Boot framework."
  },
  {
    id: 23,
    title: "Java Data Structures and Algorithms",
    tags: ["Java"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "15 hours",
    link: "https://example.com/java-dsa",
    description: "Master data structures and algorithms implementation in Java."
  },
  {
    id: 24,
    title: "Java Multithreading and Concurrency",
    tags: ["Java"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "2 hours",
    link: "https://example.com/java-concurrency",
    description: "Understand multithreading and concurrent programming in Java."
  },
  {
    id: 25,
    title: "Java Database Programming with JDBC",
    tags: ["Java"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "30 minutes",
    link: "https://example.com/java-jdbc",
    description: "Connect Java applications to databases using JDBC."
  },
  {
    id: 26,
    title: "Java Design Patterns",
    tags: ["Java"],
    skillLevel: "Advanced",
    type: "Book",
    duration: "8 hours",
    link: "https://example.com/java-patterns",
    description: "Implement common design patterns in Java applications."
  },
  {
    id: 27,
    title: "Java Web Development with Servlets",
    tags: ["Java"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "4 hours",
    link: "https://example.com/java-servlets",
    description: "Build web applications using Java Servlets and JSP."
  },
  {
    id: 28,
    title: "Java Testing with JUnit",
    tags: ["Java"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "1.5 hours",
    link: "https://www.youtube.com/embed/junit-testing",
    description: "Write effective unit tests for Java applications."
  },
  {
    id: 29,
    title: "Java Lambda Expressions and Streams",
    tags: ["Java"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "25 minutes",
    link: "https://example.com/java-lambda",
    description: "Master functional programming features in Java 8+."
  },
  {
    id: 30,
    title: "Java Microservices Architecture",
    tags: ["Java"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/java-microservices",
    description: "Design and implement microservices using Java and Spring."
  },

  // C++ Courses
  {
    id: 31,
    title: "C++ Programming Fundamentals",
    tags: ["C++"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/cpp-fundamentals",
    description: "Learn C++ programming basics and memory management."
  },
  {
    id: 32,
    title: "Advanced C++ Templates",
    tags: ["C++"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/embed/cpp-templates",
    description: "Master template programming and generic programming in C++."
  },
  {
    id: 33,
    title: "C++ STL Complete Guide",
    tags: ["C++"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/cpp-stl",
    description: "Comprehensive guide to C++ Standard Template Library."
  },
  {
    id: 34,
    title: "C++ Object-Oriented Programming",
    tags: ["C++"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/cpp-oop",
    description: "Master OOP concepts in C++ with practical examples."
  },
  {
    id: 35,
    title: "C++ Memory Management",
    tags: ["C++"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "35 minutes",
    link: "https://example.com/cpp-memory",
    description: "Deep dive into C++ memory management and smart pointers."
  },
  {
    id: 36,
    title: "C++ Multithreading Programming",
    tags: ["C++"],
    skillLevel: "Advanced",
    type: "Book",
    duration: "10 hours",
    link: "https://example.com/cpp-threading",
    description: "Concurrent programming and threading in modern C++."
  },
  {
    id: 37,
    title: "C++ Game Development Basics",
    tags: ["C++"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "4 hours",
    link: "https://www.youtube.com/embed/cpp-game-dev",
    description: "Introduction to game development using C++."
  },
  {
    id: 38,
    title: "C++ Performance Optimization",
    tags: ["C++"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "2.5 hours",
    link: "https://example.com/cpp-optimization",
    description: "Optimize C++ code for maximum performance."
  },
  {
    id: 39,
    title: "Modern C++ Features (C++17/20)",
    tags: ["C++"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "40 minutes",
    link: "https://example.com/modern-cpp",
    description: "Explore new features in modern C++ standards."
  },
  {
    id: 40,
    title: "C++ Data Structures Implementation",
    tags: ["C++"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "7 hours",
    link: "https://example.com/cpp-data-structures",
    description: "Implement common data structures from scratch in C++."
  },

  // C# Courses
  {
    id: 41,
    title: "C# Programming Essentials",
    tags: ["C#"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "9 hours",
    link: "https://example.com/csharp-essentials",
    description: "Learn C# programming and .NET framework basics."
  },
  {
    id: 42,
    title: "ASP.NET Core Web Development",
    tags: ["C#"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "5 hours",
    link: "https://www.youtube.com/embed/aspnet-core",
    description: "Build web applications using ASP.NET Core framework."
  },
  {
    id: 43,
    title: "C# Entity Framework",
    tags: ["C#"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/entity-framework",
    description: "Database programming with Entity Framework in C#."
  },
  {
    id: 44,
    title: "C# LINQ and Lambda Expressions",
    tags: ["C#"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "25 minutes",
    link: "https://example.com/csharp-linq",
    description: "Master LINQ queries and lambda expressions in C#."
  },
  {
    id: 45,
    title: "C# Async/Await Programming",
    tags: ["C#"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "4 hours",
    link: "https://example.com/csharp-async",
    description: "Asynchronous programming patterns in C#."
  },
  {
    id: 46,
    title: "C# Design Patterns",
    tags: ["C#"],
    skillLevel: "Advanced",
    type: "Book",
    duration: "12 hours",
    link: "https://example.com/csharp-patterns",
    description: "Implement design patterns in C# applications."
  },
  {
    id: 47,
    title: "C# Unit Testing with xUnit",
    tags: ["C#"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/embed/csharp-testing",
    description: "Write effective unit tests for C# applications."
  },
  {
    id: 48,
    title: "C# Dependency Injection",
    tags: ["C#"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "1.5 hours",
    link: "https://example.com/csharp-di",
    description: "Implement dependency injection in C# applications."
  },
  {
    id: 49,
    title: "C# Desktop Applications with WPF",
    tags: ["C#"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/wpf-desktop",
    description: "Build desktop applications using WPF framework."
  },
  {
    id: 50,
    title: "C# Microservices with Docker",
    tags: ["C#"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "45 minutes",
    link: "https://example.com/csharp-microservices",
    description: "Deploy C# microservices using Docker containers."
  },

  // Go Courses
  {
    id: 51,
    title: "Go Programming Basics",
    tags: ["Go"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/go-basics",
    description: "Learn Go programming language fundamentals and syntax."
  },
  {
    id: 52,
    title: "Go Concurrency Patterns",
    tags: ["Go"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/embed/go-concurrency",
    description: "Master goroutines and channels for concurrent programming."
  },
  {
    id: 53,
    title: "Go Web Development with Gin",
    tags: ["Go"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/go-gin",
    description: "Build REST APIs using Go and Gin framework."
  },
  {
    id: 54,
    title: "Go Database Programming",
    tags: ["Go"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "30 minutes",
    link: "https://example.com/go-database",
    description: "Connect Go applications to databases with SQL drivers."
  },
  {
    id: 55,
    title: "Go Testing and Benchmarking",
    tags: ["Go"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "4 hours",
    link: "https://example.com/go-testing",
    description: "Write tests and benchmarks for Go applications."
  },
  {
    id: 56,
    title: "Go Microservices Architecture",
    tags: ["Go"],
    skillLevel: "Advanced",
    type: "Book",
    duration: "10 hours",
    link: "https://example.com/go-microservices",
    description: "Design microservices using Go programming language."
  },
  {
    id: 57,
    title: "Go Performance Optimization",
    tags: ["Go"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "1.5 hours",
    link: "https://www.youtube.com/embed/go-performance",
    description: "Optimize Go applications for better performance."
  },
  {
    id: 58,
    title: "Go CLI Applications",
    tags: ["Go"],
    skillLevel: "Beginner",
    type: "Tutorial",
    duration: "2 hours",
    link: "https://example.com/go-cli",
    description: "Build command-line applications using Go."
  },
  {
    id: 59,
    title: "Go Docker and Containerization",
    tags: ["Go"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "25 minutes",
    link: "https://example.com/go-docker",
    description: "Containerize Go applications with Docker."
  },
  {
    id: 60,
    title: "Go Design Patterns",
    tags: ["Go"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "5 hours",
    link: "https://example.com/go-patterns",
    description: "Implement common design patterns in Go."
  },

  // Rust Courses
  {
    id: 61,
    title: "Rust Programming Fundamentals",
    tags: ["Rust"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/rust-fundamentals",
    description: "Learn Rust programming with ownership and borrowing concepts."
  },
  {
    id: 62,
    title: "Rust Memory Safety",
    tags: ["Rust"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/embed/rust-memory",
    description: "Understand Rust's memory safety guarantees and zero-cost abstractions."
  },
  {
    id: 63,
    title: "Rust Web Development with Actix",
    tags: ["Rust"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "4 hours",
    link: "https://example.com/rust-actix",
    description: "Build web applications using Rust and Actix framework."
  },
  {
    id: 64,
    title: "Rust Systems Programming",
    tags: ["Rust"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "10 hours",
    link: "https://example.com/rust-systems",
    description: "Low-level systems programming with Rust."
  },
  {
    id: 65,
    title: "Rust Error Handling",
    tags: ["Rust"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "20 minutes",
    link: "https://example.com/rust-errors",
    description: "Master error handling patterns in Rust programming."
  },
  {
    id: 66,
    title: "Rust Concurrency and Parallelism",
    tags: ["Rust"],
    skillLevel: "Advanced",
    type: "Book",
    duration: "12 hours",
    link: "https://example.com/rust-concurrency",
    description: "Concurrent and parallel programming in Rust."
  },
  {
    id: 67,
    title: "Rust Testing Strategies",
    tags: ["Rust"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "1.5 hours",
    link: "https://www.youtube.com/embed/rust-testing",
    description: "Write comprehensive tests for Rust applications."
  },
  {
    id: 68,
    title: "Rust CLI Tools Development",
    tags: ["Rust"],
    skillLevel: "Beginner",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/rust-cli",
    description: "Create command-line tools using Rust programming."
  },
  {
    id: 69,
    title: "Rust Performance Optimization",
    tags: ["Rust"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "35 minutes",
    link: "https://example.com/rust-performance",
    description: "Optimize Rust code for maximum performance."
  },
  {
    id: 70,
    title: "Rust WebAssembly Programming",
    tags: ["Rust"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/rust-wasm",
    description: "Compile Rust to WebAssembly for web applications."
  },

  // Swift Courses
  {
    id: 71,
    title: "Swift Programming Basics",
    tags: ["Swift"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "7 hours",
    link: "https://example.com/swift-basics",
    description: "Learn Swift programming language for iOS development."
  },
  {
    id: 72,
    title: "iOS App Development with SwiftUI",
    tags: ["Swift"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "5 hours",
    link: "https://www.youtube.com/embed/swiftui-development",
    description: "Build iOS applications using SwiftUI framework."
  },
  {
    id: 73,
    title: "Swift Advanced Features",
    tags: ["Swift"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/swift-advanced",
    description: "Master advanced Swift features like generics and protocols."
  },
  {
    id: 74,
    title: "Swift Core Data Programming",
    tags: ["Swift"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "4 hours",
    link: "https://example.com/swift-coredata",
    description: "Manage app data using Core Data framework in Swift."
  },
  {
    id: 75,
    title: "Swift Networking and APIs",
    tags: ["Swift"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "25 minutes",
    link: "https://example.com/swift-networking",
    description: "Handle network requests and REST APIs in Swift."
  },
  {
    id: 76,
    title: "Swift Design Patterns",
    tags: ["Swift"],
    skillLevel: "Advanced",
    type: "Book",
    duration: "8 hours",
    link: "https://example.com/swift-patterns",
    description: "Implement design patterns in Swift applications."
  },
  {
    id: 77,
    title: "Swift Testing with XCTest",
    tags: ["Swift"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/embed/swift-testing",
    description: "Write unit and UI tests for Swift applications."
  },
  {
    id: 78,
    title: "Swift Concurrency with async/await",
    tags: ["Swift"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "2.5 hours",
    link: "https://example.com/swift-concurrency",
    description: "Modern concurrency programming in Swift."
  },
  {
    id: 79,
    title: "Swift watchOS Development",
    tags: ["Swift"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/swift-watchos",
    description: "Develop applications for Apple Watch using Swift."
  },
  {
    id: 80,
    title: "Swift Performance Tips",
    tags: ["Swift"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "30 minutes",
    link: "https://example.com/swift-performance",
    description: "Optimize Swift code for better app performance."
  },

  // PHP Courses
  {
    id: 81,
    title: "PHP Programming Fundamentals",
    tags: ["PHP"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/php-fundamentals",
    description: "Learn PHP programming basics for web development."
  },
  {
    id: 82,
    title: "PHP Laravel Framework",
    tags: ["PHP"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "4 hours",
    link: "https://www.youtube.com/embed/php-laravel",
    description: "Build web applications using Laravel PHP framework."
  },
  {
    id: 83,
    title: "PHP MySQL Database Integration",
    tags: ["PHP"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/php-mysql",
    description: "Connect PHP applications to MySQL databases."
  },
  {
    id: 84,
    title: "PHP Object-Oriented Programming",
    tags: ["PHP"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "5 hours",
    link: "https://example.com/php-oop",
    description: "Master OOP concepts in PHP programming."
  },
  {
    id: 85,
    title: "PHP Security Best Practices",
    tags: ["PHP"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "30 minutes",
    link: "https://example.com/php-security",
    description: "Secure PHP applications against common vulnerabilities."
  },
  {
    id: 86,
    title: "PHP API Development",
    tags: ["PHP"],
    skillLevel: "Intermediate",
    type: "Book",
    duration: "7 hours",
    link: "https://example.com/php-api",
    description: "Build RESTful APIs using PHP and modern frameworks."
  },
  {
    id: 87,
    title: "PHP Testing with PHPUnit",
    tags: ["PHP"],
    skillLevel: "Advanced",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/embed/php-testing",
    description: "Write unit tests for PHP applications using PHPUnit."
  },
  {
    id: 88,
    title: "PHP Performance Optimization",
    tags: ["PHP"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "2.5 hours",
    link: "https://example.com/php-performance",
    description: "Optimize PHP applications for better performance."
  },
  {
    id: 89,
    title: "PHP Composer and Package Management",
    tags: ["PHP"],
    skillLevel: "Beginner",
    type: "Article",
    duration: "20 minutes",
    link: "https://example.com/php-composer",
    description: "Manage PHP dependencies using Composer package manager."
  },
  {
    id: 90,
    title: "PHP Modern Development Practices",
    tags: ["PHP"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/php-modern",
    description: "Modern PHP development with PSR standards and best practices."
  },

  // Ruby Courses
  {
    id: 91,
    title: "Ruby Programming Essentials",
    tags: ["Ruby"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "7 hours",
    link: "https://example.com/ruby-essentials",
    description: "Learn Ruby programming language fundamentals."
  },
  {
    id: 92,
    title: "Ruby on Rails Web Development",
    tags: ["Ruby"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "6 hours",
    link: "https://www.youtube.com/embed/ruby-rails",
    description: "Build web applications using Ruby on Rails framework."
  },
  {
    id: 93,
    title: "Ruby Metaprogramming",
    tags: ["Ruby"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/ruby-metaprogramming",
    description: "Master metaprogramming techniques in Ruby."
  },
  {
    id: 94,
    title: "Ruby Testing with RSpec",
    tags: ["Ruby"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "4 hours",
    link: "https://example.com/ruby-rspec",
    description: "Write behavior-driven tests using RSpec framework."
  },
  {
    id: 95,
    title: "Ruby Design Patterns",
    tags: ["Ruby"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "35 minutes",
    link: "https://example.com/ruby-patterns",
    description: "Implement design patterns in Ruby applications."
  },
  {
    id: 96,
    title: "Ruby Performance Tuning",
    tags: ["Ruby"],
    skillLevel: "Advanced",
    type: "Book",
    duration: "9 hours",
    link: "https://example.com/ruby-performance",
    description: "Optimize Ruby applications for better performance."
  },
  {
    id: 97,
    title: "Ruby Gems Development",
    tags: ["Ruby"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "2.5 hours",
    link: "https://www.youtube.com/embed/ruby-gems",
    description: "Create and publish Ruby gems for code reuse."
  },
  {
    id: 98,
    title: "Ruby Functional Programming",
    tags: ["Ruby"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/ruby-functional",
    description: "Apply functional programming concepts in Ruby."
  },
  {
    id: 99,
    title: "Ruby Database Programming",
    tags: ["Ruby"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "25 minutes",
    link: "https://example.com/ruby-database",
    description: "Work with databases in Ruby applications."
  },
  {
    id: 100,
    title: "Ruby Deployment and DevOps",
    tags: ["Ruby"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "5 hours",
    link: "https://example.com/ruby-devops",
    description: "Deploy and manage Ruby applications in production."
  },

  // Kotlin Courses
  {
    id: 101,
    title: "Kotlin Programming Basics",
    tags: ["Kotlin"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/kotlin-basics",
    description: "Learn Kotlin programming language fundamentals."
  },
  {
    id: 102,
    title: "Android Development with Kotlin",
    tags: ["Kotlin"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "8 hours",
    link: "https://www.youtube.com/embed/kotlin-android",
    description: "Build Android applications using Kotlin programming."
  },
  {
    id: 103,
    title: "Kotlin Coroutines and Concurrency",
    tags: ["Kotlin"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/kotlin-coroutines",
    description: "Master asynchronous programming with Kotlin coroutines."
  },
  {
    id: 104,
    title: "Kotlin Multiplatform Development",
    tags: ["Kotlin"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "10 hours",
    link: "https://example.com/kotlin-multiplatform",
    description: "Share code between platforms using Kotlin Multiplatform."
  },
  {
    id: 105,
    title: "Kotlin Functional Programming",
    tags: ["Kotlin"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "30 minutes",
    link: "https://example.com/kotlin-functional",
    description: "Apply functional programming concepts in Kotlin."
  },
  {
    id: 106,
    title: "Kotlin Spring Boot Development",
    tags: ["Kotlin"],
    skillLevel: "Intermediate",
    type: "Book",
    duration: "8 hours",
    link: "https://example.com/kotlin-spring",
    description: "Build backend services using Kotlin and Spring Boot."
  },
  {
    id: 107,
    title: "Kotlin Testing Strategies",
    tags: ["Kotlin"],
    skillLevel: "Intermediate",
    type: "Video",
    duration: "2 hours",
    link: "https://www.youtube.com/embed/kotlin-testing",
    description: "Write effective tests for Kotlin applications."
  },
  {
    id: 108,
    title: "Kotlin DSL Development",
    tags: ["Kotlin"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "2.5 hours",
    link: "https://example.com/kotlin-dsl",
    description: "Create domain-specific languages in Kotlin."
  },
  {
    id: 109,
    title: "Kotlin Performance Optimization",
    tags: ["Kotlin"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "25 minutes",
    link: "https://example.com/kotlin-performance",
    description: "Optimize Kotlin applications for better performance."
  },
  {
    id: 110,
    title: "Kotlin Design Patterns",
    tags: ["Kotlin"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "7 hours",
    link: "https://example.com/kotlin-patterns",
    description: "Implement design patterns in Kotlin applications."
  },

  // Data Structures and Algorithms
  {
    id: 1136,
    title: "Complete Data Structures and Algorithms Course",
    tags: ["Data Structures", "Algorithms"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/dsa-complete",
    description: "Master fundamental data structures and algorithms from scratch."
  },
  {
    id: 1137,
    title: "Advanced Algorithm Design Techniques",
    tags: ["Algorithms"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/advanced-algorithms",
    description: "Learn dynamic programming, greedy algorithms, and graph algorithms."
  },
  {
    id: 1138,
    title: "Competitive Programming with DSA",
    tags: ["Data Structures", "Algorithms"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/competitive-programming",
    description: "Apply DSA concepts to solve competitive programming problems."
  },

  // Database Management Systems
  {
    id: 1139,
    title: "Database Design and Management",
    tags: ["Database"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "10 hours",
    link: "https://example.com/database-design",
    description: "Learn SQL, database design, normalization, and ACID properties."
  },
  {
    id: 1140,
    title: "Advanced Database Systems",
    tags: ["Database"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/advanced-database",
    description: "Explore NoSQL databases, distributed databases, and performance tuning."
  },
  {
    id: 1141,  
    title: "SQL Mastery for Developers",
    tags: ["Database"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "4 hours",
    link: "https://example.com/sql-mastery",
    description: "Master complex SQL queries, stored procedures, and optimization."
  },

  // Computer Networks
  {
    id: 1142,
    title: "Computer Networks Fundamentals",
    tags: ["Networks"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/networks-fundamentals",
    description: "Learn OSI model, TCP/IP, routing, and network protocols."
  },
  {
    id: 1143,
    title: "Network Security and Protocols",
    tags: ["Networks", "Security"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/network-security",
    description: "Understand network security, firewalls, VPNs, and encryption."
  },
  {
    id: 1144,
    title: "Wireless and Mobile Networks",
    tags: ["Networks"],
    skillLevel: "Advanced",
    type: "Article",
    duration: "2 hours",
    link: "https://example.com/wireless-networks",
    description: "Explore wireless communication, 5G, and mobile network architecture."
  },

  // Operating Systems
  {
    id: 1145,
    title: "Operating Systems Concepts",
    tags: ["Operating Systems"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "10 hours",
    link: "https://example.com/os-concepts",
    description: "Learn process management, memory management, and file systems."
  },
  {
    id: 1146,
    title: "Linux System Administration",
    tags: ["Operating Systems", "Linux"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "5 hours",
    link: "https://example.com/linux-admin",
    description: "Master Linux commands, shell scripting, and system administration."
  },
  {
    id: 1147,
    title: "Distributed Operating Systems",
    tags: ["Operating Systems"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "7 hours",
    link: "https://example.com/distributed-os",
    description: "Understand distributed systems, synchronization, and fault tolerance."
  },

  // Software Engineering
  {
    id: 1148,
    title: "Software Engineering Principles",
    tags: ["Software Engineering"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/software-engineering",
    description: "Learn SDLC, design patterns, testing, and project management."
  },
  {
    id: 1149,
    title: "Agile and Scrum Methodology",
    tags: ["Software Engineering"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "3 hours",
    link: "https://example.com/agile-scrum",
    description: "Master agile development practices and Scrum framework."
  },
  {
    id: 1150,
    title: "Software Architecture Design",
    tags: ["Software Engineering"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/software-architecture",
    description: "Design scalable software architectures and microservices."
  },

  // Machine Learning
  {
    id: 1151,
    title: "Machine Learning for Beginners",
    tags: ["Machine Learning"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/ml-beginners",
    description: "Introduction to ML algorithms, supervised and unsupervised learning."
  },
  {
    id: 1152,
    title: "Deep Learning with Neural Networks",
    tags: ["Machine Learning", "Deep Learning"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "15 hours",
    link: "https://example.com/deep-learning",
    description: "Master neural networks, CNNs, RNNs, and deep learning frameworks."
  },
  {
    id: 1153,
    title: "Natural Language Processing",
    tags: ["Machine Learning", "NLP"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "6 hours",
    link: "https://example.com/nlp-tutorial",
    description: "Learn text processing, sentiment analysis, and language models."
  },

  // Artificial Intelligence
  {
    id: 1154,
    title: "Introduction to Artificial Intelligence",
    tags: ["Artificial Intelligence"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "10 hours",
    link: "https://example.com/ai-intro",
    description: "Explore AI concepts, search algorithms, and knowledge representation."
  },
  {
    id: 1155,
    title: "Computer Vision Fundamentals",
    tags: ["Artificial Intelligence", "Computer Vision"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/computer-vision",
    description: "Learn image processing, object detection, and recognition algorithms."
  },
  {
    id: 1156,
    title: "AI Ethics and Responsible AI",
    tags: ["Artificial Intelligence"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "2 hours",
    link: "https://example.com/ai-ethics",
    description: "Understand ethical implications of AI and responsible development practices."
  },

  // Cybersecurity
  {
    id: 1157,
    title: "Cybersecurity Fundamentals",
    tags: ["Cybersecurity"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/cybersecurity-basics",
    description: "Learn security principles, threats, vulnerabilities, and risk management."
  },
  {
    id: 1158,
    title: "Ethical Hacking and Penetration Testing",
    tags: ["Cybersecurity"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/ethical-hacking",
    description: "Master penetration testing, vulnerability assessment, and security tools."
  },
  {
    id: 1159,
    title: "Cryptography and Data Protection",
    tags: ["Cybersecurity"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "4 hours",
    link: "https://example.com/cryptography",
    description: "Understand encryption, digital signatures, and secure communication."
  },

  // Computer Graphics
  {
    id: 1160,
    title: "Computer Graphics Basics",
    tags: ["Computer Graphics"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/graphics-basics",
    description: "Learn 2D/3D graphics, rendering algorithms, and graphics programming."
  },
  {
    id: 1161,
    title: "Game Development with Graphics",
    tags: ["Computer Graphics", "Game Development"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "10 hours",
    link: "https://example.com/game-graphics",
    description: "Create games using graphics engines and rendering techniques."
  },
  {
    id: 1162,
    title: "Advanced Rendering Techniques",
    tags: ["Computer Graphics"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "5 hours",
    link: "https://example.com/advanced-rendering",
    description: "Master ray tracing, global illumination, and real-time rendering."
  },

  // Cloud Computing
  {
    id: 1163,
    title: "Cloud Computing Fundamentals",
    tags: ["Cloud Computing"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/cloud-basics",
    description: "Learn cloud models, AWS/Azure basics, and cloud architecture."
  },
  {
    id: 1164,
    title: "Docker and Containerization",
    tags: ["Cloud Computing", "DevOps"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "4 hours",
    link: "https://example.com/docker-tutorial",
    description: "Master Docker containers, orchestration, and microservices deployment."
  },
  {
    id: 1165,
    title: "Kubernetes for Production",
    tags: ["Cloud Computing", "DevOps"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/kubernetes-production",
    description: "Deploy and manage applications at scale using Kubernetes."
  },

  // Web Development
  {
    id: 1166,
    title: "Full Stack Web Development",
    tags: ["Web Development"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "20 hours",
    link: "https://example.com/fullstack-web",
    description: "Build complete web applications using modern frameworks and tools."
  },
  {
    id: 1167,
    title: "React.js Advanced Patterns",
    tags: ["Web Development", "React"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "6 hours",
    link: "https://example.com/react-advanced",
    description: "Master advanced React patterns, hooks, and performance optimization."
  },
  {
    id: 1168,
    title: "RESTful API Design",
    tags: ["Web Development"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "5 hours",
    link: "https://example.com/api-design",
    description: "Design and implement scalable REST APIs with best practices."
  },

  // Mobile Development
  {
    id: 1169,
    title: "Android App Development",
    tags: ["Mobile Development"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "15 hours",
    link: "https://example.com/android-development",
    description: "Build native Android apps using Java/Kotlin and Android Studio."
  },
  {
    id: 1170,
    title: "iOS Development with Swift",
    tags: ["Mobile Development"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/ios-swift",
    description: "Create iOS applications using Swift and Xcode development environment."
  },
  {
    id: 1171,
    title: "Cross-Platform Mobile Development",
    tags: ["Mobile Development"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "8 hours",
    link: "https://example.com/cross-platform-mobile",
    description: "Build mobile apps for multiple platforms using React Native or Flutter."
  },

  // DevOps
  {
    id: 1172,
    title: "DevOps Fundamentals",
    tags: ["DevOps"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "10 hours",
    link: "https://example.com/devops-basics",
    description: "Learn CI/CD, infrastructure as code, and DevOps culture."
  },
  {
    id: 1173,
    title: "Advanced CI/CD Pipelines",
    tags: ["DevOps"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "6 hours",
    link: "https://example.com/cicd-advanced",
    description: "Build sophisticated deployment pipelines with Jenkins, GitLab CI, or GitHub Actions."
  },
  {
    id: 1174,
    title: "Infrastructure Monitoring and Logging",
    tags: ["DevOps"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "4 hours",
    link: "https://example.com/monitoring-logging",
    description: "Implement monitoring, alerting, and logging solutions for production systems."
  },

  // Blockchain
  {
    id: 1175,
    title: "Blockchain Technology Fundamentals",
    tags: ["Blockchain"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/blockchain-basics",
    description: "Understand blockchain principles, cryptocurrency, and decentralized systems."
  },
  {
    id: 1176,
    title: "Smart Contract Development",
    tags: ["Blockchain"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "10 hours",
    link: "https://example.com/smart-contracts",
    description: "Build smart contracts using Solidity and deploy on Ethereum blockchain."
  },
  {
    id: 1177,
    title: "DeFi and Web3 Development",
    tags: ["Blockchain"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/defi-web3",
    description: "Create decentralized applications and DeFi protocols."
  },

  // Internet of Things (IoT)
  {
    id: 1178,
    title: "IoT Systems Design",
    tags: ["IoT"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "6 hours",
    link: "https://example.com/iot-design",
    description: "Design and build IoT systems with sensors, actuators, and connectivity."
  },
  {
    id: 1179,
    title: "IoT Security and Privacy",
    tags: ["IoT", "Security"],
    skillLevel: "Intermediate",
    type: "Article",
    duration: "3 hours",
    link: "https://example.com/iot-security",
    description: "Implement security measures for IoT devices and networks."
  },
  {
    id: 1180,
    title: "Industrial IoT Applications",
    tags: ["IoT"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "5 hours",
    link: "https://example.com/industrial-iot",
    description: "Develop IoT solutions for industrial automation and monitoring."
  },

  // Computer Architecture
  {
    id: 1181,
    title: "Computer Architecture Fundamentals",
    tags: ["Computer Architecture"],
    skillLevel: "Beginner",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/computer-architecture",
    description: "Learn CPU design, memory hierarchy, and instruction set architecture."
  },
  {
    id: 1182,
    title: "Parallel Computing Systems",
    tags: ["Computer Architecture"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "10 hours",
    link: "https://example.com/parallel-computing",
    description: "Understand multicore processors, parallel algorithms, and performance optimization."
  },
  {
    id: 1183,
    title: "Embedded Systems Programming",
    tags: ["Computer Architecture"],
    skillLevel: "Intermediate",
    type: "Tutorial",
    duration: "6 hours",
    link: "https://example.com/embedded-systems",
    description: "Program microcontrollers and embedded devices for real-time applications."
  },

  // Distributed Systems
  {
    id: 1184,
    title: "Distributed Systems Concepts",
    tags: ["Distributed Systems"],
    skillLevel: "Intermediate",
    type: "Course",
    duration: "12 hours",
    link: "https://example.com/distributed-systems",
    description: "Learn distributed algorithms, consensus, and fault tolerance mechanisms."
  },
  {
    id: 1185,
    title: "Microservices Architecture",
    tags: ["Distributed Systems"],
    skillLevel: "Advanced",
    type: "Course",
    duration: "8 hours",
    link: "https://example.com/microservices",
    description: "Design and implement microservices-based distributed applications."
  },
  {
    id: 1186,
    title: "Big Data Processing Systems",
    tags: ["Distributed Systems"],
    skillLevel: "Advanced",
    type: "Tutorial",
    duration: "6 hours",
    link: "https://example.com/big-data-systems",
    description: "Process large datasets using Hadoop, Spark, and distributed computing frameworks."
  }
];