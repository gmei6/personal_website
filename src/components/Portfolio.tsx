import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data/portfolio_data';
import ProjectCard from './ProjectCard';
import { Filter } from 'lucide-react';
import { Project } from '../types';

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | 'Python' | 'C++'>('All');
  
  const filteredProjects = projects.filter(p => {
    if (filter === 'All') return true;
    return p.languages.includes(filter as any);
  });

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 bg-muted/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="mono-label mb-4">Section.02 // Main_Repositories</div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight italic font-serif">
              Selected <span className="text-white/40 not-italic font-sans font-normal">Archive</span>
            </h2>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="mono-label">Filter.Selection</span>
            <div className="flex items-center space-x-1 p-1 glass-pane rounded-sm">
              {['All', 'Python', 'C++'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`px-6 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all ${
                    filter === f 
                      ? 'bg-accent text-black font-bold' 
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              // @ts-ignore - False positive where key is checked against component props
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
