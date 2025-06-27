
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 sm:px-8 bg-slate-800/80 backdrop-blur-sm border-t border-slate-700/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-cyan-400 mb-4">Shiva Nagalla</div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              AI/ML Engineer crafting intelligent solutions for tomorrow's challenges.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Available for new opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <div className="space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <Link 
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:shivanagalla2025@gmail.com" 
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Email
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-700/50">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Shiva Nagalla. Crafted with passion and code.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Zap className="w-4 h-4" />
              <span>Powered by AI & Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
