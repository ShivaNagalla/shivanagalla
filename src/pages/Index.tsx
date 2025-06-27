
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Moon, Sun, Menu, X, Sparkles, Code, Brain } from 'lucide-react';
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

      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for new opportunities</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                  <span className="text-lg text-cyan-400 font-medium">AI/ML Engineer</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                  Hello<span className="text-cyan-400">.</span>
                </h1>
                <h2 className="text-4xl md:text-5xl font-light text-gray-300">
                  I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">Shiva</span>
                </h2>
              </div>
              
              {/* Description */}
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Creative and results-driven AI/ML Engineer building production-grade NLP systems with RAG, LLMs, and emotional AI agents. Thrives in fast-paced, collaborative environments, combining research insight with engineering rigor.
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Brain className="w-5 h-5" />
                    <span className="font-medium">Designing intelligent agents</span>
                  </div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Code className="w-5 h-5" />
                    <span className="font-medium">Future of interaction</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/projects">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 group">
                    View Projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-2 border-cyan-400/50 bg-slate-800/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-gray-400">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">2</div>
                  <div className="text-sm text-gray-400">Publications</div>
                </div>
              </div>
            </div>

            {/* Enhanced Profile Section */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                {/* Main profile container */}
                <div className="relative w-96 h-96">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-1 animate-spin" style={{ animationDuration: '8s' }}>
                    <div className="w-full h-full rounded-full bg-slate-900"></div>
                  </div>
                  
                  {/* Inner profile circle */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center">
                    <div className="text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      SN
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl rotate-12 animate-pulse flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl animate-bounce flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/4 -left-12 w-8 h-8 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 -right-12 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
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
