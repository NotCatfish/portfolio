import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Resume from './components/sections/Resume';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [showResume, setShowResume] = useState(() => {
    return typeof window !== 'undefined' && window.location.hash === '#resume';
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleHashChange = () => {
      const isResume = window.location.hash === '#resume';
      setShowResume(isResume);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Auto-scroll to target section whenever returning to portfolio
  useEffect(() => {
    if (!showResume && window.location.hash && window.location.hash !== '#resume') {
      const targetId = window.location.hash.replace('#', '');
      const scrollToElement = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const t1 = setTimeout(scrollToElement, 50);
      const t2 = setTimeout(scrollToElement, 150);
      const t3 = setTimeout(scrollToElement, 300);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [showResume]);

  const navigateTo = (target) => {
    if (target === 'resume') {
      setShowResume(true);
      window.location.hash = 'resume';
    } else if (target === 'home' || !target) {
      setShowResume(false);
      history.pushState(null, document.title, window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowResume(false);
      window.location.hash = target;
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar showResume={showResume} onNavigate={navigateTo} />
        <main>
          {showResume ? (
            <motion.div
              key="resume"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <Resume />
            </motion.div>
          ) : (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <Hero />
              <About />
              <Projects />
              <Contact />
            </motion.div>
          )}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
