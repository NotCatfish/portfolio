import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

export default function Navbar({ showResume, setShowResume }) {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang].nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setShowResume(false);
    setMobileMenuOpen(false);
  };

  const handleResumeClick = () => {
    setShowResume(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 px-6 py-4 md:py-6 flex justify-between items-center backdrop-blur-md bg-snow-100/80 dark:bg-ink-800/80 border-b border-ink-900/5 dark:border-snow-100/5"
      >
        <button 
          onClick={() => handleNavClick()} 
          className="font-serif text-xl tracking-widest font-semibold uppercase cursor-pointer"
        >
          Indraneel<span className="text-sakura">.</span>
        </button>

        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-6 text-sm font-sans tracking-wide">
            {['about', 'work', 'contact'].map(item => (
              <a 
                key={item} 
                href={`#${item}`} 
                onClick={() => setShowResume(false)}
                className="hover:text-sakura transition-colors duration-300"
              >
                {t[item]}
              </a>
            ))}
            <button 
              onClick={() => setShowResume(true)}
              className={`hover:text-sakura transition-colors duration-300 cursor-pointer ${showResume ? 'text-sakura font-medium' : ''}`}
            >
              {t.resume}
            </button>
          </div>

          {/* Language & Theme Controls */}
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={toggleLanguage}
              className="font-sans text-xs tracking-widest uppercase border border-ink-700/20 dark:border-snow-200/20 px-3 py-1 rounded hover:bg-sakura/10 transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'JP' : 'EN'}
            </button>
            <ThemeToggle />
            
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden p-2 rounded-full border border-ink-700/20 dark:border-snow-200/20 text-ink-900 dark:text-snow-100 hover:bg-sakura/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[69px] left-0 w-full z-40 md:hidden bg-snow-100/95 dark:bg-ink-800/95 backdrop-blur-xl border-b border-ink-900/10 dark:border-snow-100/10 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4 text-base font-sans tracking-wide">
              {['about', 'work', 'contact'].map(item => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  onClick={() => handleNavClick(item)}
                  className="py-2 hover:text-sakura transition-colors duration-300 border-b border-ink-900/5 dark:border-snow-100/5"
                >
                  {t[item]}
                </a>
              ))}
              <button 
                onClick={handleResumeClick}
                className={`py-2 text-left hover:text-sakura transition-colors duration-300 cursor-pointer ${showResume ? 'text-sakura font-semibold' : ''}`}
              >
                {t.resume}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
