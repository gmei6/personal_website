import { motion } from 'motion/react';
import { skills } from '../data/portfolio_data';

export default function Skills() {
  const categories: Array<'Language' | 'Tool' | 'Library'> = ['Language', 'Tool', 'Library'];
  
  return (
    <section id="skills" className="py-24 px-4 md:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="mono-label mb-4">Section.03 // Tech_Distribution</div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight italic font-serif">
            Skill <span className="text-white/40 not-italic font-sans font-normal">Specifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-10"
            >
              <h3 className="mono-label text-accent opacity-80 flex items-center">
                <span className="inline-block w-4 h-px bg-accent mr-3" />
                {cat}s
              </h3>
              
              <div className="space-y-8">
                {skills.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-[12px] font-medium tracking-tight">{skill.name}</span>
                      <span className="text-[10px] font-mono text-white/30">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className={`h-full ${
                          skill.primaryLanguage === 'C++' ? 'bg-blue-500' :
                          skill.primaryLanguage === 'Python' ? 'bg-yellow-500' :
                          'bg-accent'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

