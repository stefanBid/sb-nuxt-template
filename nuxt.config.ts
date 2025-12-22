// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // Nuxt modules to extend the framework functionality
  // @nuxt/eslint: Code linting and formatting
  // @nuxt/icon: Icon management system
  // @nuxt/image: Image optimization and lazy loading
  // @vueuse/nuxt: Collection of Vue composition utilities
  // @nuxtjs/i18n: Internationalization support
  // @nuxtjs/color-mode: Dark/light theme management
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/color-mode', '@vueuse/nuxt'],

  // Enable Server-Side Rendering for better SEO and initial page load
  ssr: true,

  // Enable dev tools only in development mode for debugging and performance monitoring
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  // App-level configuration for HTML head and global settings
  // App-level configuration for HTML head and global settings
  app: {
    // HTML head configuration - applies to all pages unless overridden
    head: {
      meta: [
        // Mobile responsiveness - ensures proper scaling on mobile devices
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // Disabled automatic detection of possible phone numbers on iOS devices
        { name: 'format-detection', content: 'telephone=no' },

        // Browser bar color on mobile devices - customize to match your brand
        { name: 'theme-color', content: '#0f0f20' },

        // Global Open Graph tags for social media sharing (Facebook, LinkedIn, etc.)
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Your Site Name' }, // Replace with your actual site name
        { property: 'og:image', content: 'https://yourdomain.com/og-image.jpg' }, // Replace with your default social sharing image URL (1200x630px recommended)

        // Global Twitter card tags for Twitter/X sharing
        { name: 'twitter:card', content: 'summary' }, // Use 'summary_large_image' for larger preview cards
        { name: 'twitter:image', content: 'https://yourdomain.com/twitter-image.jpg' }, // Replace with your Twitter card image URL
      ],
      link: [
        // Global favicon - the small icon shown in browser tabs
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // Import global CSS files - order matters for cascade
  css: ['./app/assets/css/main.css'],

  // Runtime configuration - environment variables accessible in the app
  // Access these in your app with: const config = useRuntimeConfig()
  runtimeConfig: {
    public: {
      // Public variables accessible on both server and client
      // Examples of common environment variables:
      // apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:3000/api',
      // strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
      // cloudinaryBase: process.env.NUXT_PUBLIC_CLOUDINARY_BASE || 'https://res.cloudinary.com/your-cloud-name',
      // googleAnalyticsId: process.env.NUXT_PUBLIC_GA_ID || '',
      // Add your public environment variables here
    },
  },

  // Route-specific rendering rules for optimization
  routeRules: {
    // English routes
    '/': { prerender: true }, // Generate static HTML at build time for homepage

    // Italian routes
    '/it': { prerender: true }, // Generate static HTML at build time for Italian homepage
  },

  // Source map generation for debugging - disabled in production for security
  sourcemap: {
    client: false, // Disable client-side source maps
    server: false, // Disable server-side source maps
  },

  // Nuxt compatibility date - locks behavior to specific Nuxt version features
  compatibilityDate: '2025-07-15',

  // Nitro server configuration - the server engine that powers Nuxt
  nitro: {
    // Deployment preset - optimized for Netlify hosting
    preset: 'netlify',

    // External dependencies configuration
    externals: {
      // Exclude isomorphic-dompurify from server bundle to avoid jsdom issues
      // This library is used client-side only for HTML sanitization
      external: ['isomorphic-dompurify'],
    },
  },

  // Vite configuration - the build tool used by Nuxt
  vite: {
    plugins: [tailwindcss()], // Add Tailwind CSS as a Vite plugin for styling
  },

  // ESLint configuration for code quality and consistency
  eslint: {
    config: {
      stylistic: true, // Enable stylistic rules for code formatting

    },
  },

  // Internationalization (i18n) configuration for multi-language support
  i18n: {
    baseUrl: 'https://www.yoursite.com', // Replace with your production domain (e.g., 'https://www.example.com')
    strategy: 'prefix_except_default', // URL strategy: default locale at /page, others at /it/page, /es/page, etc.
    defaultLocale: 'en', // Default language - used when no locale is specified

    // Available languages configuration
    locales: [
      { code: 'en', iso: 'en-US', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'it', iso: 'it-IT', language: 'it-IT', name: 'Italiano', file: 'it.json' },
    ],
    langDir: 'locales/', // Directory containing translation files
    detectBrowserLanguage: false, // Disable automatic language detection from browser settings
  },

  // Icon configuration using Nuxt Icon module
  icon: {
    mode: 'svg', // Use SVG format for icons (better quality and smaller size)
    serverBundle: 'local', // Bundle icons locally on the server
    fallbackToApi: false, // Don't fetch icons from external API if not found locally
    clientBundle: {
      scan: true, // Automatically scan and include used icons
      includeCustomCollections: true, // Allow custom icon collections
      sizeLimitKb: 256, // Maximum bundle size for icons (in kilobytes)
    },
  },

  // Image optimization configuration using Nuxt Image module
  image: {
    provider: 'ipx', // Default provider for local image optimization
    providers: {
      // Cloudinary provider for cloud-based image hosting and optimization
      // Example: Use 'cloudinary' as provider in NuxtImg component
      cloudinary: {
        name: 'cloudinary',
        options: {
          // Example: 'https://res.cloudinary.com/your-cloud-name'
          baseURL: process.env.NUXT_PUBLIC_CLOUDINARY_BASE,
        },
      },
    },
    domains: [
      // Whitelist of external domains allowed for image optimization
      // Add domains where your images are hosted (e.g., CMS, CDN, external APIs)
      // Example: 'https://api.example.com', 'https://cdn.yoursite.com'
      // process.env.NUXT_PUBLIC_STRAPI_URL || '',
    ],
    quality: 80, // Default image quality (0-100) - 80 is a good balance between quality and file size
    format: ['webp', 'avif', 'png'], // Supported image formats in order of preference (webp and avif are modern, efficient formats)
    screens: { 'sm': 640, 'md': 768, 'lg': 1024, 'xl': 1280, '2xl': 1536 }, // Responsive breakpoints for image sizes
  },
})
