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

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check user preference from localStorage or system
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    } else if (savedMode === 'false') {
      setDarkMode(false);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/portfolio`);
        if (res.ok) {
          const data = await res.json();
          setPortfolioData(data);
        }
      } catch (error) {
        console.error("Failed to fetch portfolio data", error);
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

  // If no data is available from backend, fallback to empty object to prevent crashes
  const data = portfolioData || {};

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-200 transition-colors duration-500 font-sans relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none fixed"></div>
      <CustomCursor />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} data={data.about} />
        {data.about && <About data={data.about} />}
        {data.skills && <Skills data={data.skills} />}
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
