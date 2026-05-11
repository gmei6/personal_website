import { motion } from 'motion/react';

export default function Navbar() {
  const navItems = [
    { id: '01', name: 'About', href: '#about' },
    { id: '02', name: 'Portfolio', href: '#portfolio' },
    { id: '03', name: 'Skills', href: '#skills' },
    { id: '04', name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/90 backdrop-blur-md border-b border-white/10 flex items-center px-4 sm:px-8">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></div>
          <span className="font-mono text-sm tracking-tighter uppercase font-bold">
            Project.Archive<span className="text-accent">_S01</span>
          </span>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              <span className="text-accent underline underline-offset-4 decoration-accent/30 group-hover:decoration-accent transition-all">
                {item.id}.
              </span>
              <span>{item.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Status Indicator */}
        <div className="md:hidden flex items-center space-x-2 px-3 py-1 rounded bg-white/5 border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
          <span className="font-mono text-[10px] uppercase text-white/50 tracking-tighter">Live_v1.0</span>
        </div>
      </div>
    </nav>
  );
}

