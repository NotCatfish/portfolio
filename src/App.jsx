import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

      if (!isResume && window.location.hash) {
        setTimeout(() => {
          const el = document.querySelector(window.location.hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleSetShowResume = (val) => {
    setShowResume(val);
    if (val) {
      window.location.hash = 'resume';
    } else {
      if (window.location.hash === '#resume') {
        history.pushState("", document.title, window.location.pathname + window.location.search);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar showResume={showResume} setShowResume={handleSetShowResume} />
        <main>
          <AnimatePresence mode="wait">
            {showResume ? (
              <motion.div
                key="resume"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            ) : (
              <motion.div
                key="portfolio"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <About />
                <Projects />
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
