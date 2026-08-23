import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

let hasAnimated = false;

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  useEffect(() => {
    hasAnimated = true;
  }, []);

  return (
    <section id="about" className="scroll-mt-16 md:scroll-mt-20 pt-20 md:pt-28 pb-32 px-6 bg-ink-900/5 dark:bg-snow-100/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={hasAnimated ? false : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className={`font-serif ${lang === 'jp' ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'} mb-8`}>{t.title}</h2>
          <div className="space-y-6 font-sans text-ink-700 dark:text-snow-200 leading-relaxed text-lg">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p className="italic font-serif text-ink-900 dark:text-snow-100 text-xl border-l-2 border-sakura pl-6 mt-8">
              {t.quote}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={hasAnimated ? false : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:pl-12"
        >
          <h3 className={`font-serif ${lang === 'jp' ? 'text-3xl' : 'text-2xl'} mb-6`}>{t.core}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div>
              <h4 className="text-sakura tracking-widest text-xs uppercase mb-4">{t.prog}</h4>
              <ul className="space-y-2 text-ink-700 dark:text-snow-200">
                <li>SQL (PostgreSQL, SQLite)</li>
                <li>Python</li>
                <li>JavaScript, C++</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sakura tracking-widest text-xs uppercase mb-4">{t.data}</h4>
              <ul className="space-y-2 text-ink-700 dark:text-snow-200">
                <li>Pandas, Plotly</li>
                <li>Jupyter, Scikit-Learn</li>
                <li>XGBoost</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sakura tracking-widest text-xs uppercase mb-4">{t.tools}</h4>
              <ul className="space-y-2 text-ink-700 dark:text-snow-200">
                <li>React.js, Tailwind CSS</li>
                <li>Supabase, Git</li>
                <li>Linux</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sakura tracking-widest text-xs uppercase mb-4">{t.algo}</h4>
              <ul className="space-y-2 text-ink-700 dark:text-snow-200 text-sm md:text-base">
                <li>Data Analytics, EDA</li>
                <li>ETL Pipelines</li>
                <li>Feature Engineering</li>
                <li>Predictive Modeling</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
