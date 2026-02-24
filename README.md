# Job Notification Tracker with Daily Digest Engine

A premium job tracking application with an intelligent daily digest feature that curates the top 10 job matches.

## 🚀 Live Demo

- **Job Tracker:** [Your Vercel URL]
- **KodNest Demo:** [Your Vercel URL]/kodnest-demo

## Features

### Job Notification Tracker
- 📋 Job listing with match scores
- ⚙️ User preferences management
- 📧 Daily 9AM digest (simulated)
- 📋 Copy digest to clipboard
- ✉️ Create email draft with digest
- 💾 Persistent daily digest storage
- 🎨 Premium Apple-inspired design

### KodNest Premium Build System
- 🎨 Professional B2C design system
- 📐 Calm, intentional, coherent design philosophy
- 🎯 Complete component library
- 📱 Fully responsive
- 📖 Comprehensive documentation

## Tech Stack

- Pure HTML, CSS, JavaScript
- LocalStorage for data persistence
- Responsive design
- No dependencies required
- Static site (no build process needed)

## Getting Started Locally

1. Clone the repository
```bash
git clone https://github.com/teja292004-ops/Job-Notification.git
cd Job-Notification
```

2. Open in browser
- Job Tracker: Open `index.html`
- KodNest Demo: Open `kodnest-demo.html`

## 📦 Deployment to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import `teja292004-ops/Job-Notification`
5. Click "Deploy" (no configuration needed)
6. Done! Your site is live

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Method 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/teja292004-ops/Job-Notification)

## 📁 Project Structure

```
├── Job Notification Tracker
│   ├── index.html          # Main jobs listing page
│   ├── preferences.html    # User preferences page
│   ├── digest.html         # Daily digest page
│   ├── styles.css          # Premium styling
│   ├── app.js             # Jobs listing logic
│   ├── preferences.js     # Preferences management
│   └── digest.js          # Digest generation engine
│
├── KodNest Premium Build System
│   ├── kodnest-demo.html   # Demo page
│   ├── kodnest-system.css  # Complete design system
│   └── DESIGN-SYSTEM.md    # Documentation
│
└── Configuration
    ├── vercel.json         # Vercel configuration
    ├── package.json        # Project metadata
    ├── .gitignore         # Git ignore rules
    └── README.md          # This file
```

## 🌐 Live URLs

After deployment, your apps will be available at:

- **Homepage:** `https://your-project.vercel.app/`
- **Preferences:** `https://your-project.vercel.app/preferences.html`
- **Digest:** `https://your-project.vercel.app/digest.html`
- **KodNest Demo:** `https://your-project.vercel.app/kodnest-demo.html`

## 🎯 Usage

### Job Notification Tracker

1. Visit the homepage to see available jobs
2. Go to Preferences to set your job preferences
3. Visit Digest page to generate your daily top 10 jobs
4. Use "Copy to Clipboard" or "Create Email Draft" buttons

### KodNest Design System

1. Visit `/kodnest-demo.html` to see the design system in action
2. Read `DESIGN-SYSTEM.md` for complete documentation
3. Use `kodnest-system.css` in your projects

## 🔧 Troubleshooting Vercel Deployment

If deployment fails:

1. **Check vercel.json exists** - This file configures routing
2. **Verify all files are pushed** - Run `git status` to check
3. **Check build logs** - Look for errors in Vercel dashboard
4. **Try redeploying** - Click "Redeploy" in Vercel dashboard

## 📝 License

MIT

## 👤 Author

teja292004-ops

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
