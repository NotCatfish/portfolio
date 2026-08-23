import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="py-8 px-6 text-center border-t border-ink-900/10 dark:border-snow-100/10">
      <p className="font-sans text-xs tracking-widest text-ink-700 dark:text-snow-200">
        © {new Date().getFullYear()} {t.text}
      </p>
    </footer>
  );
}
