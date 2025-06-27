
import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navigation = ({ darkMode, setDarkMode }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-cyan-400">
            Shiva Nagalla
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
            <Link to="/projects" className="text-white hover:text-cyan-400 transition-colors">Projects</Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" className="block text-white hover:text-cyan-400 transition-colors">Home</Link>
            <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors">About</Link>
            <Link to="/projects" className="block text-white hover:text-cyan-400 transition-colors">Projects</Link>
            <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
