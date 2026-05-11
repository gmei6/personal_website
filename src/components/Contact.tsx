import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="mono-label mb-4">Section.04 // Comm_Link</div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight italic font-serif mb-8">
              Initiate <span className="text-white/40 not-italic font-sans font-normal">Contact</span>
            </h2>
            <p className="text-white/60 leading-relaxed font-light mb-12">
              Have a complex system architecture to discuss or a data pipeline to optimize? 
              I am available for technical consultation and collaborative research.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:engineer@portfolio.com" className="group block">
                <span className="mono-label group-hover:text-accent transition-colors">// Email_Source</span>
                <p className="text-lg font-medium mt-1">engineer@portfolio.com</p>
              </a>
              <div className="flex space-x-6">
                <a href="#" className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-white/30 hover:text-accent transition-colors">
                  <Github className="w-4 h-4" /> <span>Github</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-white/30 hover:text-accent transition-colors">
                  <Linkedin className="w-4 h-4" /> <span>Linkedin</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 glass-pane p-8 md:p-12">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="mono-label">Input.Source_Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-sm transition-colors"
                    placeholder="Enter Name..."
                  />
                </div>
                <div className="space-y-3">
                  <label className="mono-label">Input.Return_Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-sm transition-colors"
                    placeholder="Enter Email..."
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="mono-label">Input.Payload_Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-sm transition-colors resize-none"
                  placeholder="Awaiting Message..."
                />
              </div>
              <button className="flex items-center space-x-3 text-[10px] font-mono uppercase tracking-[0.3em] font-bold py-4 px-10 bg-accent text-black hover:bg-white transition-all">
                <Send className="w-4 h-4" />
                <span>Execute.Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
