import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const certVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Certifications = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50/80 dark:bg-dark-bg transition-colors duration-500 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-[20%] left-[-5%] w-[20%] h-[20%] rounded-full bg-primary-500/[0.04] dark:bg-primary-500/[0.06] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Credentials
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Certifications
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-neon-blue mx-auto rounded-full shadow-[0_0_12px_rgba(139,92,246,0.4)]"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-5">
          {data.map((cert, idx) => (
            <motion.div 
              key={idx}
              custom={idx}
              variants={certVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.02, x: 8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              viewport={{ once: true }}
              className="group bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm p-6 rounded-2xl flex items-center gap-6 border border-slate-200/80 dark:border-white/[0.08] shadow-sm hover:shadow-xl dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-primary-500/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-primary-500 to-neon-blue h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-14 h-14 bg-slate-50 dark:bg-dark-bg rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-white/[0.06] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] group-hover:border-primary-500/30 transition-all duration-500"
              >
                <Award className="w-7 h-7 text-primary-600 dark:text-primary-400 group-hover:text-neon-blue transition-colors duration-300" />
              </motion.div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white leading-tight mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
