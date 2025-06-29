import { Code } from 'lucide-react';
const TechStack = () => {
  const techStack = [{
    name: 'Python',
    icon: '🐍',
    category: 'Programming'
  }, {
    name: 'Java',
    icon: '☕',
    category: 'Programming'
  }, {
    name: 'JavaScript',
    icon: '⚡',
    category: 'Programming'
  }, {
    name: 'PyTorch',
    icon: '🔥',
    category: 'AI/ML'
  }, {
    name: 'TensorFlow',
    icon: '🧠',
    category: 'AI/ML'
  }, {
    name: 'AWS',
    icon: '☁️',
    category: 'Cloud'
  }, {
    name: 'Docker',
    icon: '🐳',
    category: 'DevOps'
  }];
  return <section className="py-24 px-6 sm:px-8 relative overflow-hidden">
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
            Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cutting-edge tools and frameworks I use to build intelligent systems
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {techStack.map((tech, index) => <div key={tech.name} className="group relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/60 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50" style={{
          animationDelay: `${index * 0.1}s`
        }}>
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
            </div>)}
        </div>
      </div>
    </section>;
};
export default TechStack;