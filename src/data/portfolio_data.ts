import { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'High-Performance Physics Engine',
    description: 'A 2D rigid body physics engine built from scratch emphasizing spatial partitioning and SIMD optimizations.',
    languages: ['C++'],
    category: 'Systems Programming',
    tags: ['CMake', 'SDL2', 'SIMD', 'OpenGL'],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/placeholder/physics-engine',
    codeSnippet: {
      language: 'cpp',
      code: `void World::Step(float dt) {
  // Broad phase: Spatial Partitioning
  auto pairs = grid.GetPotentialPairs();
  
  // Narrow phase: SAT Collision Detection
  for (auto& pair : pairs) {
    if (Collision::Check(pair.a, pair.b)) {
      ResolveImpulse(pair.a, pair.b);
    }
  }
}`
    }
  },
  {
    id: '2',
    title: 'Auto-ML Experiment Tracker',
    description: 'A Python-based framework for automated hyperparameter tuning and experiment visualization.',
    languages: ['Python'],
    category: 'Data Science',
    tags: ['NumPy', 'Pandas', 'Flask', 'Sklearn', 'Optuna'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/placeholder/auto-ml',
    demoUrl: 'https://demo.automl.example.com',
    codeSnippet: {
      language: 'python',
      code: `def objective(trial):
    x = trial.suggest_float("x", -10, 10)
    optimizer = Adam(lr=trial.suggest_loguniform("lr", 1e-5, 1e-1))
    return (x - 2) ** 2

study = optuna.create_study()
study.optimize(objective, n_trials=100)`
    }
  },
  {
    id: '3',
    title: 'Distributed Log Aggregator',
    description: 'Real-time log processing system using C++ for high-throughput ingestion and Python for analysis.',
    languages: ['C++', 'Python'],
    category: 'Systems Programming',
    tags: ['ZeroMQ', 'Protobuf', 'Docker', 'Redis'],
    image: 'https://images.unsplash.com/photo-1558494949-ef8a09188f9d?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/placeholder/log-aggregator',
  },
  {
    id: '4',
    title: 'Ray Tracing in a Weekend',
    description: 'Implementation of a basic ray tracer following the Peter Shirley series, optimized with multithreading.',
    languages: ['C++'],
    category: 'Graphics',
    tags: ['Multithreading', 'PPM', 'Linear Algebra'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/placeholder/raytracer',
  }
];

export const skills: Skill[] = [
  // Primary Languages
  { name: 'C++', level: 90, category: 'Language', primaryLanguage: 'C++' },
  { name: 'Python', level: 95, category: 'Language', primaryLanguage: 'Python' },
  
  // C++ Ecosystem
  { name: 'STL', level: 85, category: 'Library', primaryLanguage: 'C++' },
  { name: 'Boost', level: 70, category: 'Library', primaryLanguage: 'C++' },
  { name: 'CMake', level: 80, category: 'Tool', primaryLanguage: 'C++' },
  { name: 'Qt', level: 75, category: 'Library', primaryLanguage: 'C++' },
  
  // Python Ecosystem
  { name: 'NumPy', level: 90, category: 'Library', primaryLanguage: 'Python' },
  { name: 'Pandas', level: 85, category: 'Library', primaryLanguage: 'Python' },
  { name: 'Flask', level: 80, category: 'Library', primaryLanguage: 'Python' },
  { name: 'PyTorch', level: 75, category: 'Library', primaryLanguage: 'Python' },
  
  // General Tools
  { name: 'Git', level: 90, category: 'Tool' },
  { name: 'Docker', level: 80, category: 'Tool' },
  { name: 'Linux', level: 85, category: 'Tool' },
];
