# Manduva Jaswita — Portfolio

A personal developer portfolio built with React, showcasing projects, skills, and experience across full-stack development, backend systems, machine learning, and embedded systems.

**Live site:** [my-portfolio.vercel.app]([https://my-portfolio.vercel.app](https://my-portfolio-jaswita-g3ostx03a-jaswitas-projects.vercel.app/)) <!-- replace with your actual Vercel URL -->
**Repo:** [github.com/Jaswita/my-portfolio](https://github.com/Jaswita/my-portfolio)

---

## About

This is a single-page application with four sections — About, Resume, Portfolio, and Contact — navigated via a sidebar/navbar without page reloads. It's designed as a living document: as new projects ship, they get added to the Portfolio page and (if notable enough) the About page's highlight reel.

## Features

- **About** — bio, a "What I'm Doing" skills grid, and a highlight reel of top projects
- **Resume** — education, technical skills, and a downloadable PDF resume
- **Portfolio** — full project catalog with category filtering (Full Stack, Machine Learning, Embedded Systems, Mobile, Applications, Web Design), featured-project badges, and real screenshots
- **Contact** — direct contact details and links
- **Interactive hover effects** — spotlight cursor-follow glow on cards (`src/utils/spotlightFx.js`) and a custom cursor effect (`src/components/CursorFx.js`)
- **Fully responsive** — dark onyx/gold theme that adapts across mobile, tablet, and desktop

## Tech Stack

- **React** (functional components, hooks)
- **Plain CSS** with custom properties for theming (`src/style.css`) — no CSS framework
- **react-icons** (`react-icons/io5`) for iconography
- Deployed on **Vercel**, auto-deployed from the `main` branch on GitHub

## Project Structure

```
src/
├── assets/
│   ├── images/       # project screenshots and icons
│   └── resume/        # downloadable resume PDF
├── components/
│   ├── About.js
│   ├── Resume.js
│   ├── Portfolio.js
│   ├── Contact.js
│   ├── Navbar.js
│   ├── Sidebar.js
│   └── CursorFx.js
├── utils/
│   └── spotlightFx.js # hover spotlight effect logic
├── App.js
├── App.css
├── index.css
└── style.css
```

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Jaswita/my-portfolio.git
cd my-portfolio
npm install
```

Run the development server:

```bash
npm start
```

The app runs at `http://localhost:3000`.

Build for production:

```bash
npm run build
```

## Deployment

This project is deployed on [Vercel](https://vercel.com), connected directly to this GitHub repository. Every push to `main` triggers an automatic build and deployment — no manual steps required.

## Featured Projects

A few highlights (see the Portfolio page for the full list):

- **[Splitter](https://github.com/Jaswita/splitter)** — federated social platform built with Go, ActivityPub, and decentralized identity
- **[Prescription Checker](https://github.com/Jaswita/prescription-checker)** — enterprise-grade prescription verification system with AES/RSA encryption and audit logging
- **[Adaptive Learning Platform](https://github.com/Jaswita/adaptive-learning-platform)** — DSA-driven personalized learning engine (Trie, Graph, Priority Queue)
- **[AI Symptom Analyser for Women](https://github.com/Jaswita/AI_SymptomAnalyserForWomen)** — privacy-first health companion powered by Gemini AI

## Contact

- **Email:** jaswitamanduva@gmail.com
- **Phone:** +91 8885393863
- **LinkedIn:** [linkedin.com/in/manduva-jaswita](https://linkedin.com/in/manduva-jaswita)
- **GitHub:** [github.com/Jaswita](https://github.com/Jaswita)

## License

This project is personal portfolio code. Feel free to reference the structure, but please don't reuse the content, resume, or project descriptions as your own.
