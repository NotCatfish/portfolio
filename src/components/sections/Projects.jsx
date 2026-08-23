import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

let hasAnimated = false;

const projectImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', // Data Science/Dashboard for Spotify ML
  'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=2070&auto=format&fit=crop', // Japan/Anime aesthetic for Otakufy
];

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  useEffect(() => {
    hasAnimated = true;
  }, []);

  return (
    <section id="work" className="scroll-mt-16 md:scroll-mt-20 py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div>
        <motion.div
          initial={hasAnimated ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-20"
      >
        <h2 className={`font-serif ${lang === 'jp' ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'} mb-4`}>{t.title}</h2>
        <div className="w-12 h-[1px] bg-sakura"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {t.items.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            initial={hasAnimated ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            className="group cursor-pointer block"
          >
            <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-ink-900/5 dark:bg-snow-100/5">
              <motion.img 
                src={projectImages[index]} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-ink-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center backdrop-blur-sm">
                 <p className="text-snow-100 font-sans text-sm tracking-wide leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                   {project.description}
                 </p>
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`font-serif ${lang === 'jp' ? 'text-3xl' : 'text-2xl'} mb-2 group-hover:text-sakura transition-colors`}>{project.title}</h3>
                <p className="font-sans text-xs tracking-widest uppercase text-ink-700 dark:text-snow-200 mb-2">{project.category}</p>
                <p className="font-sans text-xs text-ink-900/60 dark:text-snow-100/60">{project.tech}</p>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 font-sans text-sm mt-1">
                {t.github}
              </span>
            </div>
          </motion.a>
        ))}
        </div>
      </div>
    </section>
  );
}
