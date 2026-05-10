import { GraduationCap, Briefcase, Code2, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const GITHUB_PROFILE = 'https://github.com/balaganesh-002';

const About = ({ data }) => {
  const stats = [
    { label: 'Projects Built', value: '10+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Certifications', value: '5+' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-surface transition-colors duration-500 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[30%] left-[-5%] w-[20%] h-[20%] rounded-full bg-primary-500/[0.03] dark:bg-primary-500/[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-8%] w-[25%] h-[25%] rounded-full bg-neon-blue/[0.03] dark:bg-neon-blue/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
            Who I Am
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            About Me
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-neon-blue mx-auto rounded-full shadow-[0_0_12px_rgba(139,92,246,0.4)]"></div>
        </motion.div>

        {/* Main Content: Profile + Info */}
        <div className="flex flex-col lg:flex-row gap-14 items-center mb-16">
          {/* Profile Image with floating animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative shrink-0"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Outer glow */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-primary-500/20 to-neon-blue/20 blur-xl opacity-50 pointer-events-none" />
              
              <div className="relative w-52 h-52 md:w-72 md:h-72 shrink-0 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.25)] border border-slate-200/80 dark:border-white/[0.08] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/50 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/profile.png" 
                  alt="Balaganesh S" 
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Details Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl font-black mb-2 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-neon-blue">Balaganesh S</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1 tracking-wide uppercase" style={{ fontFamily: "'Space Grotesk', monospace" }}
            >
              MERN Stack Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-500 mb-5"
            >
              <span className="flex items-center gap-1"><MapPin size={12} /> Madurai, India</span>
              <span className="flex items-center gap-1"><Calendar size={12} /> B.E. CSE (2022–2026)</span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6"
            >
              {data?.description || "I am a dedicated Computer Science student and a passionate full-stack developer with a strong foundation in modern web technologies."} I specialize in the <strong className="text-slate-800 dark:text-white">MERN stack</strong> and love crafting scalable, user-centric applications with clean architecture and pixel-perfect interfaces.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:justify-start gap-6 mb-6"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, type: 'spring', stiffness: 200 }}
                  className="text-center"
                >
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-neon-blue" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', monospace" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-3"
            >
              <motion.a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100/80 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:border-primary-500/30 hover:text-primary-600 dark:hover:text-neon-blue hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 text-sm font-semibold"
              >
                <FaGithub size={16} />
                GitHub
                <ExternalLink size={12} className="opacity-40" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sbalaganesh148"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100/80 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-neon-purple hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 text-sm font-semibold"
              >
                <FaLinkedin size={16} />
                LinkedIn
                <ExternalLink size={12} className="opacity-40" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Experience & Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-slate-50/80 dark:bg-dark-bg/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/80 dark:border-white/[0.08] shadow-sm hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-primary-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background decorative icon */}
              <div className="absolute -bottom-4 -right-4 opacity-[0.03] text-primary-500 group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                <GraduationCap size={120} />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="p-3 bg-white dark:bg-dark-surface text-primary-600 dark:text-primary-400 rounded-xl shadow-sm border border-slate-100 dark:border-white/[0.06] group-hover:text-primary-500 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300"
                >
                  <GraduationCap size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Education</h3>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {data?.education?.degree || "B.E. Computer Science and Engineering"}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2" style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.9rem' }}>
                  {data?.education?.institution || "Solamalai College of Engineering"}
                </p>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-200/80 dark:bg-slate-800/80 px-3 py-1 rounded-full inline-block mb-4">
                  {data?.education?.period || "2022 – 2026"}
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {data?.education?.details || "Focusing on core computer science principles, software engineering, and full-stack web development."}
                </p>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-slate-50/80 dark:bg-dark-bg/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/80 dark:border-white/[0.08] shadow-sm hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-primary-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background decorative icon */}
              <div className="absolute -bottom-4 -right-4 opacity-[0.03] text-primary-500 group-hover:opacity-[0.08] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                <Briefcase size={120} />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="p-3 bg-white dark:bg-dark-surface text-primary-600 dark:text-primary-400 rounded-xl shadow-sm border border-slate-100 dark:border-white/[0.06] group-hover:text-primary-500 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300"
                >
                  <Briefcase size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Experience</h3>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {data?.experience?.role || "Intern"}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2" style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.9rem' }}>
                  {data?.experience?.company || "Hita Soft Pvt Ltd"}
                </p>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-200/80 dark:bg-slate-800/80 px-3 py-1 rounded-full inline-block mb-4">
                  {data?.experience?.period || "Recent"}
                </span>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                  {(data?.experience?.highlights || [
                    "Transformed UI/UX designs into responsive, production-ready code.",
                    "Emphasized writing clean, maintainable, and scalable full-stack applications.",
                  ]).map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <Code2 size={16} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.li>
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
