import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

let hasAnimated = false;

// Standard scroll-triggered slide-up animation (matching About.jsx)
const ProgressiveBlock = ({ children, className, as = "div" }) => {
  const Component = motion[as] || motion.div;
  
  useEffect(() => {
    hasAnimated = true;
  }, []);

  return (
    <Component 
      className={className}
      initial={hasAnimated ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
};

export default function Resume() {
  const { lang } = useLanguage();
  const t = translations[lang].resume;

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 mx-auto max-w-[900px] font-sans text-neutral-700 dark:text-neutral-400 [&_strong]:text-neutral-800 dark:[&_strong]:text-neutral-200 [&_strong]:font-semibold leading-relaxed">
      
      {/* 1. Name & Contact */}
      <ProgressiveBlock>
        <h1 className="text-[2.2rem] md:text-[3rem] font-bold tracking-tight mb-2 uppercase text-[#1a1a1a] dark:text-[#fff]">
          {t.name}
        </h1>
        <div className="flex flex-wrap items-center gap-x-2 text-[0.95rem] text-[#555] dark:text-[#ccc]">
          {t.contact.map((item, index) => (
            <React.Fragment key={index}>
              <a href={item.href} className="hover:text-[#1a1a1a] dark:hover:text-[#fff] transition-colors">
                {item.label}
              </a>
              {index < t.contact.length - 1 && <span> | </span>}
            </React.Fragment>
          ))}
        </div>
      </ProgressiveBlock>

      {/* 2. Education */}
      <ProgressiveBlock>
        <h2 className="text-[1.4rem] border-b-2 border-[#ccc] dark:border-[#444] pb-2 mt-10 uppercase tracking-[0.08em] font-semibold text-neutral-900 dark:text-neutral-100">
          {t.education.title}
        </h2>
      </ProgressiveBlock>
      
      {t.education.items.map((item, index) => (
        <ProgressiveBlock key={index} className="mt-5">
          <div className="mb-6">
            <h3 className="text-[1.15rem] mb-1.5 flex flex-col md:flex-row md:justify-between md:items-baseline text-[#1a1a1a] dark:text-[#fff]">
              <span>{item.school}</span>
              <span className="italic text-[0.95rem] text-[#555] dark:text-[#ccc] font-normal mt-1 md:mt-0">{item.date}</span>
            </h3>
            <p className="m-0 text-[1rem]">{item.degree}</p>
          </div>
        </ProgressiveBlock>
      ))}

      {/* 3. Technical Skills */}
      <ProgressiveBlock>
        <h2 className="text-[1.4rem] border-b-2 border-[#ccc] dark:border-[#444] pb-2 mt-10 uppercase tracking-[0.08em] font-semibold text-neutral-900 dark:text-neutral-100">
          {t.skills.title}
        </h2>
      </ProgressiveBlock>
      
      <ProgressiveBlock className="mt-5">
        <ul className="list-none p-0 m-0 space-y-3">
          {t.skills.items.map((skill, index) => (
            <li key={index} className="text-[1rem]">
              <strong>{skill.category}:</strong> {skill.text}
            </li>
          ))}
        </ul>
      </ProgressiveBlock>

      {/* 4. Technical Projects */}
      <ProgressiveBlock>
        <h2 className="text-[1.4rem] border-b-2 border-[#ccc] dark:border-[#444] pb-2 mt-10 uppercase tracking-[0.08em] font-semibold text-neutral-900 dark:text-neutral-100">
          {t.projects.title}
        </h2>
      </ProgressiveBlock>
      
      <div className="mt-5 space-y-8">
        {t.projects.items.map((project, index) => (
          <div key={index}>
            <ProgressiveBlock>
              <h3 className="text-[1.15rem] mb-1 flex flex-col md:flex-row md:justify-between md:items-center text-[#1a1a1a] dark:text-[#fff]">
                <span className="font-bold">{project.name}</span>
                <span className="text-[0.85rem] font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 px-2.5 py-0.5 rounded-full mt-2 md:mt-0 whitespace-nowrap">{project.role}</span>
              </h3>
              <div className="font-medium text-[0.95rem] text-neutral-900 dark:text-neutral-100 mt-2 mb-4">{project.tech}</div>
            </ProgressiveBlock>
            <ul className="list-disc pl-6 space-y-2">
              {project.points.map((point, i) => (
                <ProgressiveBlock key={i} as="li" className="text-[1rem] pl-1">
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </ProgressiveBlock>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 5. Experience */}
      <ProgressiveBlock>
        <h2 className="text-[1.4rem] border-b-2 border-[#ccc] dark:border-[#444] pb-2 mt-10 uppercase tracking-[0.08em] font-semibold text-neutral-900 dark:text-neutral-100">
          {t.experience.title}
        </h2>
      </ProgressiveBlock>
      
      <div className="mt-5 space-y-8">
        {t.experience.items.map((exp, index) => (
          <div key={index}>
            <ProgressiveBlock>
              <h3 className="text-[1.15rem] mb-1 flex flex-col md:flex-row md:justify-between md:items-baseline text-[#1a1a1a] dark:text-[#fff]">
                <span>{exp.role}</span>
                <span className="italic text-[0.95rem] text-[#555] dark:text-[#ccc] font-normal mt-1 md:mt-0">{exp.date}</span>
              </h3>
              <p className="m-0 italic text-[1rem] mb-3">{exp.company}</p>
            </ProgressiveBlock>
            <ul className="list-disc pl-6 space-y-2">
              {exp.points.map((point, i) => (
                <ProgressiveBlock key={i} as="li" className="text-[1rem] pl-1">
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </ProgressiveBlock>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 6. Certifications */}
      <ProgressiveBlock>
        <h2 className="text-[1.4rem] border-b-2 border-[#ccc] dark:border-[#444] pb-2 mt-10 uppercase tracking-[0.08em] font-semibold text-neutral-900 dark:text-neutral-100">
          {t.certifications.title}
        </h2>
      </ProgressiveBlock>
      
      {t.certifications.items.map((cert, index) => (
        <ProgressiveBlock key={index} className="mt-5">
          <div className="mb-8">
            <h3 className="text-[1.15rem] mb-1 flex flex-col md:flex-row md:justify-between md:items-baseline text-[#1a1a1a] dark:text-[#fff]">
              <span>{cert.name}</span>
              <span className="italic text-[0.95rem] text-[#555] dark:text-[#ccc] font-normal mt-1 md:mt-0">{cert.date}</span>
            </h3>
            <p className="m-0 text-[1rem]">{cert.issuer}</p>
          </div>
        </ProgressiveBlock>
      ))}

    </div>
  );
}
