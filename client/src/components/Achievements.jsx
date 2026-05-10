import { Trophy, Award, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const achievementVariants = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  }),
};

const shimmerVariants = {
  animate: {
    backgroundPosition: ['200% 0%', '-200% 0%'],
    transition: { duration: 3, repeat: Infinity, ease: 'linear' },
  },
};

const Achievements = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 bg-white dark:bg-dark-surface transition-colors duration-500 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[30%] right-[-5%] w-[20%] h-[20%] rounded-full bg-neon-blue/[0.04] dark:bg-neon-blue/[0.06] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[15%] h-[15%] rounded-full bg-primary-500/[0.04] dark:bg-primary-500/[0.06] blur-[80px] pointer-events-none" />

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
            Recognition
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Achievements
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-neon-blue mx-auto rounded-full shadow-[0_0_12px_rgba(139,92,246,0.4)]" />
        </motion.div>

        {/* Horizontal Cards Layout */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {data.map((item, idx) => (
            <motion.div 
              key={idx}
              custom={idx}
              variants={achievementVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
                scale: 1.02, 
                y: -4,
                transition: { type: 'spring', stiffness: 300, damping: 18 } 
              }}
              viewport={{ once: true }}
              className="group relative bg-white/80 dark:bg-dark-bg/60 backdrop-blur-xl rounded-2xl border border-slate-200/80 dark:border-white/[0.08] shadow-lg hover:shadow-[0_12px_48px_rgba(124,58,237,0.15)] dark:hover:shadow-[0_12px_48px_rgba(124,58,237,0.2)] hover:border-primary-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Top gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-neon-blue to-primary-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Background gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/[0.03] via-transparent to-neon-blue/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-8 md:p-10 relative z-10">
                
                {/* Icon Section */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="relative shrink-0"
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center overflow-hidden shadow-inner group-hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-neon-blue/10 group-hover:from-primary-500 group-hover:to-neon-blue transition-all duration-500" />
                    <Trophy className="w-9 h-9 md:w-10 md:h-10 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-500 relative z-10" />
                  </div>
                  {/* Sparkle decorations */}
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-1 -right-1 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <Sparkles size={14} />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Event badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.15 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-primary-500/10 to-neon-blue/10 border border-primary-500/20 text-primary-700 dark:text-primary-300 rounded-full text-[11px] font-bold tracking-widest uppercase mb-3 group-hover:border-primary-500/50 transition-colors"
                    style={{ fontFamily: "'Space Grotesk', monospace" }}
                  >
                    <Award size={12} />
                    {item.event}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 group-hover:from-primary-500 group-hover:to-neon-blue transition-all duration-500" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-3 font-medium max-w-2xl">
                    {item.description}
                  </p>
                  
                  {/* Details */}
                  <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed max-w-2xl" style={{ fontFamily: "'Space Grotesk', monospace" }}>
                    {item.details}
                  </p>
                </div>

                {/* Right decorative element */}
                <div className="hidden lg:flex flex-col items-center gap-2 shrink-0">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center group-hover:from-primary-500 group-hover:to-neon-blue transition-all duration-500"
                  >
                    <Star size={18} className="text-primary-500 group-hover:text-white transition-colors duration-500" />
                  </motion.div>
                  <div className="w-px h-12 bg-gradient-to-b from-primary-500/30 to-transparent" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
