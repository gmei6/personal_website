export type Language = 'Python' | 'C++' | 'Both';

export type Category = 
  | 'Systems Programming' 
  | 'Data Science' 
  | 'Automation' 
  | 'Graphics' 
  | 'CLI Tools' 
  | 'Web API';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  languages: Language[];
  tags: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string; // Optional: Some C++ projects might not have demos
  category: Category;
  codeSnippet?: {
    code: string;
    language: string;
  };
}

export interface Skill {
  name: string;
  icon?: string;
  level: number; // 0-100
  category: 'Language' | 'Tool' | 'Library';
  primaryLanguage?: 'Python' | 'C++';
}
