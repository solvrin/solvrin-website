import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { scrollToElement } from '../utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setIsMobileMenuOpen(false);
    scrollToElement(id);
  };

  const navLinks = [
    { name: 'Architecture', id: 'hero' },
    { name: 'Capabilities', id: 'services' },
    { name: 'Partners', id: 'team' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <button onClick={() => handleNav('hero')} aria-label="Scroll to top">
          <Logo className="w-10 h-10 text-white" />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="bg-white text-black px-5 py-2.5 rounded-none text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Work With Us
          </button>
        </nav>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/5 shadow-lg md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="text-left text-lg font-medium text-gray-300 hover:text-white py-2"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNav('contact')}
                className="bg-white text-black px-5 py-3 rounded-none text-base font-medium w-full mt-2"
              >
                Work With Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
