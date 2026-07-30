import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { translations } from '../i18n/translations';

let hasAnimated = false;

export default function Contact() {
  const [status, setStatus] = useState(''); 
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  useEffect(() => {
    hasAnimated = true;
  }, []);

  const labelClasses = "block font-sans text-xs tracking-widest uppercase mb-2 text-ink-700 dark:text-snow-200";
  const inputClasses = "w-full bg-transparent border-b border-ink-900/20 dark:border-snow-100/20 py-3 focus:outline-none focus:border-sakura transition-colors font-sans";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "8666f602-34d3-4bb0-8423-d0eaab5af203");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
      <div>
        <motion.div
          initial={hasAnimated ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <p className="font-sans text-sm tracking-[0.3em] uppercase mb-4 text-ink-700 dark:text-snow-200">
          {t.subtitle}
        </p>
        <h2 className={`font-serif ${lang === 'jp' ? 'text-6xl md:text-7xl' : 'text-5xl md:text-6xl'} mb-6`}>{t.title}</h2>
        <p className="font-sans text-lg text-ink-700 dark:text-snow-200 max-w-2xl mx-auto">
          {t.desc}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={hasAnimated ? false : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            
            <div>
              <label htmlFor="name" className={labelClasses}>{t.formName}</label>
              <input type="text" id="name" name="name" required className={inputClasses} />
            </div>
            
            <div>
              <label htmlFor="email" className={labelClasses}>{t.formEmail}</label>
              <input type="email" id="email" name="email" required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" className={inputClasses} />
            </div>
            
            <div>
              <label htmlFor="message" className={labelClasses}>{t.formMessage}</label>
              <textarea id="message" name="message" rows="4" required className={`${inputClasses} resize-none`}></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full border border-ink-900 dark:border-snow-100 px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-ink-900 hover:text-snow-100 dark:hover:bg-snow-100 dark:hover:text-ink-900 transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? t.sendingBtn : status === 'success' ? t.sentBtn : t.sendBtn}
            </button>
            
            {status === 'success' && <p className="text-sakura text-sm font-sans mt-2 text-center">{t.successMsg}</p>}
            {status === 'error' && <p className="text-red-500 text-sm font-sans mt-2 text-center">{t.errorMsg}</p>}
          </form>
        </motion.div>

        <motion.div
          initial={hasAnimated ? false : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-12 md:pl-12 border-t md:border-t-0 md:border-l border-ink-900/10 dark:border-snow-100/10 pt-12 md:pt-0"
        >
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-sakura mb-4">{t.directEmail}</h3>
            <a href="mailto:indraneelsamanta2005@gmail.com" className="font-serif text-xl hover:text-sakura transition-colors break-all">
              indraneelsamanta2005@gmail.com
            </a>
          </div>
          
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-sakura mb-4">{t.profNet}</h3>
            <div className="flex flex-col space-y-4 font-sans text-sm tracking-widest uppercase">
              <a href="https://www.linkedin.com/in/indraneel-samanta-724782347" target="_blank" rel="noopener noreferrer" className="hover:text-sakura transition-colors inline-block w-fit">LinkedIn ↗</a>
              <a href="https://github.com/NotCatfish" target="_blank" rel="noopener noreferrer" className="hover:text-sakura transition-colors inline-block w-fit">GitHub ↗</a>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
