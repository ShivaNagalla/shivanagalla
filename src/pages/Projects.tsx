
import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Codenames AI Agents",
      description: "Risk-aware transformer agents for the strategic word game Codenames, combining natural language understanding with strategic reasoning.",
      tags: ["#LLM", "#Transformer", "#NLP", "#GameAI"],
      link: "#",
      github: "#",
      status: "Under Review 2025",
      image: "🤖"
    },
    {
      title: "Vanna Copilot",
      description: "Natural language to SQL copilot that translates human queries into optimized database commands with high accuracy.",
      tags: ["#NLP", "#SQL", "#LangChain", "#RAG"],
      link: "#",
      github: "https://github.com",
      status: "Production",
      image: "💾"
    },
    {
      title: "Sign Language Detector",
      description: "Real-time computer vision system for detecting and interpreting sign language gestures using deep learning models.",
      tags: ["#ComputerVision", "#DeepLearning", "#OpenCV", "#TensorFlow"],
      link: "#",
      github: "https://github.com",
      status: "Open Source",
      image: "👋"
    }
  ];

  const publications = [
    {
      title: "Risk-Aware Transformer Agents for Codenames",
      journal: "Under Review",
      year: "2025",
      description: "Novel approach to building AI agents that can play strategic word games by incorporating risk assessment into transformer-based decision making.",
      link: "#"
    },
    {
      title: "IoT Fire Detection Platform",
      journal: "IGI Global",
      year: "2022",
      description: "Comprehensive IoT-based fire detection system integrating multiple sensors and machine learning for early fire detection in smart buildings.",
      link: "#"
    }
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
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/projects" className="text-cyan-400">Projects</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-700">
            <div className="px-6 py-4 space-y-4">
              <Link to="/" className="block text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/projects" className="block text-cyan-400">Projects</Link>
              <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Back Button */}
      <div className="pt-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Projects Hero */}
      <section className="px-6 sm:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-cyan-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exploring the intersection of AI, machine learning, and real-world applications through innovative projects and research.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-8"></div>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-700 transition-all duration-300 hover:scale-105 group">
                <div className="p-8">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{project.image}</div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-700 text-cyan-400 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 hover:bg-slate-600">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 px-6 sm:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Research <span className="text-cyan-400">&</span> Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{pub.title}</h3>
                    <p className="text-lg text-gray-300 mb-2">{pub.journal}</p>
                    <p className="text-gray-300 mb-4">{pub.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {pub.year}
                    </span>
                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interested in <span className="text-cyan-400">Collaborating?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always excited to work on innovative AI/ML projects and research opportunities.
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg text-lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
