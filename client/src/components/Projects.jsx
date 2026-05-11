import { useState } from 'react';
import { ExternalLink, Layout, Server, Database, Plug } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── GitHub profile (single source of truth) ─── */
const GITHUB_PROFILE = 'https://github.com/balaganesh-002';

/* ─── category config ─── */
const categoryConfig = {
  All: { icon: null, gradient: 'from-slate-500 to-slate-600', glow: 'rgba(100,116,139,0.3)' },
  Frontend: { icon: <Layout size={14} />, gradient: 'from-cyan-500 to-blue-600', glow: 'rgba(6,182,212,0.35)' },
  Backend: { icon: <Server size={14} />, gradient: 'from-emerald-500 to-green-600', glow: 'rgba(16,185,129,0.35)' },
  Database: { icon: <Database size={14} />, gradient: 'from-amber-500 to-orange-600', glow: 'rgba(245,158,11,0.35)' },
  API: { icon: <Plug size={14} />, gradient: 'from-violet-500 to-purple-600', glow: 'rgba(139,92,246,0.35)' },
};

/* ─── project data (scalable structure) ─── */
const projectsData = [
  {
    title: 'Fixigo - Real-Time Service Booking Platform',
    description: 'A production-level MERN stack application inspired by Uber and Rapido, enabling users to book nearby mechanics and home service providers in real time with live tracking, Socket.io communication, Razorpay UPI payments, role-based dashboards, and advanced admin controls.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    github: '#',
    live: 'https://fixflow-app.netlify.app',
    techStack: {
      Frontend: ['React.js', 'Tailwind CSS'],
      Backend: ['Node.js', 'Express.js', 'Socket.io'],
      Database: ['MongoDB'],
      API: ['JWT Auth'],
    },
  },
];

/* ─── animation variants ─── */
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, scale: 0.85, y: -6, transition: { duration: 0.2 } },
};

/* ─── Tech Category Buttons ─── */
const TechCategoryButtons = ({ techStack, activeCategory, onSelect }) => {
  // Only show categories that have items
  const availableCategories = ['All', ...Object.keys(techStack).filter(cat => techStack[cat]?.length > 0)];

  return (
    <div className="flex flex-wrap gap-1.5 mb-4">
      {availableCategories.map((cat) => {
        const isActive = activeCategory === cat;
        const config = categoryConfig[cat];
        return (
          <motion.button
            key={cat}
            onClick={(e) => { e.stopPropagation(); onSelect(cat); }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-2 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase
              transition-all duration-400 flex items-center gap-1 cursor-pointer
              ${isActive
                ? 'text-white shadow-lg'
                : 'text-slate-500 dark:text-slate-400 bg-slate-100/80 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.15] hover:text-slate-700 dark:hover:text-slate-200'
              }
            `}
          >
            {/* Active gradient background */}
            {isActive && (
              <motion.div
                layoutId={`cat-bg-${Math.random()}`}
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${config.gradient}`}
                style={{ boxShadow: `0 4px 16px ${config.glow}` }}
                initial={false}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1">
              {cat !== 'All' && config.icon}
              {cat}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

/* ─── Tech Tags Display ─── */
const TechTags = ({ techStack, activeCategory }) => {
  let tags = [];
  if (activeCategory === 'All') {
    // Flatten all categories
    Object.entries(techStack).forEach(([cat, items]) => {
      items.forEach(item => tags.push({ name: item, category: cat }));
    });
  } else {
    tags = (techStack[activeCategory] || []).map(item => ({ name: item, category: activeCategory }));
  }

  return (
    <div className="flex flex-wrap gap-1 min-h-[28px]">
      <AnimatePresence mode="popLayout">
        {tags.map((tag, tIdx) => {
          const config = categoryConfig[tag.category];
          return (
            <motion.span
              key={`${activeCategory}-${tag.name}`}
              custom={tIdx}
              variants={tagVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className={`
                px-2 py-0.5 text-[10px] font-semibold rounded-full
                border transition-all duration-300 cursor-default
                ${activeCategory !== 'All' && activeCategory === tag.category
                  ? `bg-gradient-to-r ${config.gradient} bg-opacity-10 text-white/90 border-transparent shadow-sm`
                  : 'bg-white dark:bg-dark-surface border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400 hover:border-primary-300 dark:hover:border-primary-500/30'
                }
              `}
            >
              {tag.name}
            </motion.span>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

/* ─── Project Card ─── */
const ProjectCard = ({ project, index }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="group bg-slate-50/80 dark:bg-dark-bg/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.08] shadow-sm hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-44 overflow-hidden border-b border-slate-200 dark:border-slate-700">
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-slate-900/60 dark:bg-dark-bg/80 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />

        {/* Image with zoom */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-115 transition-transform duration-700 ease-out"
        />

        {/* Floating links */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0">
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-5 py-2 rounded-full font-bold shadow-[0_0_20px_rgba(139,92,246,0.5)] flex items-center gap-2 transition-all text-xs"
          >
            <ExternalLink size={16} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/95 text-slate-900 hover:bg-white px-5 py-2 rounded-full font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center gap-2 transition-all text-xs"
          >
            <FaGithub size={16} />
            Source Code
          </motion.a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed text-[12px] line-clamp-2">
          {project.description}
        </p>

        {/* Category Buttons */}
        <TechCategoryButtons
          techStack={project.techStack}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Tech Tags */}
        <TechTags
          techStack={project.techStack}
          activeCategory={activeCategory}
        />
      </div>
    </motion.div>
  );
};

/* ─── Main Projects Component ─── */
const Projects = ({ data }) => {
  // Merge incoming API/fallback data with local enriched data
  // This allows backward compatibility while supporting the new structure
  const projects = projectsData;

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-surface transition-colors duration-500 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-[20%] right-[-8%] w-[25%] h-[25%] rounded-full bg-primary-500/[0.03] dark:bg-primary-500/[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-5%] w-[20%] h-[20%] rounded-full bg-neon-blue/[0.03] dark:bg-neon-blue/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary-600 dark:text-primary-400 mb-4 px-4 py-1.5 bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 rounded-full"
          >
            Portfolio
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-neon-blue mx-auto rounded-full shadow-[0_0_12px_rgba(139,92,246,0.4)]" />
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            A selection of my recent work, highlighting scalable architecture and clean UI design.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </div>
    </section>
  );
};

export default Projects;
