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
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar showResume={showResume} setShowResume={setShowResume} />
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
