export default function Footer() {
  return (
    <footer className="h-16 px-4 md:px-8 bg-background flex items-center justify-between text-white/30 text-[9px] font-mono uppercase tracking-[0.2em]">
      <div className="flex space-x-8">
        <span className="hidden sm:inline">Stat: Operational</span>
        <span>Lat: 12ms</span>
        <span className="hidden sm:inline">v1.0.4-Build</span>
      </div>
      
      <div className="flex space-x-8">
        <a href="#" className="hover:text-accent transition-colors">Documentation</a>
        <a href="#" className="hover:text-accent transition-colors">Github</a>
      </div>
    </footer>
  );
}

