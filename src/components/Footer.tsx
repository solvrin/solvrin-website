import { Linkedin, Twitter } from 'lucide-react';
import { scrollToElement } from '../utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] text-white py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-8 gap-8">
          <img src="/WhiteLogoHorizontal.png" alt="Solvrin Group" className="h-10 w-auto object-contain" />

          <div className="flex gap-8 text-sm font-bold tracking-widest uppercase">
            <button onClick={() => scrollToElement('hero')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</button>
            <button onClick={() => scrollToElement('services')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Capabilities</button>
            <button onClick={() => scrollToElement('team')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Partners</button>
            <button onClick={() => scrollToElement('contact')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-mono">
          <p>&copy; {currentYear} Solvrin Group. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a
              href="https://www.linkedin.com/company/solvrin-group/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/SolvrinGroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-white transition-colors cursor-pointer"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
