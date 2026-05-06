import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 dark:bg-dark-bg transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white dark:bg-dark-surface p-6 rounded-2xl flex items-center gap-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:border-primary-500/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-primary-500 to-neon-blue h-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-16 h-16 bg-slate-50 dark:bg-dark-bg rounded-full flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-700 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-shadow">
                <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-neon-blue transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white leading-tight mb-1">
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
