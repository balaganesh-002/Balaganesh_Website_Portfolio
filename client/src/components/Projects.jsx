import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-surface transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work, highlighting scalable architecture and clean UI design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-dark-bg rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="group relative h-64 overflow-hidden border-b border-slate-200 dark:border-slate-700">
                <div className="absolute inset-0 bg-slate-900/60 dark:bg-dark-bg/80 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                
                {/* Floating links on image hover */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                  <a 
                    href={project.live}
                    className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-2.5 rounded-full font-bold shadow-[0_0_15px_rgba(139,92,246,0.5)] flex items-center gap-2 transition-colors transform hover:scale-105 text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-2.5 rounded-full font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center gap-2 transition-colors transform hover:scale-105 text-sm"
                  >
                    <FaGithub size={16} />
                    Source Code
                  </a>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-3 py-1 bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
