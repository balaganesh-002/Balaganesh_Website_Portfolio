import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[30%] left-[-20%] w-[50%] h-[50%] rounded-full bg-neon-purple/10 blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-neon-purple mx-auto rounded-full shadow-[0_0_15px_rgba(176,38,255,0.5)]"></div>
          <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work, highlighting scalable architecture and clean, animated UI design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {data.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative bg-white dark:bg-dark-surface rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-all duration-500 flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                />
                
                {/* Floating links on image hover */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <a 
                    href={project.live}
                    className="bg-primary-600 hover:bg-neon-blue text-white px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(0,240,255,0.5)] flex items-center gap-2 transition-colors transform hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-colors transform hover:scale-105"
                  >
                    <FaGithub size={18} />
                    Source Code
                  </a>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col relative z-20 bg-white dark:bg-dark-surface">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary-500 dark:group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-4 py-1.5 bg-primary-50 dark:bg-dark-bg border border-primary-100 dark:border-white/5 text-primary-700 dark:text-neon-blue text-sm font-semibold rounded-full shadow-inner"
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
