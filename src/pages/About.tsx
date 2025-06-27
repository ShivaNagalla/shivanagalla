
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Moon, Sun, Menu, X, MapPin, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = {
    "Programming": ["Java", "Python", "JavaScript", "SQL"],
    "AI/ML Tools": ["LangChain", "PyTorch", "TensorFlow", "Llama Index"],
    "NLP": ["Transformers", "RAG", "Cohere Re-Ranker", "spaCy"],
    "Deployment": ["AWS", "Docker", "Jenkins"],
    "Databases": ["PostgreSQL", "FAISS", "ChromaDB", "Pinecone"]
  };

  const stats = [
    { number: "25+", label: "AI Projects Completed", icon: "🤖" },
    { number: "3+", label: "Years Experience", icon: "⏳" },
    { number: "2", label: "Published Papers", icon: "📄" },
    { number: "95%", label: "Client Satisfaction", icon: "⭐" }
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
              <Link to="/about" className="text-cyan-400">About</Link>
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
              <Link to="/about" className="block text-cyan-400">About</Link>
              <Link to="/projects" className="block text-white hover:text-cyan-400 transition-colors">Projects</Link>
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

      {/* About Hero */}
      <section className="px-6 sm:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-cyan-400">Me</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-xl text-gray-300 leading-relaxed">
                I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Ohio University, Athens, OH</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Expected Graduation: 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">M.S. in Computer Science</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg">
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
                  <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                    <div className="text-5xl font-bold text-cyan-400">SN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 sm:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Education <span className="text-cyan-400">&</span> Background
          </h2>
          
          <div className="space-y-8">
            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Master of Science in Computer Science</h3>
                  <p className="text-xl text-gray-300 mb-2">Ohio University</p>
                  <p className="text-gray-400">Athens, OH</p>
                </div>
                <div className="text-gray-400 mt-4 md:mt-0">
                  <span className="bg-slate-700 px-3 py-1 rounded-full">2025</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Bachelor of Technology</h3>
                  <p className="text-xl text-gray-300 mb-2">Koneru Lakshmaiah Education Foundation</p>
                  <p className="text-gray-400">India</p>
                </div>
                <div className="text-gray-400 mt-4 md:mt-0">
                  <span className="bg-slate-700 px-3 py-1 rounded-full">2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 sm:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-16 h-2 bg-slate-700 rounded-full">
                        <div className={`h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full`} style={{width: `${Math.floor(Math.random() * 30) + 70}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Soft <span className="text-cyan-400">Skills</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Communication', 'Collaboration', 'Adaptability', 'Problem-solving'].map((skill) => (
              <div key={skill} className="bg-slate-800 p-6 rounded-xl text-center hover:bg-slate-700 transition-colors">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-lg font-semibold text-cyan-400">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
