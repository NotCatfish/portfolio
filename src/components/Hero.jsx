import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { translations } from '../i18n/translations';

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      <motion.div 
        key={`kanji-${lang}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-[40vw] font-serif leading-none dark:text-snow-100 text-ink-900"
      >
        知
      </motion.div>

      <div key={lang} className="max-w-4xl w-full z-10 flex flex-col items-center text-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-ink-700 dark:text-snow-200"
        >
          {t.name}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className={`font-serif ${lang === 'ja' ? 'text-6xl md:text-8xl lg:text-[7.5rem] md:whitespace-nowrap' : 'text-5xl md:text-7xl lg:text-8xl'} font-normal leading-tight tracking-tight mb-8`}
        >
          {t.tagline1} <span className={`${lang === 'en' ? 'italic' : ''} text-sakura`}>{t.tagline2}</span><span>{t.tagline3}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-sans max-w-lg text-ink-700 dark:text-snow-200 text-lg leading-relaxed mb-12"
        >
          {t.desc}
        </motion.p>

        <div className="flex flex-col gap-8 items-center">
          <motion.a
            href="#work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="group flex items-center gap-4 font-sans text-sm tracking-widest uppercase hover:text-sakura transition-colors duration-300"
          >
            <span className="w-12 h-[1px] bg-ink-900 dark:bg-snow-100 group-hover:bg-sakura group-hover:w-16 transition-all duration-300"></span>
            <span>{t.explore}</span>
            <span className="w-12 h-[1px] bg-ink-900 dark:bg-snow-100 group-hover:bg-sakura group-hover:w-16 transition-all duration-300"></span>
          </motion.a>

          <motion.a
            href="/Indraneel_Samanta_Resume.pdf"
            download="Indraneel_Samanta_Resume.pdf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="group flex items-center gap-4 font-sans text-sm tracking-widest uppercase text-sakura border border-sakura px-6 py-2 hover:bg-sakura hover:text-snow-100 transition-colors duration-300"
          >
            <span>{t.downloadResume}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
