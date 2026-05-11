import React, { useMemo } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const highlightedCode = useMemo(() => {
    if (!project.codeSnippet) return '';
    const lang = project.codeSnippet.language;
    
    try {
      return hljs.highlight(project.codeSnippet.code, { language: lang }).value;
    } catch (e) {
      try {
        return hljs.highlightAuto(project.codeSnippet.code).value;
      } catch (err) {
        console.error('Highlight.js failed:', err);
        return project.codeSnippet.code;
      }
    }
  }, [project.codeSnippet]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col h-full glass-pane p-6 hover:border-accent/40 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-2">
          {project.languages.map(lang => (
            <span 
              key={lang}
              className={cn(
                "text-[10px] font-mono px-2 py-0.5 rounded border tracking-tighter uppercase",
                lang === 'C++' ? "bg-blue-500/10 text-blue-400 border-blue-500/30" : 
                lang === 'Python' ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" :
                "bg-purple-500/10 text-purple-400 border-purple-500/30"
              )}
            >
              {lang}
            </span>
          ))}
        </div>
        <span className="mono-label">#00{project.id}</span>
      </div>

      <h3 className="text-xl font-medium mb-3 group-hover:text-accent transition-colors tracking-tight">
        {project.title}
      </h3>
      
      <p className="text-[12px] text-white/50 leading-relaxed font-light mb-8 flex-grow">
        {project.description}
      </p>

      {/* Code Snippet - Dashboard style */}
      {project.codeSnippet && (
        <div className="mb-6 rounded border border-white/5 bg-black/40 p-1">
          <div className="flex items-center space-x-1.5 px-2 py-1 bg-white/5 rounded-t-[2px]">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
            <span className="text-[9px] font-mono text-white/20 ml-2 uppercase">snippet.{project.codeSnippet.language}</span>
          </div>
          <pre className={cn(`language-${project.codeSnippet.language}`, "m-0 !p-3 !bg-transparent overflow-hidden")}>
            <code 
              className="hljs !bg-transparent !p-0"
              dangerouslySetInnerHTML={{ __html: highlightedCode }} 
            />
          </pre>
        </div>
      )}

      {/* Footer Info & Links */}
      <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/5">
        <div className="flex flex-wrap gap-3">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[9px] font-mono text-white/20 uppercase tracking-widest leading-none">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

