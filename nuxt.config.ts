// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // Core modules
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],

  devtools: { enabled: true },

  // Global styles
  css: ['./app/assets/css/main.css'],

  // Disable sourcemaps in production
  sourcemap: {
    client: false,
    server: false,
  },

  compatibilityDate: '2025-07-15',

  // Server deployment preset
  nitro: {
    preset: 'netlify',
    // Exclude isomorphic-dompurify from server bundle to avoid jsdom issues
    externals: {
      external: ['isomorphic-dompurify'],
    },
  },

  // Vite configuration
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // ESLint with stylistic rules
  eslint: {
    config: {
      stylistic: true,
    },
  },

  // Internationalization (i18n)
  i18n: {
    baseUrl: 'http://localhost:3000/',
    strategy: 'prefix_except_default', // URLs: /en/about, /about (default)
    defaultLocale: 'en',

    locales: [
      { code: 'en', iso: 'en-US', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'it', iso: 'it-IT', language: 'it-IT', name: 'Italiano', file: 'it.json' },
    ],
    langDir: 'locales/',

    // Auto-detect browser language
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  // Icon configuration (CSS mode)
  icon: {
    mode: 'css',
    cssLayer: 'base',
  },

  // Image optimization
  image: {
    provider: process.env.NETLIFY ? 'netlify' : 'ipx', // Auto-switch provider based on environment
    providers: {
      cloudinary: {
        name: 'cloudinary',
        options: {
          baseURL: process.env.NUXT_PUBLIC_CLOUDINARY_BASE,
        },
      },
    },
    quality: 80,
    format: ['webp', 'avif', 'png'],
    screens: { 'sm': 640, 'md': 768, 'lg': 1024, 'xl': 1280, '2xl': 1536 }, // Tailwind breakpoints
  },
})
