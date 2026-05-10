import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/balaganesh-002', icon: <FaGithub size={18} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/sbalaganesh148', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
    { href: 'mailto:sbalaganesh148@gmail.com', icon: <Mail size={18} />, label: 'Email' },
  ];

  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm font-semibold" style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            &copy; {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-neon-blue font-bold">Balaganesh S</span> — All Rights Reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-neon-blue hover:border-primary-500/30 hover:shadow-[0_0_12px_rgba(139,92,246,0.15)] transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
