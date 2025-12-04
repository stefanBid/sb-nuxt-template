<div align="center">
  <div style="background: white; padding: 20px; border-radius: 12px; display: inline-block;">
    <img src="https://stunning-confidence-0ce6b255c4.media.strapiapp.com/sb_template_nuxt_logo_cd2c1f9652.webp" alt="SB-Template Nuxt Logo" width="200">
  </div>
  
  # SB-Template Nuxt
  
  ### 🚀 Production-Ready Nuxt 3 Starter with Superpowers
  
  ![Node.js](https://img.shields.io/badge/node-%3E%3D24.11.0-brightgreen)
  ![Vue](https://img.shields.io/badge/vue-3.5.25-4FC08D?logo=vue.js)
  ![Nuxt](https://img.shields.io/badge/nuxt-4.2.1-00DC82?logo=nuxt.js)
  ![TypeScript](https://img.shields.io/badge/typescript-latest-3178C6?logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/tailwind-4.1.17-38B2AC?logo=tailwind-css)
  ![i18n](https://img.shields.io/badge/i18n-10.2.1-blue)
  ![ESLint](https://img.shields.io/badge/eslint-9.39.1-4B32C3?logo=eslint)

  **Stop wasting time on boilerplate. Start building features.**
  
  A battle-tested, feature-rich Nuxt 3 template that includes everything you need: i18n, styling system, reusable components, and CI/CD ready to deploy.

  [Quick Start](#-quick-start) • [Features](#-core-features) • [Customization](#-customization) • [Deploy](#-deployment)
  
</div>

---

## 📋 Table of Contents

- [Core Features](#-core-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
  - [Theme & Styling](#-theme--styling)
  - [Internationalization](#-internationalization)
  - [Components](#-using-built-in-components)
  - [Composables](#-composables-reference)
- [Deployment](#-deployment)
- [CI/CD](#-cicd-workflows)

---

## ✨ Core Features

### 🎨 Styling & Design System
- **Tailwind CSS 4.1.17** - Modern utility-first CSS with custom design tokens
- **Custom Theme System** - Pre-configured light theme with CSS variables (`app/assets/css/theme.css`)
- **Typography Utilities** - Ready-to-use text styles with `ty-app-*` classes
- **Responsive Breakpoints** - Mobile-first design aligned with Tailwind standards
- **Smooth Animations** - CSS transitions and animations pre-configured

### 🌍 Internationalization (i18n)
- **@nuxtjs/i18n 10.2.1** - Complete i18n solution
- **English & Italian** included (easily add more)
- **URL Strategy** - `prefix_except_default` (e.g., `/page` for EN, `/it/page` for IT)
- **Translation Files** - JSON-based translations in `i18n/locales/`

### 🧩 Pre-Built Components
- **`TheHeader`** - Responsive navigation with mobile drawer
- **`TheFooter`** - Multi-column footer with social links
- **`TheNotificationBanner`** - Toast notifications (success, error, warning, info)
- **`BaseIconMenu`** - Floating dropdown menu with keyboard navigation
- **`BaseCloseButton`** - Accessible close button

### 🛠️ Developer Experience
- **TypeScript** - Full type safety
- **ESLint 9.39.1** - Code quality with stylistic rules
- **VueUse 14.1.0** - Vue composition utilities
- **Floating UI 1.1.9** - Tooltips, popovers, dropdowns
- **Auto-imports** - Components and composables automatically imported
- **Hot Module Replacement** - Lightning-fast development

### 🖼️ Asset Optimization
- **@nuxt/image 2.0.0** - Automatic image optimization
- **Multiple Formats** - WebP, AVIF, PNG support
- **Responsive Images** - Automatic srcset generation
- **Cloudinary Ready** - Pre-configured provider
- **@nuxt/icon 2.1.0** - SVG icon system with MDI and Flagpack collections

### ⚙️ CI/CD Ready
- **GitHub Actions** - Pre-configured workflows
- **Automated Testing** - Lint and build checks on PR
- **Release Please** - Automated versioning and changelog
- **Netlify Preset** - Optimized for Netlify deployment (easily switch to Vercel, Cloudflare, etc.)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 24.11.0
- **npm** / **pnpm** / **yarn**

### Installation

**Option 1: Use as GitHub Template** (Recommended)

1. Click **"Use this template"** on GitHub
2. Clone your new repository:
```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

**Option 2: Clone Directly**

```bash
git clone https://github.com/stefanoBid/sb-nuxt-template.git my-project
cd my-project
rm -rf .git && git init  # Start fresh
```

### Setup

```bash
# Install dependencies
npm install

# (Optional) Reset version to 0.1.0
echo "# Changelog" > CHANGELOG.md
npm version 0.1.0 --no-git-tag-version

# Start development server
npm run dev
```

Visit **http://localhost:3000** 🎉

---

## 📁 Project Structure

```
sb-template-nuxt/
├── app/
│   ├── assets/
│   │   └── css/
│   │       ├── main.css          # Main CSS entry point
│   │       ├── theme.css         # CSS variables & design tokens
│   │       ├── typography.css    # Typography utilities (ty-app-*)
│   │       ├── animations.css    # Animation classes
│   │       └── utilities.css     # Custom utility classes
│   │
│   ├── components/
│   │   ├── base/
│   │   │   ├── close-button/     # BaseCloseButton.vue
│   │   │   └── icon-menu/        # BaseIconMenu.vue
│   │   ├── the-footer/           # TheFooter.vue
│   │   ├── the-header/           # TheHeader.vue & TheHeaderMenuToggle.vue
│   │   └── the-notification/     # TheNotificationBanner.vue & Box
│   │
│   ├── composables/
│   │   ├── useAppNotifications.ts  # Notification system
│   │   ├── useFloatingUi.ts        # Floating UI helper
│   │   ├── useLockScroll.ts        # Scroll lock utility
│   │   └── useSanitize.ts          # HTML sanitization
│   │
│   ├── layouts/
│   │   └── default.vue             # Default page layout
│   │
│   ├── pages/
│   │   └── index.vue               # Homepage
│   │
│   ├── plugins/
│   │   └── scrollToTop.client.ts   # Auto-scroll on route change
│   │
│   ├── types/
│   │   └── global.d.ts             # Global TypeScript types
│   │
│   ├── utils/
│   │   └── generateUuid.ts         # UUID generator
│   │
│   ├── app.vue                      # Root component
│   └── error.vue                    # Error page
│
├── i18n/
│   └── locales/
│       ├── en.json                  # English translations
│       └── it.json                  # Italian translations
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml                  # SEO sitemap template
│
├── nuxt.config.ts                   # Nuxt configuration
├── tsconfig.json                    # TypeScript configuration
├── eslint.config.mjs                # ESLint configuration
└── package.json
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `http://localhost:3000` |
| `npm run build` | Build for production (outputs to `.output/`) |
| `npm run generate` | Generate static site (SSG mode) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality with ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |

---

## 🎨 Customization

### 🎨 Theme & Styling

#### Customize Design Tokens

Edit `app/assets/css/theme.css` to change colors, fonts, and spacing:

```css
@theme {
  /* Fonts */
  --font-app-primary: 'Your Font', system-ui, sans-serif;
  --font-app-secondary: 'Your Mono Font', monospace;

  /* Colors */
  --color-app-main: #f8f9fa;        /* Background */
  --color-app-accent: #2563eb;      /* Primary accent */
  --color-app-contrast: #1a1a1a;    /* Text color */
  --color-app-error: #dc2626;       /* Error state */
  /* ...more colors */
}
```

> **💡 Tip:** All CSS variables are prefixed with `app-` to avoid conflicts.

#### Typography Utilities

Pre-configured typography classes in `app/assets/css/typography.css`:

| Class | Usage | Example |
|-------|-------|---------|
| `ty-app-hero` | Hero text (60px) | Landing page headlines |
| `ty-app-title-xl` | Extra large title (48px) | Page titles |
| `ty-app-title-lg` | Large title (36px) | Section headers |
| `ty-app-title` | Regular title (24px) | Card headers |
| `ty-app-subtitle-lg` | Large subtitle (20px) | Subheadings |
| `ty-app-subtitle` | Regular subtitle (18px) | Small subheadings |
| `ty-app-paragraph` | Body text (16px) | Paragraph content |
| `ty-app-label` | Small label (14px) | Form labels, captions |
| `ty-app-btn-label` | Button text (16px) | Button labels |

**Example:**
```vue
<template>
  <h1 class="ty-app-hero">Welcome to My App</h1>
  <p class="ty-app-paragraph">This is a paragraph with proper styling.</p>
</template>
```

#### Custom Animations

Use pre-defined animation classes from `app/assets/css/animations.css`:
- `fade-in` / `fade-out`
- `slide-in-up` / `slide-in-down`
- `bounce-in`

---

### 🌍 Internationalization

#### Add a New Language

**1. Register the locale in `nuxt.config.ts`:**

```typescript
i18n: {
  locales: [
    { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    { code: 'it', iso: 'it-IT', name: 'Italiano', file: 'it.json' },
    { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' }, // ✅ New
  ],
}
```

**2. Create translation file `i18n/locales/fr.json`:**

```json
{
  "welcome": "Bienvenue",
  "nav": {
    "home": "Accueil",
    "about": "À propos"
  }
}
```

**3. Use translations in components:**

```vue
<template>
  <h1>{{ $t('welcome') }}</h1>
  <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
</template>
```

#### Switch Languages Programmatically

```vue
<script setup>
const { locale, setLocale } = useI18n()

function changeLanguage(lang: string) {
  setLocale(lang)
}
</script>

<template>
  <button @click="changeLanguage('it')">Italiano</button>
  <button @click="changeLanguage('en')">English</button>
</template>
```

---

### 🧩 Using Built-in Components

#### Notification System

```vue
<script setup>
const { notify } = useAppNotifications()

function showSuccess() {
  notify({
    type: 'success',
    title: 'Success!',
    description: 'Your action was completed.',
    duration: 5000, // Auto-dismiss after 5s
  })
}

function showError() {
  notify({
    type: 'error',
    title: 'Error!',
    description: 'Something went wrong.',
    duration: 0, // Manual dismiss only
  })
}
</script>

<template>
  <button @click="showSuccess">Show Success</button>
  <button @click="showError">Show Error</button>
</template>
```

**Notification Types:** `success`, `error`, `warning`, `info`

#### Icon Menu (Dropdown)

```vue
<template>
  <BaseIconMenu>
    <template #trigger="{ toggle }">
      <button @click="toggle">
        <Icon name="mdi:menu" />
      </button>
    </template>
    
    <template #content>
      <div class="p-4 bg-white rounded-lg shadow-lg">
        <a href="/profile">Profile</a>
        <a href="/settings">Settings</a>
        <button @click="logout">Logout</button>
      </div>
    </template>
  </BaseIconMenu>
</template>
```

---

### 🔧 Composables Reference

#### `useAppNotifications()`

Manage toast notifications.

```typescript
const { notify, removeNotification, notifications } = useAppNotifications()

// Show notification
notify({
  type: 'success',
  title: 'Title',
  description: 'Description',
  duration: 5000, // ms (0 = manual dismiss)
})

// Remove specific notification
removeNotification(id)
```

#### `useFloatingUi(reference, floating, options)`

Position floating elements (tooltips, dropdowns).

```typescript
const reference = ref<HTMLElement>()
const floating = ref<HTMLElement>()

const { floatingStyles } = useFloatingUi(reference, floating, {
  placement: 'bottom-start',
  offset: 8,
})
```

#### `useLockScroll()`

Lock/unlock body scroll (useful for modals).

```typescript
const { lockScroll, unlockScroll } = useLockScroll()

// Lock scroll when modal opens
onMounted(() => lockScroll())

// Unlock when modal closes
onUnmounted(() => unlockScroll())
```

#### `useSanitize(html)`

Sanitize HTML to prevent XSS attacks.

```typescript
const { sanitizeHtml } = useSanitize()

const cleanHtml = sanitizeHtml('<script>alert("xss")</script><p>Safe content</p>')
// Result: '<p>Safe content</p>'
```

---

### 🖼️ Image Optimization

#### Using Nuxt Image

```vue
<template>
  <!-- Local images (from public/) -->
  <NuxtImg
    src="/images/hero.jpg"
    alt="Hero image"
    width="800"
    height="600"
    format="webp"
    loading="lazy"
  />

  <!-- Cloudinary images -->
  <NuxtImg
    provider="cloudinary"
    src="/sample.jpg"
    alt="Sample"
    width="400"
    height="300"
  />

  <!-- External images (requires domain whitelisting) -->
  <NuxtImg
    src="https://example.com/image.jpg"
    alt="External"
    width="600"
    height="400"
  />
</template>
```

**Configure external domains in `nuxt.config.ts`:**

```typescript
image: {
  domains: [
    'https://api.example.com',
    'https://cdn.yoursite.com',
  ],
}
```

#### Icons

```vue
<template>
  <!-- MDI icons -->
  <Icon name="mdi:home" size="24" />
  <Icon name="mdi:account-circle" size="32" color="blue" />
  
  <!-- Flag icons -->
  <Icon name="flagpack:it" size="24" />
  <Icon name="flagpack:us" size="24" />
</template>
```

Browse available icons:
- [MDI Icons](https://icon-sets.iconify.design/mdi/)
- [Flagpack Icons](https://icon-sets.iconify.design/flagpack/)

---

### ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
# API Configuration
NUXT_PUBLIC_API_URL=https://api.yoursite.com

# Cloudinary
NUXT_PUBLIC_CLOUDINARY_BASE=https://res.cloudinary.com/your-cloud-name

# CMS (Strapi, etc.)
NUXT_PUBLIC_STRAPI_URL=https://cms.yoursite.com

# Analytics
NUXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Access in your app:**

```typescript
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl
```

> **⚠️ Important:** Only variables prefixed with `NUXT_PUBLIC_` are exposed to the client.

---

## 📦 Deployment

### Netlify (Default Configuration)

This template is pre-configured for Netlify deployment.

**1. Build your app:**
```bash
npm run build
```

**2. Deploy to Netlify:**
- Connect your GitHub repository to Netlify
- Build command: `npm run build`
- Publish directory: `.output/public`

**3. Environment variables:**
Add your `.env` variables in Netlify dashboard under **Site settings → Environment variables**.

---

### Vercel

**1. Change preset in `nuxt.config.ts`:**
```typescript
nitro: {
  preset: 'vercel',
}
```

**2. Deploy:**
```bash
npm run build
vercel deploy
```

---

### Cloudflare Pages

**1. Change preset:**
```typescript
nitro: {
  preset: 'cloudflare-pages',
}
```

**2. Build and deploy:**
```bash
npm run build
# Deploy .output/public to Cloudflare Pages
```

---

### Node.js Server

**1. Change preset:**
```typescript
nitro: {
  preset: 'node-server',
}
```

**2. Build and run:**
```bash
npm run build
node .output/server/index.mjs
```

> **📚 More deployment options:** [Nuxt Deployment Docs](https://nuxt.com/docs/getting-started/deployment)

---

## 🔄 CI/CD Workflows

This template includes **GitHub Actions** workflows for automated testing and releasing.

### Continuous Integration (CI)

**Triggers:**
- Push to `main`, `develop`, `release/**` branches
- Pull requests to `main`

**Actions:**
1. ✅ Checkout code
2. ✅ Install dependencies (`npm ci`)
3. ✅ Run linter (`npm run lint`)
4. ✅ Build app (`npm run build`)

**Smart Skip:** The workflow automatically skips heavy steps for **Release Please PRs** (only marks as passed).

**Workflow file:** `.github/workflows/ci.yml`

---

### Automated Versioning (Release Please)

**Trigger:** Push to `main` branch

**What it does:**
1. Analyzes **conventional commits** (e.g., `feat:`, `fix:`, `chore:`)
2. Creates/updates a **Release PR** with:
   - Auto-generated changelog
   - Version bump in `package.json`
3. When merged, creates a **GitHub Release** with tags

**Commit Message Format:**
```bash
# Features
git commit -m "feat: add dark mode support"

# Bug fixes
git commit -m "fix: resolve navigation issue on mobile"

# Breaking changes
git commit -m "feat!: redesign authentication system"

# Chores (no release)
git commit -m "chore: update dependencies"
```

> **💡 Tip:** Use conventional commits to automate versioning!

**Workflow file:** `.github/workflows/release-please.yml`

---

### Starting Fresh

If you want your project to start from **version 0.1.0** instead of inheriting the template's version:

```bash
# Clear changelog
echo "# Changelog" > CHANGELOG.md

# Reset version
npm version 0.1.0 --no-git-tag-version

# Commit changes
git add .
git commit -m "chore: initialize project from template"
```

---

## 🧪 What You Can Build

This template is perfect for:

✅ **Landing Pages** - Fast, SEO-optimized, multi-language
✅ **Marketing Sites** - With optimized images and analytics ready
✅ **Documentation Sites** - Custom styling and navigation
✅ **SaaS Applications** - Notification system and user dashboards
✅ **Portfolio Websites** - Dynamic routing and image galleries
✅ **E-commerce Stores** - Product pages with i18n support

---

## 💡 Best Practices

### File Organization

- **Components:** Use `PascalCase` for component filenames
- **Composables:** Prefix with `use` (e.g., `useAuth.ts`)
- **Utils:** Pure functions in `app/utils/`
- **Types:** Global types in `app/types/global.d.ts`

### Code Style

- Follow ESLint rules (run `npm run lint:fix` before committing)
- Use TypeScript for type safety
- Prefer composition API over options API
- Use auto-imports instead of manual imports

### Performance

- Lazy load components with `<ClientOnly>` when not needed for SSR
- Use `<NuxtImg>` instead of `<img>` for automatic optimization
- Prerender static pages in `nuxt.config.ts` → `routeRules`
- Keep bundle size small (check with `npm run build -- --analyze`)

---

## 🐛 Troubleshooting

### Common Issues

**Issue:** `Cannot find module 'isomorphic-dompurify'`
**Solution:** This is expected during server builds. The module is excluded in `nuxt.config.ts` → `nitro.externals`.

**Issue:** Icons not showing
**Solution:** Make sure icon collections are installed: `npm i @iconify-json/mdi @iconify-json/flagpack`

**Issue:** i18n routes not working
**Solution:** Check `nuxt.config.ts` → `i18n.strategy` and ensure locale files exist in `i18n/locales/`

**Issue:** Images not loading from external domains
**Solution:** Add domain to `nuxt.config.ts` → `image.domains`

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Report bugs** - Open an issue with details
2. **Suggest features** - Share your ideas
3. **Submit PRs** - Fork, create a branch, and submit a pull request

**Development Setup:**
```bash
git clone https://github.com/stefanoBid/sb-nuxt-template.git
cd sb-nuxt-template
npm install
npm run dev
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use it for personal or commercial projects.

---

## 👤 Author

**Stefano Biddau**  
📧 Email: biddau.stefano99@gmail.com  
🐙 GitHub: [@stefanoBid](https://github.com/stefanoBid)

---

## 🌟 Show Your Support

If this template helped you build faster, give it a ⭐️ on GitHub!

Your support motivates me to maintain and improve this project.

---

## 📚 Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [VueUse Documentation](https://vueuse.org/)
- [Nuxt i18n Documentation](https://i18n.nuxtjs.org/)

---

<div align="center">
  
**Happy coding! 🚀**

Built with ❤️ by developers, for developers.

</div>
