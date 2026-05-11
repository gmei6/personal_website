import { motion } from 'motion/react';
import { Terminal, Cpu, Database, Binary } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-16 px-4 md:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        
        {/* Left Column: Title & Intro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 lg:pr-12 lg:border-r lg:border-white/10 flex flex-col justify-between"
        >
          <div>
            <div className="mono-label mb-10 flex items-center text-accent">
              <span className="inline-block w-4 h-[1px] bg-accent mr-3" />
              User.Profile_Initialized
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light leading-none tracking-tighter mb-8 group">
              Systems <br />
              <span className="font-serif-italic text-accent group-hover:pl-4 transition-all duration-500">
                & Architecture
              </span>
            </h1>
            
            <p className="text-white/60 leading-relaxed font-light text-lg max-w-md">
              Specializing in the intersection of low-level performance 
              and high-level agility. I build robust data pipelines in Python 
              and high-performance system modules in C++.
            </p>
          </div>

          <div className="hidden lg:block pt-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border border-white/20 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center backdrop-blur-md">
                <Terminal className="w-5 h-5 text-accent" />
              </div>
              <div className="font-mono">
                <p className="text-xs font-bold uppercase tracking-widest leading-none mb-1">Alex Rivera</p>
                <p className="text-[10px] text-white/30 uppercase tracking-tighter">Status: Available_for_Dev</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Core Competencies Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 lg:pl-12 flex flex-col justify-center"
        >
          <div className="mono-label mb-8">System.Specifications</div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
            {[
              { icon: Cpu, title: 'Kernel Optimization', desc: 'Custom memory allocators and SIMD vectorization in C++.' },
              { icon: Database, title: 'Distributed Pipes', desc: 'High-throughput data ingestion using ZeroMQ and Redis.' },
              { icon: Binary, title: 'SIMD / CUDA', desc: 'GPU-accelerated computing for graphics and machine learning.' },
              { icon: Terminal, title: 'CLI Tooling', desc: 'Robust automation frameworks and build-system engineering.' }
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 hover:bg-white/[0.02] transition-colors group">
                <item.icon className="w-8 h-8 text-accent/40 group-hover:text-accent transition-colors mb-6" />
                <h3 className="text-lg font-medium mb-2 tracking-tight">{item.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#portfolio" className="px-8 py-3 bg-white text-black text-xs font-mono uppercase font-bold tracking-widest hover:bg-accent transition-colors">
              Explore_Repos
            </a>
            <a href="#contact" className="px-8 py-3 border border-white/20 text-white text-xs font-mono uppercase tracking-widest hover:border-accent hover:text-accent transition-colors">
              Init.Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

