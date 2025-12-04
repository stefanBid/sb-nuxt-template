<script setup lang="ts">
// Dependencies
const { t } = useI18n()
const route = useRoute()

useSeoMeta({
  // LOCALIZED
  title: () => t('meta.home.title'),
  description: () => t('meta.home.description'),
  ogTitle: () => t('meta.home.title'),
  ogDescription: () => t('meta.home.description'),
  twitterTitle: () => t('meta.home.title'),
  twitterDescription: () => t('meta.home.description'),

  // DYNAMIC BUT NOT TIED TO CONTENT LANGUAGE
  ogUrl: () => `http://localhost:3000${route.fullPath}`,
})
</script>

<template>
  <div class="min-h-screen bg-app-main text-app-contrast py-20">
    <div class="space-y-16">
      <!-- Typography Section -->
      <section class="space-y-8">
        <h2 class="ty-app-title-xl text-app-accent mb-8">
          Typography
        </h2>

        <div class="space-y-6">
          <div class="p-6 bg-app-surface rounded-lg border border-app-border">
            <p class="ty-app-caption text-app-accent mb-2">
              Hero Text
            </p>
            <h1 class="ty-app-hero text-app-contrast">
              HERO
            </h1>
          </div>

          <div class="p-6 bg-app-surface rounded-lg border border-app-border">
            <p class="ty-app-caption text-app-accent mb-2">
              Impact Text
            </p>
            <h2 class="ty-app-impact text-app-contrast">
              IMPACT
            </h2>
          </div>

          <div class="p-6 bg-app-surface rounded-lg border border-app-border">
            <p class="ty-app-caption text-app-accent mb-2">
              Title XL
            </p>
            <h3 class="ty-app-title-xl text-app-contrast">
              Title Extra Large
            </h3>
          </div>

          <div class="p-6 bg-app-surface rounded-lg border border-app-border">
            <p class="ty-app-caption text-app-accent mb-2">
              Title LG
            </p>
            <h4 class="ty-app-title-lg text-app-contrast">
              Title Large
            </h4>
          </div>

          <div class="p-6 bg-app-surface rounded-lg border border-app-border">
            <p class="ty-app-caption text-app-accent mb-2">
              Title
            </p>
            <h5 class="ty-app-title text-app-contrast">
              Title Standard
            </h5>
          </div>

          <div class="p-6 bg-app-surface rounded-lg border border-app-border">
            <p class="ty-app-caption text-app-accent mb-2">
              Subtitle XL
            </p>
            <p class="ty-app-subtitle-xl text-app-contrast">
              Subtitle Extra Large
            </p>
          </div>

          <div class="p-6 bg-app-surface rounded-lg border border-app-border">
            <p class="ty-app-caption text-app-accent mb-2">
              Subtitle LG
            </p>
            <p class="ty-app-subtitle-lg text-app-contrast">
              Subtitle Large
            </p>
          </div>

          <div class="p-6 bg-app-surface rounded-lg border border-app-border">
            <p class="ty-app-caption text-app-accent mb-2">
              Subtitle
            </p>
            <p class="ty-app-subtitle text-app-contrast">
              Subtitle Standard
            </p>
          </div>

          <div class="p-6 bg-app-surface rounded-lg border border-app-border">
            <p class="ty-app-caption text-app-accent mb-2">
              Paragraph
            </p>
            <p class="ty-app-paragraph text-app-contrast">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div class="p-6 bg-app-surface rounded-lg border border-app-border">
            <p class="ty-app-caption text-app-accent mb-2">
              Label
            </p>
            <span class="ty-app-label text-app-contrast">Label Text</span>
          </div>

          <div class="p-6 bg-app-surface rounded-lg border border-app-border">
            <p class="ty-app-caption text-app-accent mb-2">
              Caption
            </p>
            <span class="ty-app-caption text-app-contrast">Caption text in italic style</span>
          </div>
        </div>
      </section>

      <!-- Cards Section -->
      <section class="space-y-8">
        <h2 class="ty-app-title-xl text-app-accent mb-8">
          Cards
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card 1 - Simple -->
          <div class="p-6 bg-app-surface rounded-lg border border-app-border hover:border-app-accent transition-colors">
            <h3 class="ty-app-title text-app-contrast mb-3">
              Simple Card
            </h3>
            <p class="ty-app-paragraph text-app-muted">
              A basic card with border and hover effect.
            </p>
          </div>

          <!-- Card 2 - With Image -->
          <div class="bg-app-surface rounded-lg border border-app-border overflow-hidden hover:border-app-accent transition-colors">
            <div class="h-40 bg-linear-to-br from-app-accent to-purple-600"></div>
            <div class="p-6">
              <h3 class="ty-app-title text-app-contrast mb-3">
                Card with Image
              </h3>
              <p class="ty-app-paragraph text-app-muted">
                Card with image area at the top.
              </p>
            </div>
          </div>

          <!-- Card 3 - With Badge -->
          <div class="p-6 bg-app-surface rounded-lg border border-app-border hover:border-app-accent transition-colors relative">
            <span class="ty-app-label text-app-accent absolute top-4 right-4 bg-app-accent/20 px-3 py-1 rounded-full">
              NEW
            </span>
            <h3 class="ty-app-title text-app-contrast mb-3">
              Card with Badge
            </h3>
            <p class="ty-app-paragraph text-app-muted">
              Card with corner badge.
            </p>
          </div>

          <!-- Card 4 - With Icon -->
          <div class="p-6 bg-app-surface rounded-lg border border-app-border hover:border-app-accent transition-colors">
            <div class="w-12 h-12 bg-app-accent/20 rounded-lg flex items-center justify-center mb-4">
              <span class="ty-app-title text-app-accent">★</span>
            </div>
            <h3 class="ty-app-title text-app-contrast mb-3">
              Card with Icon
            </h3>
            <p class="ty-app-paragraph text-app-muted">
              Card with decorative icon.
            </p>
          </div>

          <!-- Card 5 - Featured -->
          <div class="p-6 bg-linear-to-br from-app-accent/20 to-purple-600/20 rounded-lg border-2 border-app-accent">
            <span class="ty-app-label text-app-accent mb-2 block">FEATURED</span>
            <h3 class="ty-app-title text-app-contrast mb-3">
              Featured Card
            </h3>
            <p class="ty-app-paragraph text-app-muted">
              Card with highlighted style.
            </p>
          </div>

          <!-- Card 6 - Interactive -->
          <div class="p-6 bg-app-surface rounded-lg border border-app-border hover:bg-app-surface-2 hover:border-app-accent transition-all cursor-pointer transform hover:scale-105">
            <h3 class="ty-app-title text-app-contrast mb-3">
              Interactive Card
            </h3>
            <p class="ty-app-paragraph text-app-muted">
              Card with full hover effect.
            </p>
          </div>
        </div>
      </section>

      <!-- Inputs Section -->
      <section class="space-y-8">
        <h2 class="ty-app-title-xl text-app-accent mb-8">
          Input Fields
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <!-- Text Input -->
          <div class="space-y-2">
            <label class="ty-app-label text-app-contrast block">Text Input</label>
            <input
              class="w-full px-4 py-3 bg-app-surface border border-app-border rounded-lg text-app-contrast ty-app-paragraph focus:border-app-accent focus:outline-none transition-colors"
              placeholder="Enter text..."
              type="text"
            />
          </div>

          <!-- Email Input -->
          <div class="space-y-2">
            <label class="ty-app-label text-app-contrast block">Email Input</label>
            <input
              class="w-full px-4 py-3 bg-app-surface border border-app-border rounded-lg text-app-contrast ty-app-paragraph focus:border-app-accent focus:outline-none transition-colors"
              placeholder="email@example.com"
              type="email"
            />
          </div>

          <!-- Password Input -->
          <div class="space-y-2">
            <label class="ty-app-label text-app-contrast block">Password Input</label>
            <input
              class="w-full px-4 py-3 bg-app-surface border border-app-border rounded-lg text-app-contrast ty-app-paragraph focus:border-app-accent focus:outline-none transition-colors"
              placeholder="••••••••"
              type="password"
            />
          </div>

          <!-- Number Input -->
          <div class="space-y-2">
            <label class="ty-app-label text-app-contrast block">Number Input</label>
            <input
              class="w-full px-4 py-3 bg-app-surface border border-app-border rounded-lg text-app-contrast ty-app-paragraph focus:border-app-accent focus:outline-none transition-colors"
              placeholder="123"
              type="number"
            />
          </div>

          <!-- Select -->
          <div class="space-y-2">
            <label class="ty-app-label text-app-contrast block">Select</label>
            <select class="w-full px-4 py-3 bg-app-surface border border-app-border rounded-lg text-app-contrast ty-app-paragraph focus:border-app-accent focus:outline-none transition-colors">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <!-- Textarea -->
          <div class="space-y-2 md:col-span-2">
            <label class="ty-app-label text-app-contrast block">Textarea</label>
            <textarea
              class="w-full px-4 py-3 bg-app-surface border border-app-border rounded-lg text-app-contrast ty-app-paragraph focus:border-app-accent focus:outline-none transition-colors resize-none"
              placeholder="Enter your message..."
              rows="4"
            ></textarea>
          </div>

          <!-- Checkbox -->
          <div class="space-y-2">
            <label class="flex items-center gap-3 cursor-pointer">
              <input
                class="w-5 h-5 bg-app-surface border border-app-border rounded text-app-accent focus:ring-app-accent focus:ring-2"
                type="checkbox"
              />
              <span class="ty-app-paragraph text-app-contrast">Checkbox Option</span>
            </label>
          </div>

          <!-- Radio -->
          <div class="space-y-2">
            <label class="ty-app-label text-app-contrast block mb-3">Radio Buttons</label>
            <div class="space-y-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input
                  class="w-5 h-5 bg-app-surface border border-app-border text-app-accent focus:ring-app-accent focus:ring-2"
                  name="radio-group"
                  type="radio"
                />
                <span class="ty-app-paragraph text-app-contrast">Radio 1</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input
                  class="w-5 h-5 bg-app-surface border border-app-border text-app-accent focus:ring-app-accent focus:ring-2"
                  name="radio-group"
                  type="radio"
                />
                <span class="ty-app-paragraph text-app-contrast">Radio 2</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- Buttons Section -->
      <section class="space-y-8 pb-16">
        <h2 class="ty-app-title-xl text-app-accent mb-8">
          Buttons
        </h2>

        <div class="space-y-8">
          <!-- Primary Buttons -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              Primary Buttons
            </h3>
            <div class="flex flex-wrap gap-4">
              <button class="ty-app-btn-label px-6 py-3 bg-app-accent text-white rounded-lg hover:bg-app-accent-hover transition-colors">
                Primary Button
              </button>
              <button class="ty-app-btn-label px-6 py-3 bg-app-accent text-white rounded-lg hover:bg-app-accent-hover transition-colors opacity-50 cursor-not-allowed">
                Disabled
              </button>
              <button class="ty-app-btn-label px-8 py-4 bg-app-accent text-white rounded-lg hover:bg-app-accent-hover transition-colors">
                Large Button
              </button>
              <button class="ty-app-btn-label px-4 py-2 bg-app-accent text-white rounded-lg hover:bg-app-accent-hover transition-colors text-sm">
                Small Button
              </button>
            </div>
          </div>

          <!-- Outline Buttons -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              Outline Buttons
            </h3>
            <div class="flex flex-wrap gap-4">
              <button class="ty-app-btn-label px-6 py-3 bg-transparent border-2 border-app-accent text-app-accent rounded-lg hover:bg-app-accent hover:text-white transition-colors">
                Outline Button
              </button>
              <button class="ty-app-btn-label px-6 py-3 bg-transparent border-2 border-app-contrast text-app-contrast rounded-lg hover:bg-app-contrast hover:text-white transition-colors">
                Dark Outline
              </button>
              <button class="ty-app-btn-label px-6 py-3 bg-transparent border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
                Purple Outline
              </button>
            </div>
          </div>

          <!-- Ghost Buttons -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              Ghost Buttons
            </h3>
            <div class="flex flex-wrap gap-4">
              <button class="ty-app-btn-label px-6 py-3 bg-transparent text-app-accent rounded-lg hover:bg-app-accent/10 transition-colors">
                Ghost Button
              </button>
              <button class="ty-app-btn-label px-6 py-3 bg-transparent text-app-contrast rounded-lg hover:bg-app-surface-2 transition-colors">
                Ghost Dark
              </button>
            </div>
          </div>

          <!-- Gradient Buttons -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              Gradient Buttons
            </h3>
            <div class="flex flex-wrap gap-4">
              <button class="ty-app-btn-label px-6 py-3 bg-linear-to-r from-app-accent to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                Gradient Button
              </button>
              <button class="ty-app-btn-label px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                Blue to Purple
              </button>
            </div>
          </div>

          <!-- Icon Buttons -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              Icon Buttons
            </h3>
            <div class="flex flex-wrap gap-4 items-center">
              <button class="ty-app-btn-label px-6 py-3 bg-app-accent text-white rounded-lg hover:bg-app-accent-hover transition-colors flex items-center gap-2">
                <span>→</span>
                With Icon
              </button>
              <button class="w-12 h-12 bg-app-accent text-white rounded-lg hover:bg-app-accent-hover transition-colors flex items-center justify-center text-xl">
                +
              </button>
              <button class="w-12 h-12 bg-app-surface border border-app-border text-app-contrast rounded-full hover:border-app-accent transition-colors flex items-center justify-center">
                ★
              </button>
            </div>
          </div>

          <!-- Rounded Buttons -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              Rounded Buttons
            </h3>
            <div class="flex flex-wrap gap-4">
              <button class="ty-app-btn-label px-8 py-3 bg-app-accent text-white rounded-full hover:bg-app-accent-hover transition-colors">
                Rounded Button
              </button>
              <button class="ty-app-btn-label px-8 py-3 bg-transparent border-2 border-app-accent text-app-accent rounded-full hover:bg-app-accent hover:text-white transition-colors">
                Rounded Outline
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
