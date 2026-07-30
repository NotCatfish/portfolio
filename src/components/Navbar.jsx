import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../LanguageContext';
import { translations } from '../i18n/translations';

export default function Navbar({ showResume, setShowResume }) {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang].nav;

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-snow-100/70 dark:bg-ink-800/70 border-b border-ink-900/5 dark:border-snow-100/5"
    >
      <button onClick={() => setShowResume(false)} className="font-serif text-xl tracking-widest font-semibold uppercase">
        Indraneel<span className="text-sakura">.</span>
      </button>
      <div className="flex items-center gap-8">
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
            className={`hover:text-sakura transition-colors duration-300 ${showResume ? 'text-sakura' : ''}`}
          >
            {t.resume}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="font-sans text-xs tracking-widest uppercase border border-ink-700/20 dark:border-snow-200/20 px-3 py-1 rounded hover:bg-sakura/10 transition-colors"
          >
            {lang === 'en' ? 'JP' : 'EN'}
          </button>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
