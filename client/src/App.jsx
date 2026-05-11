import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Fallback data so the site always works, even without the backend
const fallbackData = {
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
      title: "Fixigo - Real-Time Service Booking Platform",
      description: "A production-level MERN stack application inspired by Uber and Rapido, enabling users to book nearby mechanics and home service providers in real time with live tracking, Socket.io communication, Razorpay UPI payments, role-based dashboards, and advanced admin controls.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT Auth", "Tailwind CSS"],
      github: "#",
      live: "https://fixflow-app.netlify.app",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
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

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    } else if (savedMode === 'false') {
      setDarkMode(false);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/portfolio`);
        if (res.ok) {
          const data = await res.json();
          setPortfolioData(data);
        }
      } catch (error) {
        console.error("Failed to fetch portfolio data, using fallback", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
      </div>
    );
  }

  // Use API data if available, otherwise use fallback data
  const data = portfolioData || fallbackData;

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-200 transition-colors duration-500 font-sans relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none fixed"></div>
      <CustomCursor />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} data={data.about} />
        {data.about && <About data={data.about} />}
        <Skills />
        {data.projects && <Projects data={data.projects} />}
        {data.certifications && <Certifications data={data.certifications} />}
        {data.achievements && <Achievements data={data.achievements} />}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

