const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          &copy; {currentYear} Balaganesh S. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
