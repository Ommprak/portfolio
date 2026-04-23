import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';

const NAV_ITEMS: { name: string; id: string; type?: 'page' }[] = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Videos', id: 'videos' },
  { name: 'Projects', id: 'projects' },
  { name: 'Resume', id: 'resume', type: 'page' },
  { name: 'Contact', id: 'contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: typeof NAV_ITEMS[number]) => {
    setIsMobileMenuOpen(false);
    if (item.type === 'page') {
      navigate(`/${item.id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (item.id === 'home') {
      if (window.location.pathname !== '/') navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(item.id), 100);
    } else {
      scrollToSection(item.id);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled ? 'scroll-blur py-2' : 'py-4'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.button
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigation({ name: 'Home', id: 'home' })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            data-testid="logo-link"
          >
            <span className="w-8 h-8 rounded-lg bg-accent/15 border border-portfolio-accent/30 flex items-center justify-center">
              <span className="text-accent font-display font-bold text-sm">O</span>
            </span>
            <span className="font-display font-semibold tracking-tight text-lg">
              Omm<span className="text-accent">.</span>
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className="relative px-4 py-2 text-sm text-foreground/80 hover:text-accent transition-colors group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                data-testid={`nav-${item.id}`}
              >
                {item.name}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-px bg-accent transition-all duration-300 group-hover:w-1/2" />
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNavigation({ name: 'Contact', id: 'contact' })}
              className="ml-3 btn-primary text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: NAV_ITEMS.length * 0.05 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              data-testid="nav-cta"
            >
              Hire Me
            </motion.button>
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-lg glass flex items-center justify-center"
              data-testid="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'} text-xl`}></i>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-3 glass rounded-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="p-2">
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className="block w-full text-left py-3 px-4 text-foreground/90 hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    data-testid={`mobile-nav-${item.id}`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
