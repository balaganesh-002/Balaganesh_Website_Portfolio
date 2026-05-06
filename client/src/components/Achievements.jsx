import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 bg-white dark:bg-dark-surface transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {data.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 200 }}
              className="group bg-white dark:bg-dark-surface p-10 rounded-3xl flex flex-col items-center text-center border-2 border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] hover:border-primary-500/30 transition-all duration-500 relative overflow-hidden w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
            >
              {/* Background gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Center Animated Icon Container */}
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-inner group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-500 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-neon-blue opacity-10 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <Trophy className="w-10 h-10 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-500 relative z-10 group-hover:scale-110" />
              </div>
                
              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-500/10 to-neon-blue/10 border border-primary-500/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold tracking-widest uppercase mb-4 group-hover:border-primary-500/50 transition-colors">
                  {item.event}
                </div>
                
                <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 group-hover:from-primary-500 group-hover:to-neon-blue transition-all duration-500 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-6 font-medium">
                  {item.description}
                </p>
                
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-neon-blue rounded-full mb-6 opacity-30 group-hover:opacity-100 group-hover:w-24 transition-all duration-500"></div>
                
                <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed max-w-[250px]">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
