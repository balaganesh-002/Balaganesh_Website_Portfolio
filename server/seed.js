require('dotenv').config();
const mongoose = require('mongoose');
const PortfolioData = require('./models/PortfolioData');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

const seedData = {
  about: {
    headline: "Hello, I am",
    title: "MERN Stack Developer",
    tagline: "Passionate about building scalable full-stack applications with clean architecture. Transforming complex problems into elegant, user-friendly digital solutions.",
    description: "I am a dedicated Computer Science student and a passionate full-stack developer with a strong foundation in modern web technologies.",
    education: {
      degree: "B.E. Computer Science and Engineering",
      institution: "Solamalai College of Engineering",
      period: "2022 – 2026",
      details: "Focusing on core computer science principles, software engineering, and full-stack web development.",
    },
    experience: {
      role: "Intern",
      company: "Hita Soft Pvt Ltd",
      period: "Recent",
      highlights: [
        "Transformed UI/UX designs into responsive, production-ready code.",
        "Emphasized writing clean, maintainable, and scalable full-stack applications.",
      ],
    }
  },
  skills: [
    {
      category: "Frontend Development",
      icon: "Layout",
      items: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5 & CSS3", level: 90 }
      ]
    },
    {
      category: "Backend Development",
      icon: "Server",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Auth (JWT)", level: 85 }
      ]
    },
    {
      category: "Database",
      icon: "Database",
      items: [
        { name: "MongoDB", level: 85 },
        { name: "Mongoose", level: 85 },
        { name: "NoSQL Design", level: 80 }
      ]
    }
  ],
  projects: [
    {
      title: "JobKicker",
      description: "A freelance marketplace platform with role-based dashboards for freelancers and clients. Features reusable React components for scalable UI architecture.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "#",
      live: "https://jobkickers.netlify.app",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Food Delivery Application",
      description: "A dynamic React-based food delivery application showcasing robust product handling, state management via hooks, and seamless user interaction.",
      tags: ["React.js", "Context API", "CSS/SCSS", "REST API"],
      github: "#",
      live: "https://ecommerence-food-website.netlify.app",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    }
  ],
  certifications: [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy / Coursera",
      date: "2024",
    },
    {
      title: "React - The Complete Guide",
      issuer: "Academind",
      date: "2023",
    }
  ],
  achievements: [
    {
      title: "LangAlthon 2025",
      event: "Finalist",
      description: 'Recognized for the innovative "Voice to Code" solution.',
      details: "Competed against top developers to build AI-driven solutions, demonstrating strong problem-solving skills and the ability to integrate cutting-edge language models into practical applications.",
    }
  ]
};

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await PortfolioData.deleteMany({});
    
    // Insert new data
    const newData = new PortfolioData(seedData);
    await newData.save();
    
    console.log('Portfolio data seeded successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
