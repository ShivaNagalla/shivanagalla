import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Moon, Sun, Menu, X, Sparkles, Code, Brain, Zap, Database, Globe, Shield } from 'lucide-react';
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

  const techStack = [
    { name: 'Python', icon: '🐍', category: 'Programming' },
    { name: 'Java', icon: '☕', category: 'Programming' },
    { name: 'JavaScript', icon: '⚡', category: 'Programming' },
    { name: 'PyTorch', icon: '🔥', category: 'AI/ML' },
    { name: 'TensorFlow', icon: '🧠', category: 'AI/ML' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' }
  ];

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

      {/* Enhanced Tech Stack */}
      <section className="py-24 px-6 sm:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-full mb-6 backdrop-blur-sm">
              <Code className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Technologies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Arsenal</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks I use to build intelligent systems
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name} 
                className="group relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/60 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">
                    {tech.name}
                  </h3>
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-24 px-6 sm:px-8 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-cyan-400/30 rounded-full mb-6 backdrop-blur-sm">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What I <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Create</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI solutions that bridge the gap between research and real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                emoji: "🤖",
                title: "AI Agent Development",
                description: "Building intelligent agents with advanced reasoning capabilities and emotional intelligence",
                features: ["Multi-modal reasoning", "Strategic planning", "Emotional AI"],
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                icon: <Database className="w-8 h-8" />,
                emoji: "🔍",
                title: "RAG Systems & LLM Integrations",
                description: "Implementing retrieval-augmented generation for enhanced AI responses and knowledge integration",
                features: ["Vector databases", "Semantic search", "Knowledge graphs"],
                gradient: "from-blue-500 to-purple-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                emoji: "💾",
                title: "Natural Language to SQL",
                description: "Creating copilots that translate natural language to database queries with high accuracy",
                features: ["Query optimization", "Schema understanding", "Error handling"],
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/60 transition-all duration-500 hover:scale-105 hover:border-cyan-400/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Floating Icon */}
                <div className="relative mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.emoji}
                  </div>
                  <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-slate-700/60 text-cyan-400 px-3 py-1 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
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
    </div>
  );
};

export default Index;
