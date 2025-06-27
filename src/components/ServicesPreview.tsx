
import { ArrowRight, Brain, Database, Globe } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
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
  ];

  return (
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
          {services.map((service, index) => (
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
  );
};

export default ServicesPreview;
