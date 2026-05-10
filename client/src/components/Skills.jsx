import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaDatabase, FaServer,
  FaCss3Alt, FaBootstrap, FaLayerGroup
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb
} from 'react-icons/si';
import {
  Layers, Layout, Server, Database, Smartphone, Braces, Plug, ShieldCheck
} from 'lucide-react';

/* ─── category button config ─── */
const categoryButtons = [
  {
    key: 'all',
    label: 'All Skills',
    icon: <Layers className="w-4 h-4" />,
    gradient: 'from-primary-500 to-neon-blue',
    glow: 'rgba(139,92,246,0.35)',
  },

  {
    key: 'frontend',
    label: 'Frontend',
    icon: <Layout className="w-4 h-4" />,
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.35)',
  },
  {
    key: 'backend',
    label: 'Backend',
    icon: <Server className="w-4 h-4" />,
    gradient: 'from-emerald-500 to-green-600',
    glow: 'rgba(16,185,129,0.35)',
  },
  {
    key: 'database',
    label: 'Database & API',
    icon: <Database className="w-4 h-4" />,
    gradient: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.35)',
  },
];

/* ─── skills data grouped by category ─── */
const skillsData = {

  frontend: [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-400', bg: 'from-orange-500/10 to-red-500/10', border: 'border-orange-500/20' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-400', bg: 'from-blue-500/10 to-indigo-500/10', border: 'border-blue-500/20' },
    { name: 'JavaScript (ES6+)', icon: <SiJavascript />, color: 'text-yellow-400', bg: 'from-yellow-500/10 to-amber-500/10', border: 'border-yellow-500/20' },
    { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400', bg: 'from-cyan-500/10 to-blue-500/10', border: 'border-cyan-500/20' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: 'text-indigo-400', bg: 'from-indigo-500/10 to-violet-500/10', border: 'border-indigo-500/20' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400', bg: 'from-teal-500/10 to-cyan-500/10', border: 'border-teal-500/20' },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-400', bg: 'from-green-500/10 to-emerald-500/10', border: 'border-green-500/20' },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-slate-300', bg: 'from-slate-500/10 to-gray-500/10', border: 'border-slate-500/20' },
    { name: 'REST API Development', icon: <FaServer />, color: 'text-emerald-400', bg: 'from-emerald-500/10 to-green-500/10', border: 'border-emerald-500/20' },
  ],
  database: [
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500', bg: 'from-green-500/10 to-lime-500/10', border: 'border-green-500/20' },
    { name: 'API Integration', icon: <Plug className="w-5 h-5" />, color: 'text-sky-400', bg: 'from-sky-500/10 to-blue-500/10', border: 'border-sky-500/20' },
    { name: 'JSON Handling', icon: <Braces className="w-5 h-5" />, color: 'text-amber-400', bg: 'from-amber-500/10 to-yellow-500/10', border: 'border-amber-500/20' },
    { name: 'Authentication System', icon: <ShieldCheck className="w-5 h-5" />, color: 'text-rose-400', bg: 'from-rose-500/10 to-pink-500/10', border: 'border-rose-500/20' },
  ],
};

/* ─── animation variants ─── */
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.92,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

/* ─── Skill Card ─── */
const SkillCard = ({ skill, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    layout
    whileHover={{
      y: -10,
      scale: 1.06,
      transition: { type: 'spring', stiffness: 350, damping: 18 },
    }}
    className="group/card relative cursor-default"
  >
    <div className={`relative h-full rounded-2xl p-6 bg-gradient-to-br ${skill.bg} backdrop-blur-xl border ${skill.border} dark:border-white/[0.08] shadow-sm hover:shadow-2xl dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden`}>
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.04]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/card:via-primary-500/40 transition-all duration-500" />

      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        {/* Icon container */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={`w-12 h-12 rounded-xl bg-white/80 dark:bg-white/[0.06] border border-slate-200/50 dark:border-white/[0.06] flex items-center justify-center text-2xl ${skill.color} group-hover/card:drop-shadow-[0_0_12px_currentColor] group-hover/card:border-current/20 transition-all duration-500`}
        >
          {skill.icon}
        </motion.div>

        {/* Name */}
        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover/card:text-slate-900 dark:group-hover/card:text-white transition-colors duration-300 leading-tight">
          {skill.name}
        </span>
      </div>
    </div>
  </motion.div>
);

/* ─── Main Skills Component ─── */
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Get skills to display
  const getDisplaySkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skillsData).flatMap(([, skills]) => skills);
    }
    return skillsData[activeCategory] || [];
  };

  const displaySkills = getDisplaySkills();
  const activeConfig = categoryButtons.find(b => b.key === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 bg-slate-50/80 dark:bg-dark-bg transition-colors duration-500 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-primary-500/[0.04] dark:bg-primary-500/[0.06] blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[25%] h-[25%] rounded-full bg-cyan-500/[0.04] dark:bg-cyan-500/[0.06] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary-600 dark:text-primary-400 mb-4 px-4 py-1.5 bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 rounded-full"
          >
            My Expertise
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-neon-blue mx-auto rounded-full shadow-[0_0_12px_rgba(139,92,246,0.4)]" />
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Technologies and tools I use to build robust, scalable, and production-ready web applications.
          </p>
        </motion.div>

        {/* ── Category Filter Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categoryButtons.map((btn) => {
            const isActive = activeCategory === btn.key;
            return (
              <motion.button
                key={btn.key}
                onClick={() => setActiveCategory(btn.key)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative px-5 py-2.5 rounded-xl text-sm font-bold
                  transition-all duration-400 flex items-center gap-2 cursor-pointer
                  ${isActive
                    ? 'text-white shadow-lg'
                    : 'text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.15] hover:text-slate-800 dark:hover:text-white hover:shadow-md'
                  }
                `}
              >
                {/* Active gradient background */}
                {isActive && (
                  <motion.div
                    layoutId="skills-active-bg"
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${btn.gradient}`}
                    style={{ boxShadow: `0 6px 24px ${btn.glow}` }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {btn.icon}
                  {btn.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Active Category Label ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className={`h-8 w-1 rounded-full bg-gradient-to-b ${activeConfig.gradient}`} />
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                {activeConfig.label}
              </h3>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-500 tracking-wide">
                {displaySkills.length} {displaySkills.length === 1 ? 'skill' : 'skills'}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Skills Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {displaySkills.map((skill, idx) => (
              <SkillCard
                key={`${activeCategory}-${skill.name}`}
                skill={skill}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
