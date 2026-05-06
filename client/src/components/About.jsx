import { GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = ({ data }) => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-surface transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.3)] border border-slate-200 dark:border-slate-700 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/50 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
            <img 
              src="/profile.png" 
              alt="Balaganesh S" 
              className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Details Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {data?.description || "I am a dedicated Computer Science student and a passionate full-stack developer with a strong foundation in modern web technologies, focused on building clean, maintainable full-stack applications."}
            </motion.p>
          </div>
        </div>

        {/* Experience & Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-slate-50 dark:bg-dark-bg p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background decorative icon */}
              <div className="absolute -bottom-4 -right-4 opacity-5 text-primary-500 group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 pointer-events-none">
                <GraduationCap size={120} />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-white dark:bg-dark-surface text-primary-600 dark:text-primary-400 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 group-hover:text-primary-500 transition-colors">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  {data?.education?.degree || "B.E. in Computer Science"}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {data?.education?.institution || "Solamalai College of Engineering"}
                </p>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full inline-block mb-4">
                  {data?.education?.period || "2022 – 2026"}
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {data?.education?.details}
                </p>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative bg-slate-50 dark:bg-dark-bg p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background decorative icon */}
              <div className="absolute -bottom-4 -right-4 opacity-5 text-primary-500 group-hover:opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 pointer-events-none">
                <Briefcase size={120} />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-white dark:bg-dark-surface text-primary-600 dark:text-primary-400 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 group-hover:text-primary-500 transition-colors">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Experience</h3>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  {data?.experience?.role || "Intern"}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {data?.experience?.company || "Hita Soft Pvt Ltd"}
                </p>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full inline-block mb-4">
                  {data?.experience?.period || "Recent"}
                </span>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                  {data?.experience?.highlights?.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Code2 size={16} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
