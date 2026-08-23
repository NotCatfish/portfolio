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

  // Instantly position viewport at target section when switching back from resume
  useEffect(() => {
    if (!showResume && window.location.hash && window.location.hash !== '#resume') {
      const targetId = window.location.hash.replace('#', '');
      const positionDirectly = () => {
        const el = document.getElementById(targetId);
        if (el) {
          document.documentElement.style.scrollBehavior = 'auto';
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
          setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
          }, 100);
        }
      };

      positionDirectly();
      const t1 = setTimeout(positionDirectly, 30);
      const t2 = setTimeout(positionDirectly, 100);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [showResume]);

  const navigateTo = (target) => {
    if (target === 'resume') {
      setShowResume(true);
      window.location.hash = 'resume';
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (target === 'home' || !target) {
      if (showResume) {
        setShowResume(false);
        history.pushState(null, document.title, window.location.pathname + window.location.search);
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else {
        history.pushState(null, document.title, window.location.pathname + window.location.search);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (showResume) {
        setShowResume(false);
        window.location.hash = target;
        // Position directly without scrolling from top
        const el = document.getElementById(target);
        if (el) {
          document.documentElement.style.scrollBehavior = 'auto';
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
          setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
          }, 100);
        }
      } else {
        window.location.hash = target;
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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
