# DevPortfolio Framework

A professional, minimalist portfolio framework designed specifically for Python and C++ developers. This project uses React, Tailwind CSS, and Motion to provide a high-performance, modular experience.

## 🚀 Quick Start (Local Setup)

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Dev Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

- `src/data/portfolio_data.ts`: **The main file for your content.** Add your projects and skills here.
- `src/components/`: Individual UI sections (Hero, Portfolio, Skills, etc.).
- `src/types/index.ts`: TypeScript definitions for project and skill structures.
- `src/index.css`: Global styles, themes, and typography settings.

## 🛠 Adding Your Projects

Open `src/data/portfolio_data.ts` and add a new object to the `projects` array:

```typescript
{
  id: 'unique-id',
  title: 'My Project',
  description: 'A brief overview...',
  languages: ['Python'], // 'Python' or 'C++' or 'Both'
  category: 'Automation',
  tags: ['Tag1', 'Tag2'],
  image: 'https://images.unsplash.com/...', // Image URL
  githubUrl: 'https://github.com/...',
  codeSnippet: {
    language: 'python',
    code: 'print("Hello World")'
  }
}
```

## 🌐 Deployment (GitHub Pages)

This project is optimized for deployment via GitHub Actions.

1. Push your code to a GitHub repository.
2. In your repo settings, go to **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. GitHub will automatically detect the Vite project and deploy it.

*Note: If you are not using a custom domain and your site is at `username.github.io/repo-name/`, update `base: '/repo-name/'` in `vite.config.ts` before building.*

## 🎨 Customization

- **Colors**: Edit the CSS variables in `src/index.css` under `:root` and `.dark`.
- **Fonts**: The project uses *Inter* for body text and *JetBrains Mono* for technical accents.
- **Dark Mode**: Automatically toggles based on system preference or user manual toggle.

---
*Built with simplicity and performance in mind. No AI was used in the functionality of this template.*
