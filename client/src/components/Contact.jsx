import { useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Unable to connect to the server. Please try again later.');
    }
  };

  const inputClasses = (fieldName) => `
    w-full px-5 py-4 rounded-2xl bg-slate-50/80 dark:bg-dark-bg/80 
    border-2 transition-all duration-500 shadow-sm
    text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600
    focus:outline-none
    ${focusedField === fieldName 
      ? 'border-primary-500 dark:border-neon-blue shadow-[0_0_20px_rgba(139,92,246,0.15)] dark:shadow-[0_0_20px_rgba(0,240,255,0.15)]' 
      : 'border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.12]'
    }
  `;

  const contactLinks = [
    {
      href: 'mailto:sbalaganesh148@gmail.com',
      icon: <Mail size={22} />,
      label: 'Email Me',
      hoverColor: 'hover:text-primary-600 dark:hover:text-neon-blue',
      rotation: 5,
    },
    {
      href: 'https://www.linkedin.com/in/sbalaganesh148',
      icon: <FaLinkedin size={22} />,
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-600 dark:hover:text-neon-purple',
      rotation: -5,
      external: true,
    },
    {
      href: 'https://github.com/balaganesh-002',
      icon: <FaGithub size={22} />,
      label: 'GitHub',
      hoverColor: 'hover:text-slate-900 dark:hover:text-white',
      rotation: 5,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/80 dark:bg-dark-surface/50 transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute bottom-[0%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary-600/[0.06] dark:bg-primary-500/[0.08] blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[10%] left-[-5%] w-[25%] h-[25%] rounded-full bg-neon-blue/[0.04] dark:bg-neon-blue/[0.06] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary-600 dark:text-primary-400 mb-4 px-4 py-1.5 bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 rounded-full"
          >
            Get in Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-primary-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)]"></div>
          <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance work or full-time opportunities. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-xl p-10 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] shadow-xl"
          >
            <div className="flex flex-col items-center text-center gap-4 mb-10">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-primary-500 to-neon-blue shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <img 
                  src="/profile.png" 
                  alt="Balaganesh S" 
                  className="w-full h-full rounded-full object-cover border-4 border-white dark:border-dark-surface"
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Balaganesh S</h3>
                <p className="text-primary-600 dark:text-neon-blue font-medium mt-1">MERN Stack Developer</p>
              </div>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className={`flex items-center gap-5 text-slate-600 dark:text-slate-400 ${link.hoverColor} transition-all duration-300 group p-3 rounded-2xl hover:bg-slate-50/80 dark:hover:bg-white/[0.03]`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: link.rotation }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="p-3.5 bg-slate-50 dark:bg-dark-bg border border-slate-100 dark:border-white/[0.06] rounded-2xl group-hover:border-primary-500/30 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] shadow-sm transition-all duration-300"
                  >
                    {link.icon}
                  </motion.div>
                  <span className="font-semibold text-base">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-xl p-10 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid md:grid-cols-2 gap-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-3"
                >
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={inputClasses('name')}
                    placeholder="John Doe"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3"
                >
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={inputClasses('email')}
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="5"
                  className={`${inputClasses('message')} resize-none`}
                  placeholder="How can I help you?"
                ></textarea>
              </motion.div>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-400 rounded-2xl text-sm font-bold flex items-center justify-center">
                  Message sent successfully! I will get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400 rounded-2xl text-sm font-bold flex items-center justify-center">
                  {errorMessage}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(0,240,255,0.4)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-600 dark:to-neon-blue text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-500 shadow-[0_0_20px_rgba(0,240,255,0.25)] disabled:opacity-70 disabled:cursor-not-allowed border border-white/10 relative overflow-hidden group"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
                {status === 'loading' ? (
                  <Loader2 size={24} className="animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
