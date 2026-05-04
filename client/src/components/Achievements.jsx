import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-dark-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-xl overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-black opacity-10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl shrink-0">
                <Trophy size={48} className="text-yellow-400" />
              </div>
              
              <div>
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold tracking-wider uppercase mb-3">
                  Finalist
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  LangAlthon 2025
                </h3>
                <p className="text-primary-100 text-lg mb-4">
                  Recognized for the innovative <span className="font-semibold text-white">"Voice to Code"</span> solution.
                </p>
                <p className="text-sm text-primary-200 leading-relaxed">
                  Competed against top developers to build AI-driven solutions, demonstrating strong problem-solving skills and the ability to integrate cutting-edge language models into practical applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
