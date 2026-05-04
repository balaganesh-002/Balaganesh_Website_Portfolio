import { GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = ({ data }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-primary-600/10 dark:bg-primary-500/10 blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.3)] border border-white/10 dark:border-white/5 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/50 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
              <img 
                src="/profile.png" 
                alt="Profile" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              {data?.description || "I am a dedicated Computer Science student and a passionate full-stack developer with a strong foundation in modern web technologies."}
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              {/* Education */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/50 dark:bg-dark-surface/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-200/50 dark:border-white/5 relative overflow-hidden group hover:border-primary-500/30 transition-colors"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap size={64} className="text-primary-500" />
                </div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-neon-blue rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                    {data?.education?.degree || "B.E. Computer Science"}
                  </h4>
                  <p className="text-primary-600 dark:text-neon-blue font-medium mb-2">
                    {data?.education?.institution || "Solamalai College of Engineering"}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 inline-block px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full">
                    {data?.education?.period || "2022 – 2026"}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {data?.education?.details}
                  </p>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/50 dark:bg-dark-surface/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-200/50 dark:border-white/5 relative overflow-hidden group hover:border-primary-500/30 transition-colors"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Briefcase size={64} className="text-primary-500" />
                </div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-neon-purple rounded-xl shadow-[0_0_15px_rgba(176,38,255,0.2)]">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Experience</h3>
                </div>

                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                    {data?.experience?.role || "Intern"}
                  </h4>
                  <p className="text-primary-600 dark:text-neon-purple font-medium mb-2">
                    {data?.experience?.company || "Hita Soft Pvt Ltd"}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 inline-block px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full">
                    {data?.experience?.period || "Recent"}
                  </p>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                    {data?.experience?.highlights?.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Code2 size={16} className="mt-1 text-primary-500 dark:text-neon-blue flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
