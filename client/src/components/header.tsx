import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: { name: string; id: string; type?: string }) => {
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
    
    if (item.type === 'page') {
      navigate(`/${item.id}`);
    } else if (item.id === 'home') {
      navigate('/');
    } else {
      // For sections on the home page, first navigate to home if not already there
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(item.id), 100);
      } else {
        scrollToSection(item.id);
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'scroll-blur' : ''
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold glow-text cursor-pointer"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="logo-link"
          >
            OPN
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Projects', id: 'projects' },
              { name: 'Resume', id: 'resume', type: 'page' },
              { name: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className="text-foreground hover:text-accent transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`nav-${item.id}`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
          
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'} text-2xl cursor-pointer`}></i>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          {isMobileMenuOpen && (
            <div className="px-6 py-4 glass border-t border-border">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Resume', id: 'resume', type: 'page' },
                { name: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left py-3 px-4 text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>
      </nav>
    </motion.header>
  );
}
