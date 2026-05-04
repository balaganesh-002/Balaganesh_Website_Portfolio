import { Moon, Sun, Download, ArrowRight, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ darkMode, toggleDarkMode, data }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const nameLetters = "Balaganesh S".split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Animated Glowing Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-600/30 dark:bg-primary-500/20 blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-blue/20 dark:bg-neon-blue/20 blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            style={{ y: y1, opacity }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl font-semibold text-primary-600 dark:text-neon-blue tracking-[0.2em] uppercase mb-4 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
            >
              {data?.headline || 'Hello, I am'}
            </motion.h2>
            
            <motion.div 
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start overflow-hidden flex-wrap mb-2"
            >
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-primary-800 dark:from-white dark:to-primary-300 drop-shadow-sm tracking-tighter hover:text-primary-500 dark:hover:text-neon-blue transition-colors duration-300 cursor-default"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-primary-200 mb-6 tracking-wide"
            >
              {data?.title || 'MERN Stack Developer'}
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0 font-medium"
            >
              {data?.tagline || 'Passionate about building scalable full-stack applications with clean architecture.'}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6"
            >
              <a 
                href="#projects" 
                className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-600 dark:to-neon-purple text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-slate-300 dark:border-primary-500/50 hover:border-primary-600 dark:hover:border-neon-blue text-slate-800 dark:text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] dark:hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="flex-1 flex justify-center md:justify-end relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 dark:border-white/5 shadow-[0_0_40px_rgba(124,58,237,0.3)] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/50 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
              <img 
                src="/profile.png" 
                alt="Balaganesh S" 
                className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-700"
                style={{ borderRadius: '100%' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Floating Dark Mode Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, type: 'spring' }}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleDarkMode}
        className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-lg p-4 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.3)] border border-white/20 text-slate-800 dark:text-white hover:text-primary-600 dark:hover:text-neon-blue transition-all z-50"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>
    </section>
  );
};

export default Hero;
