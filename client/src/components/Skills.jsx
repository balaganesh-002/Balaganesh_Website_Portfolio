import { Layout, Server, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Layout: <Layout className="w-8 h-8 text-neon-blue" />,
  Server: <Server className="w-8 h-8 text-neon-purple" />,
  Database: <Database className="w-8 h-8 text-primary-500" />
};

const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-dark-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full shadow-[0_0_15px_rgba(176,38,255,0.5)]"></div>
          <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My technical toolkit for building high-performance, scalable web applications with modern technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {data.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white dark:bg-dark-surface/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-50 dark:to-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-50 dark:bg-dark-bg rounded-2xl flex items-center justify-center mb-8 border border-slate-100 dark:border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {iconMap[category.icon]}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.items.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-primary-600 dark:text-neon-blue">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-dark-bg rounded-full h-2.5 overflow-hidden border border-slate-200 dark:border-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.3 + (sIdx * 0.1), ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary-500 to-neon-blue rounded-full relative"
                        >
                          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[progress_1s_linear_infinite]"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress {
          0% { background-position: 0 0; }
          100% { background-position: 20px 0; }
        }
      `}} />
    </section>
  );
};

export default Skills;
