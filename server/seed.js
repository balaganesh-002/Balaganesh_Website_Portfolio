require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoose = require('mongoose');
const PortfolioData = require('./models/PortfolioData');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

const seedData = {
  about: {
    headline: "Hello, I am",
    title: "MERN Stack Developer",
    tagline: "Passionate about building scalable full-stack applications with clean architecture. Transforming complex problems into elegant, user-friendly digital solutions.",
    description: "MERN Stack Developer skilled in building scalable, responsive, and real-time web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in developing RESTful APIs, authentication systems, Socket.io integrations, and modern interactive UIs with a strong focus on clean architecture, performance optimization, and user-centric design. Passionate about delivering efficient full-stack solutions while continuously learning emerging technologies and best practices.",
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
      title: "Fixigo - Real-Time Service Booking Platform",
      description:
        "A production-level MERN stack application inspired by Uber and Rapido, enabling users to book nearby mechanics and home service providers in real time with live tracking, Socket.io communication, Razorpay UPI payments, role-based dashboards, and advanced admin controls.",
      tags: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Socket.io",
        "JWT Auth",
        "Tailwind CSS",
        "Framer Motion",
        "Razorpay API",
        "Google Maps API",
      ],
      github: "#",
      live: "https://fixflow-app.netlify.app",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
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
