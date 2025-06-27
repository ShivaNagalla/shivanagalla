
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold">
                  Hello<span className="text-cyan-400">.</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-light text-gray-300">
                  I'm Shiva
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  AI/ML Engineer
                </h3>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Creative and results-driven AI/ML Engineer building production-grade NLP systems with RAG, LLMs, and emotional AI agents. Thrives in fast-paced, collaborative environments, combining research insight with engineering rigor.
              </p>
              
              <p className="text-lg text-cyan-400 font-medium">
                Designing intelligent agents for the future of interaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 group">
                    View Projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <div className="text-6xl font-bold text-cyan-400">SN</div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-400 rounded-lg rotate-12 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 sm:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technologies I Work With</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center opacity-70">
            {['Python', 'Java', 'JavaScript', 'PyTorch', 'TensorFlow', 'AWS', 'Docker'].map((tech, index) => (
              <div key={tech} className="text-center hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-2 hover:bg-slate-600 transition-colors">
                  <span className="text-cyan-400 font-semibold text-sm">{tech.slice(0, 2)}</span>
                </div>
                <span className="text-sm text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Do</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "AI Agent Development",
                description: "Building intelligent agents with advanced reasoning capabilities"
              },
              {
                icon: "🔍",
                title: "RAG Systems & LLM Integrations",
                description: "Implementing retrieval-augmented generation for enhanced AI responses"
              },
              {
                icon: "💾",
                title: "Natural Language to SQL",
                description: "Creating copilots that translate natural language to database queries"
              }
            ].map((service, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-8 bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <span className="text-2xl">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <span className="text-2xl">LinkedIn</span>
            </a>
          </div>
          <p className="text-gray-400">© 2024 Shiva Nagalla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
