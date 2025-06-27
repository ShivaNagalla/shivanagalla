
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Sparkles, Code, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
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

          {/* Enhanced Profile Section with Portfolio Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Main profile container */}
              <div className="relative w-96 h-96">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-1 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="w-full h-full rounded-full bg-slate-900"></div>
                </div>
                
                {/* Inner profile circle with image */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/QxxkwhZP/linkdein.jpg" 
                    alt="Shiva Nagalla - AI/ML Engineer"
                    className="w-full h-full object-cover rounded-full"
                  />
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
  );
};

export default HeroSection;
