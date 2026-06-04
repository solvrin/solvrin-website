import { Logo } from './Logo';
import { Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <Logo className="w-8 h-8 text-white" />

          <div className="flex gap-8 text-sm font-bold tracking-widest uppercase">
            <a href="#hero" className="text-gray-400 hover:text-white transition-colors">Architecture</a>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Capabilities</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-mono">
          <p>&copy; {currentYear} Solvrin Group. All Systems Nominal.</p>
          <div className="flex gap-6 items-center">
            <a href="https://www.linkedin.com/company/solvrin-group/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BEVdhadr6TtGL%2BpN88Eq7mQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://x.com/SolvrinGroup" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <div className="w-px h-4 bg-white/10 mx-2"></div>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
