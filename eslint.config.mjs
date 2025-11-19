// eslint.config.mjs
// @ts-check

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // ============================================================
  // 🔹 Ignored Paths
  // ============================================================
  ignores: [
    // Auto-generated / build folders
    '.nuxt',
    '.output',
    '.vercel',
    'dist',
    'node_modules',

    // Lock / config / logs
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '*.log',

    // Static assets
    'public/**',
    'static/**',

    // Local / IDE folders
    '.vscode/**',
    '.idea/**',
  ],

  // ============================================================
  // 🔹 File Patterns
  // ============================================================
  files: [
    '**/*.js',
    '**/*.ts',
    '**/*.vue',
    '**/*.mjs',
    '**/*.cjs',
  ],

  // ============================================================
  // 🔹 ESLint Rules
  // ============================================================
  rules: {
    // ------------------------------------------------------------
    // 🧩 Code Quality
    // ------------------------------------------------------------
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': 'error',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'eqeqeq': 'error',
    'curly': 'error',

    // ------------------------------------------------------------
    // 🎨 Style & Readability
    // ------------------------------------------------------------
    // Indentation handled by Vue (avoid conflicts)
    'indent': 'off',

    // Template indentation
    'vue/html-indent': ['warn', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
    }],

    // Script indentation (<script> / <script setup>)
    'vue/script-indent': ['warn', 2, {
      baseIndent: 0,
      switchCase: 1,
      ignores: [],
    }],

    // Arrow functions: no parentheses when single param
    'arrow-parens': 'off',

    // Object / array indentation consistency
    'object-curly-spacing': ['warn', 'always'],
    'object-curly-newline': ['warn', { multiline: true, consistent: true }],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'array-bracket-spacing': ['warn', 'never'],

    // Other spacing & punctuation
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'single', { allowTemplateLiterals: true }],
    'comma-dangle': ['warn', 'always-multiline'],
    'space-before-blocks': ['warn', 'always'],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'space-infix-ops': 'warn',
    'eol-last': ['error', 'always'],

    // ------------------------------------------------------------
    // 🧱 Vue Specific Formatting
    // ------------------------------------------------------------
    'vue/multi-word-component-names': 'off',

    'vue/first-attribute-linebreak': ['warn', {
      singleline: 'ignore',
      multiline: 'below',
    }],

    'vue/max-attributes-per-line': ['warn', {
      singleline: 3,
      multiline: 1,
    }],

    'vue/attributes-order': ['warn', { alphabetical: true }],

    'vue/html-self-closing': ['warn', {
      html: { void: 'always', normal: 'never', component: 'always' },
      svg: 'always',
      math: 'always',
    }],

    'vue/block-tag-newline': ['warn', {
      singleline: 'always',
      multiline: 'always',
      maxEmptyLines: 0,
    }],

    'vue/multiline-html-element-content-newline': ['warn', {
      ignoreWhenEmpty: true,
      allowEmptyLines: false,
    }],
  },
})
