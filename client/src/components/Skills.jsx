import { Layout, Server, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaDatabase, FaLock, FaServer, FaCode } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

const iconMap = {
  Layout: <Layout className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
  Server: <Server className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
  Database: <Database className="w-8 h-8 text-primary-600 dark:text-primary-400" />
};

const getSkillIcon = (name) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('react')) return <FaReact className="text-blue-500 text-lg" />;
  if (lowerName.includes('javascript')) return <SiJavascript className="text-yellow-400 text-lg" />;
  if (lowerName.includes('tailwind')) return <SiTailwindcss className="text-cyan-400 text-lg" />;
  if (lowerName.includes('html')) return <FaHtml5 className="text-orange-500 text-lg" />;
  if (lowerName.includes('node')) return <FaNodeJs className="text-green-500 text-lg" />;
  if (lowerName.includes('express')) return <SiExpress className="text-slate-500 dark:text-slate-300 text-lg" />;
  if (lowerName.includes('mongo')) return <SiMongodb className="text-green-600 text-lg" />;
  if (lowerName.includes('jwt') || lowerName.includes('auth')) return <FaLock className="text-pink-500 text-lg" />;
  if (lowerName.includes('api')) return <FaServer className="text-indigo-500 text-lg" />;
  if (lowerName.includes('database') || lowerName.includes('nosql') || lowerName.includes('mongoose')) return <FaDatabase className="text-teal-500 text-lg" />;
  return <FaCode className="text-slate-400 text-lg" />;
};

const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-dark-bg transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to build robust and scalable web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {data.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white dark:bg-dark-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-slate-50 dark:bg-dark-bg rounded-xl flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-700">
                {iconMap[category.icon] || <Layout className="w-8 h-8 text-primary-600 dark:text-primary-400" />}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    whileHover={{ scale: 1.03, x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group/skill cursor-default"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-md group-hover/skill:bg-white dark:group-hover/skill:bg-slate-700 transition-colors shadow-sm">
                          {getSkillIcon(skill.name)}
                        </div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 group-hover/skill:text-primary-500 transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        className="h-full bg-primary-500 rounded-full relative group-hover/skill:bg-gradient-to-r group-hover/skill:from-primary-500 group-hover/skill:to-primary-400 transition-all duration-300"
                      >
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:15px_15px] animate-[progress_1s_linear_infinite] opacity-0 group-hover/skill:opacity-100 transition-opacity"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress {
          0% { background-position: 0 0; }
          100% { background-position: 15px 0; }
        }
      `}} />
    </section>
  );
};

export default Skills;
