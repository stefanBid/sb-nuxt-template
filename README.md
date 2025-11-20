# SB Nuxt Template

![Node.js](https://img.shields.io/badge/node-%3E%3D24.11.0-brightgreen)
![Vue](https://img.shields.io/badge/vue-3.5.24-4FC08D?logo=vue.js)
![Nuxt](https://img.shields.io/badge/nuxt-4.2.1-00DC82?logo=nuxt.js)
![TypeScript](https://img.shields.io/badge/typescript-latest-3178C6?logo=typescript)
![i18n](https://img.shields.io/badge/i18n-10.2.1-blue)
![ESLint](https://img.shields.io/badge/eslint-9.39.1-4B32C3?logo=eslint)

A modern, production-ready Nuxt 3 starter template with internationalization, optimized styling, and best practices baked in. Perfect for quickly bootstrapping new projects with a solid foundation.

---

## 🚀 What's Inside

This template provides a complete development environment with:

### 🎨 **Styling & Design System**
- **Tailwind CSS 4** with custom design tokens
- Pre-configured theme system (light theme by default)
- Custom typography utilities (`ty-app-*` classes)
- Responsive breakpoints aligned with Tailwind
- Smooth animations and transitions

### 🌍 **Internationalization**
- **@nuxtjs/i18n** with English and Italian pre-configured
- URL prefix strategy (`/en/page`, `/it/page`)
- Browser language auto-detection
- Cookie-based language persistence

### 🧩 **UI Components**
- **TheHeader** - Responsive navigation with mobile drawer
- **TheFooter** - Multi-section footer with social links
- **TheNotificationBanner** - Toast notifications (success, warning, error, info)
- **BaseIconMenu** - Floating dropdown menu with keyboard support
- **BaseCloseButton** - Reusable close button component

### 🛠️ **Developer Experience**
- **ESLint 9** with stylistic rules
- **TypeScript** support out of the box
- **VueUse** composables library
- **Floating UI** for tooltips and dropdowns
- Hot module replacement (HMR)
- Auto-imports for components and composables

### ⚙️ **CI/CD & Automation**
- **GitHub Actions CI** - Automatic build and lint checks on push/PR
- **Release Please** - Automated versioning and changelog generation
- Smart workflow that skips CI for release-please PRs
- Ready for continuous deployment

### 🖼️ **Asset Optimization**
- **@nuxt/image** with Netlify/IPX provider support
- WebP, AVIF, and PNG format support
- Cloudinary integration ready
- **@nuxt/icon** with Solar and Circle Flags icon sets

### 📦 **Project Structure**
```
app/
├── assets/
│   └── css/           # Global styles and theme
├── components/
│   ├── base/          # Reusable UI components
│   ├── the-footer/    # Footer component
│   ├── the-header/    # Header component
│   └── the-notification/ # Notification system
├── layouts/           # Page layouts
├── pages/             # File-based routing
└── locales/           # i18n translation files
```

---

## 📋 Prerequisites

- **Node.js** ≥ 24.11.0
- **npm** or **pnpm** or **yarn**

---

## 🎯 Getting Started

### 1️⃣ Clone or Use This Template

**Option A: Use as GitHub Template**
```bash
# Click "Use this template" on GitHub
# Then clone your new repository
git clone https://github.com/your-username/your-project-name.git
cd your-project-name
```

**Option B: Clone Directly**
```bash
git clone https://github.com/stefanoBid/sb-nuxt-template.git my-project
cd my-project
rm -rf .git  # Remove git history to start fresh
git init
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Reset Version (Optional)

If you want to start fresh without the template's version history:

```bash
# Clear the CHANGELOG.md
echo "# Changelog" > CHANGELOG.md

# Reset version in package.json to 0.1.0
# (or edit package.json manually)
npm version 0.1.0 --no-git-tag-version
```

This ensures your project starts from version `0.1.0` instead of inheriting the template's version.

### 4️⃣ Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your app running.

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run generate` | Generate static site (SSG) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality with ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |

---

## 🎨 Customization Guide

### **Theme Configuration**

Edit `app/assets/css/theme.css` to customize your design system:

```css
@theme {
  --font-primary: 'Bebas Neue', system-ui, sans-serif;
  --font-secondary: 'Space Mono', ui-monospace, monospace;

  --color-app-main: #f8f9fa;
  --color-app-accent: #2563eb;
  --color-app-contrast: #1a1a1a;
  /* ... more colors */
}
```

### **Typography Classes**

Use pre-configured typography utilities:
- `ty-app-hero` - Extra large display text
- `ty-app-title` / `ty-app-title-lg` / `ty-app-title-xl` - Headings
- `ty-app-subtitle` / `ty-app-subtitle-lg` - Subheadings
- `ty-app-paragraph` - Body text
- `ty-app-label` - Small labels
- `ty-app-btn-label` - Button text

### **Add New Languages**

1. Add locale to `nuxt.config.ts`:
```typescript
locales: [
  { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
  { code: 'it', iso: 'it-IT', name: 'Italiano', file: 'it.json' },
  { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' }, // New
]
```

2. Create `locales/fr.json` with translations.

### **Environment Variables**

Create a `.env` file for configuration:

```env
NUXT_PUBLIC_CLOUDINARY_BASE=https://your-cloudinary-url
```

---

## 📦 Deployment

### **Netlify** (Default)
This template is pre-configured for Netlify:

```bash
npm run build
```

Deploy the `.output` directory to Netlify.

### **Other Platforms**

Change the preset in `nuxt.config.ts`:

```typescript
nitro: {
  preset: 'vercel',  // or 'cloudflare', 'netlify', 'node-server', etc.
}
```

See [Nuxt Deployment Docs](https://nuxt.com/docs/getting-started/deployment) for more options.

---

## 🔄 CI/CD Workflows

This template includes pre-configured GitHub Actions workflows:

### **Continuous Integration (CI)**
- **Trigger**: Runs on push to `main`, `develop`, `release/**` branches and PRs to `main`
- **Actions**:
  - Checks out code
  - Installs dependencies (`npm ci`)
  - Runs linter (`npm run lint`)
  - Runs type checking (`npm run typecheck`)
  - Builds the Nuxt app (`npm run build`)
- **Smart Skip**: Automatically skips heavy CI steps for Release Please PRs (only marks as success)

### **Automated Versioning (Release Please)**
- **Trigger**: Runs on push to `main` branch
- **Actions**:
  - Analyzes commit messages (conventional commits)
  - Creates/updates a release PR with:
    - Auto-generated changelog
    - Version bump in `package.json`
  - When PR is merged, creates a GitHub release with tags

### **Important Note**
If you want to start your project from version `0.1.0` (instead of the template's version), remember to:
1. Clear `CHANGELOG.md` content
2. Reset version in `package.json` to `0.1.0`

This prevents inheriting the template's release history.

---

## 🧪 What to Build Next

This template is ready for:

✅ **Landing pages** with multiple languages
✅ **Marketing sites** with optimized images
✅ **Documentation sites** with custom styling
✅ **SaaS applications** with notification system
✅ **Portfolio websites** with dynamic routing

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Stefano Biddau**
📧 biddau.stefano99@gmail.com

---

## 🌟 Show Your Support

If this template helped you, give it a ⭐️ on GitHub!

---

**Happy coding! 🚀**
