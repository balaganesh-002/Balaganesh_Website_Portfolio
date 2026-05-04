import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy / Coursera',
      date: '2024',
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Academind',
      date: '2023',
    }
    // Add more actual certifications here
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-dark-surface p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
            >
              <div className="p-3 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white leading-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
