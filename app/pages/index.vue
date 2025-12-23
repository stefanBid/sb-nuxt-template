<script setup lang="ts">
// Dependencies
const { t } = useI18n()
const route = useRoute()

// State for dialogs
const isSimpleDialogOpen = ref(false)
const isMediumDialogOpen = ref(false)
const isLargeDialogOpen = ref(false)
const isHeaderDialogOpen = ref(false)
const isFooterDialogOpen = ref(false)
const isConfirmDialogOpen = ref(false)

// State for inputs
const textInput = ref('')
const emailInput = ref('')
const passwordInput = ref('')
const numberInput = ref('')
const textareaInput = ref('')
const checkboxInput = ref(false)
const comboboxInput = ref<string[]>([])
const multiComboboxInput = ref<string[]>([])

const comboboxItems = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
]

// Handlers for chip interactions
const handleChipClick = (chipName: string) => {
  // eslint-disable-next-line no-console
  console.log(`${chipName} clicked!`)
}

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
          <!-- Card 1 - Simple Dark -->
          <BaseCard
            :paragraph="t('pages.home.cards.simple-dark.paragraph')"
            :subtitle="t('pages.home.cards.simple-dark.subtitle')"
            :title="t('pages.home.cards.simple-dark.title')"
            variant="dark"
          />

          <!-- Card 2 - Simple Light -->
          <BaseCard
            :paragraph="t('pages.home.cards.simple-light.paragraph')"
            :title="t('pages.home.cards.simple-light.title')"
            variant="light"
          />

          <!-- Card 3 - Dark Hover -->
          <BaseCard
            :paragraph="t('pages.home.cards.dark-hover.paragraph')"
            :subtitle="t('pages.home.cards.dark-hover.subtitle')"
            :title="t('pages.home.cards.dark-hover.title')"
            variant="dark-hover"
          />

          <!-- Card 4 - Light Hover -->
          <BaseCard
            :paragraph="t('pages.home.cards.light-hover.paragraph')"
            :title="t('pages.home.cards.light-hover.title')"
            variant="light-hover"
          />

          <!-- Card 5 - With Header Icon -->
          <BaseCard
            :paragraph="t('pages.home.cards.with-icon.paragraph')"
            :subtitle="t('pages.home.cards.with-icon.subtitle')"
            :title="t('pages.home.cards.with-icon.title')"
            variant="dark"
          >
            <template #card-header>
              <div class="w-12 h-12 bg-app-accent/20 rounded-lg flex items-center justify-center">
                <Icon class="size-6 text-app-accent" name="lucide:star" />
              </div>
            </template>
          </BaseCard>

          <!-- Card 6 - With Footer Button -->
          <BaseCard
            :paragraph="t('pages.home.cards.with-action.paragraph')"
            :subtitle="t('pages.home.cards.with-action.subtitle')"
            :title="t('pages.home.cards.with-action.title')"
            variant="light-hover"
          >
            <template #card-footer>
              <BaseButton variant="primary">
                <Icon class="size-5 mr-2" name="lucide:arrow-right" />
                {{ t('pages.home.cards.with-action.button') }}
              </BaseButton>
            </template>
          </BaseCard>

          <!-- Card 7 - Center Aligned -->
          <BaseCard
            align="center"
            :paragraph="t('pages.home.cards.center-aligned.paragraph')"
            :subtitle="t('pages.home.cards.center-aligned.subtitle')"
            :title="t('pages.home.cards.center-aligned.title')"
            variant="dark"
          />

          <!-- Card 8 - Right Aligned -->
          <BaseCard
            align="right"
            :paragraph="t('pages.home.cards.right-aligned.paragraph')"
            :subtitle="t('pages.home.cards.right-aligned.subtitle')"
            :title="t('pages.home.cards.right-aligned.title')"
            variant="light"
          />

          <!-- Card 9 - Complete Example -->
          <BaseCard
            align="left"
            :paragraph="t('pages.home.cards.complete.paragraph')"
            :subtitle="t('pages.home.cards.complete.subtitle')"
            :title="t('pages.home.cards.complete.title')"
            variant="dark-hover"
          >
            <template #card-header>
              <div class="w-12 h-12 bg-app-accent/20 rounded-lg flex items-center justify-center">
                <Icon class="size-6 text-app-accent" name="lucide:zap" />
              </div>
            </template>
            <template #card-footer>
              <BaseButton variant="outline">
                {{ t('pages.home.cards.complete.button') }}
              </BaseButton>
            </template>
          </BaseCard>

          <!-- Card 10 - Full Custom Content -->
          <BaseCard :full-custom-content="true" variant="dark">
            <div class="text-center space-y-4">
              <div class="w-16 h-16 bg-app-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Icon class="size-8 text-app-accent" name="lucide:heart" />
              </div>
              <h3 class="ty-app-title">
                {{ t('pages.home.cards.full-custom.title') }}
              </h3>
              <p class="ty-app-paragraph text-app-muted">
                {{ t('pages.home.cards.full-custom.paragraph') }}
              </p>
              <div class="flex gap-2 justify-center pt-4">
                <BaseButton variant="primary">
                  <Icon class="size-5 mr-2" name="lucide:thumbs-up" />
                  {{ t('pages.home.cards.full-custom.like-button') }}
                </BaseButton>
                <BaseButton variant="secondary">
                  <Icon class="size-5 mr-2" name="lucide:share-2" />
                  {{ t('pages.home.cards.full-custom.share-button') }}
                </BaseButton>
              </div>
            </div>
          </BaseCard>

          <!-- Card 11 - Multiple Buttons -->
          <BaseCard
            :paragraph="t('pages.home.cards.multi-action.paragraph')"
            :subtitle="t('pages.home.cards.multi-action.subtitle')"
            :title="t('pages.home.cards.multi-action.title')"
            variant="light-hover"
          >
            <template #card-footer>
              <div class="flex gap-2">
                <BaseButton variant="primary">
                  {{ t('pages.home.cards.multi-action.save-button') }}
                </BaseButton>
                <BaseButton variant="outline">
                  {{ t('pages.home.cards.multi-action.cancel-button') }}
                </BaseButton>
              </div>
            </template>
          </BaseCard>

          <!-- Card 12 - Loading State -->
          <BaseCard
            :paragraph="t('pages.home.cards.loading-state.paragraph')"
            :subtitle="t('pages.home.cards.loading-state.subtitle')"
            :title="t('pages.home.cards.loading-state.title')"
            variant="dark"
          >
            <template #card-footer>
              <BaseButton :is-loading="true" variant="primary">
                {{ t('pages.home.cards.loading-state.button') }}
              </BaseButton>
            </template>
          </BaseCard>
        </div>
      </section>

      <!-- Inputs Section -->
      <section class="space-y-8">
        <h2 class="ty-app-title-xl text-app-accent mb-8">
          {{ t('pages.home.inputs.section-title') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <!-- Text Input -->
          <BaseInput
            id="text-input"
            v-model:input="textInput"
            :hint="t('pages.home.inputs.text.hint')"
            :label="t('pages.home.inputs.text.label')"
            :placeholder="t('pages.home.inputs.text.placeholder')"
            type="text"
          />

          <!-- Email Input with Icon -->
          <BaseInput
            id="email-input"
            v-model:input="emailInput"
            :hint="t('pages.home.inputs.email.hint')"
            :label="t('pages.home.inputs.email.label')"
            :placeholder="t('pages.home.inputs.email.placeholder')"
            prefix-icon="lucide:mail"
            type="email"
          />

          <!-- Password Input with Icon -->
          <BaseInput
            id="password-input"
            v-model:input="passwordInput"
            :hint="t('pages.home.inputs.password.hint')"
            :label="t('pages.home.inputs.password.label')"
            :placeholder="t('pages.home.inputs.password.placeholder')"
            prefix-icon="lucide:lock"
            type="password"
          />

          <!-- Number Input with Icon -->
          <BaseInput
            id="number-input"
            v-model:input="numberInput"
            :hint="t('pages.home.inputs.number.hint')"
            :label="t('pages.home.inputs.number.label')"
            :placeholder="t('pages.home.inputs.number.placeholder')"
            prefix-icon="lucide:hash"
            type="number"
          />

          <!-- Single Select Combobox -->
          <BaseCombobox
            id="combobox-single"
            v-model:input="comboboxInput"
            :hint="t('pages.home.inputs.combobox.hint')"
            :items="comboboxItems"
            :label="t('pages.home.inputs.combobox.label')"
            :placeholder="t('pages.home.inputs.combobox.placeholder')"
            prefix-icon="lucide:list"
            type="single"
          />

          <!-- Multiple Select Combobox -->
          <BaseCombobox
            id="combobox-multiple"
            v-model:input="multiComboboxInput"
            :hint="t('pages.home.inputs.combobox-multiple.hint')"
            :items="comboboxItems"
            :label="t('pages.home.inputs.combobox-multiple.label')"
            :placeholder="t('pages.home.inputs.combobox-multiple.placeholder')"
            prefix-icon="lucide:list-checks"
            type="multiple"
          />

          <!-- Textarea -->
          <BaseTextarea
            id="textarea-input"
            v-model:input="textareaInput"
            class="md:col-span-2"
            :hint="t('pages.home.inputs.textarea.hint')"
            :label="t('pages.home.inputs.textarea.label')"
            :max-length="200"
            :placeholder="t('pages.home.inputs.textarea.placeholder')"
            :rows="4"
          />

          <!-- Checkbox -->
          <BaseCheckbox
            id="checkbox-input"
            v-model:input="checkboxInput"
            :label="t('pages.home.inputs.checkbox.label')"
          >
            {{ t('pages.home.inputs.checkbox.text') }}
          </BaseCheckbox>

          <!-- Input with Error -->
          <BaseInput
            id="error-input"
            :error="t('pages.home.inputs.error.message')"
            :label="t('pages.home.inputs.error.label')"
            :placeholder="t('pages.home.inputs.error.placeholder')"
            prefix-icon="lucide:alert-circle"
            type="text"
          />
        </div>
      </section>

      <!-- Chips Section -->
      <section class="space-y-8">
        <h2 class="ty-app-title-xl text-app-accent mb-8">
          {{ t('pages.home.chips.section-title') }}
        </h2>

        <div class="space-y-8 max-w-4xl">
          <!-- Accent Chips -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              {{ t('pages.home.chips.accent.title') }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <BaseChip
                :text="t('pages.home.chips.accent.simple')"
                variant="accent"
              />
              <BaseChip
                icon="lucide:star"
                :text="t('pages.home.chips.accent.with-icon')"
                variant="accent"
              />
              <BaseChip
                icon="lucide:zap"
                :text="t('pages.home.chips.accent.featured')"
                variant="accent"
              />
            </div>
          </div>

          <!-- Primary Chips -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              {{ t('pages.home.chips.primary.title') }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <BaseChip
                :text="t('pages.home.chips.primary.simple')"
                variant="primary"
              />
              <BaseChip
                icon="lucide:tag"
                :text="t('pages.home.chips.primary.with-icon')"
                variant="primary"
              />
              <BaseChip
                icon="lucide:bookmark"
                :text="t('pages.home.chips.primary.category')"
                variant="primary"
              />
            </div>
          </div>

          <!-- Secondary Chips -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              {{ t('pages.home.chips.secondary.title') }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <BaseChip
                :text="t('pages.home.chips.secondary.simple')"
                variant="secondary"
              />
              <BaseChip
                icon="lucide:info"
                :text="t('pages.home.chips.secondary.with-icon')"
                variant="secondary"
              />
              <BaseChip
                icon="lucide:clock"
                :text="t('pages.home.chips.secondary.status')"
                variant="secondary"
              />
            </div>
          </div>

          <!-- Use Cases Example -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              {{ t('pages.home.chips.use-cases.title') }}
            </h3>
            <div class="space-y-4">
              <!-- Tags -->
              <div class="p-4 bg-app-surface rounded-lg border border-app-border">
                <p class="ty-app-label text-app-muted mb-3">
                  {{ t('pages.home.chips.use-cases.tags-label') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <BaseChip icon="lucide:code" text="Vue.js" variant="accent" />
                  <BaseChip icon="lucide:code" text="Nuxt" variant="accent" />
                  <BaseChip icon="lucide:code" text="TypeScript" variant="accent" />
                  <BaseChip icon="lucide:code" text="Tailwind" variant="accent" />
                </div>
              </div>

              <!-- Status -->
              <div class="p-4 bg-app-surface rounded-lg border border-app-border">
                <p class="ty-app-label text-app-muted mb-3">
                  {{ t('pages.home.chips.use-cases.status-label') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <BaseChip icon="lucide:check-circle" :text="t('pages.home.chips.use-cases.active')" variant="accent" />
                  <BaseChip icon="lucide:clock" :text="t('pages.home.chips.use-cases.pending')" variant="secondary" />
                  <BaseChip icon="lucide:alert-circle" :text="t('pages.home.chips.use-cases.warning')" variant="primary" />
                </div>
              </div>

              <!-- Categories -->
              <div class="p-4 bg-app-surface rounded-lg border border-app-border">
                <p class="ty-app-label text-app-muted mb-3">
                  {{ t('pages.home.chips.use-cases.categories-label') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <BaseChip icon="lucide:folder" :text="t('pages.home.chips.use-cases.design')" variant="primary" />
                  <BaseChip icon="lucide:folder" :text="t('pages.home.chips.use-cases.development')" variant="primary" />
                  <BaseChip icon="lucide:folder" :text="t('pages.home.chips.use-cases.marketing')" variant="primary" />
                </div>
              </div>

              <!-- Interactive - Clickable -->
              <div class="p-4 bg-app-surface rounded-lg border border-app-border">
                <p class="ty-app-label text-app-muted mb-3">
                  Interactive - Clickable (button)
                </p>
                <div class="flex flex-wrap gap-2">
                  <BaseChip
                    :clickable="true"
                    text="Click me (Accent)"
                    variant="accent"
                    @chip-click="() => handleChipClick('Accent Chip')"
                  />
                  <BaseChip
                    :clickable="true"
                    icon="lucide:x"
                    text="Remove (Primary)"
                    variant="primary"
                    @chip-click="() => handleChipClick('Remove Chip')"
                  />
                  <BaseChip
                    :clickable="true"
                    icon="lucide:filter"
                    text="Filter (Secondary)"
                    variant="secondary"
                    @chip-click="() => handleChipClick('Filter Chip')"
                  />
                </div>
              </div>

              <!-- Interactive - Linkable -->
              <div class="p-4 bg-app-surface rounded-lg border border-app-border">
                <p class="ty-app-label text-app-muted mb-3">
                  Interactive - Linkable (anchor)
                </p>
                <div class="flex flex-wrap gap-2">
                  <BaseChip
                    icon="lucide:github"
                    :linkable="{
                      href: 'https://github.com',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }"
                    text="GitHub"
                    variant="primary"
                  />
                  <BaseChip
                    icon="lucide:external-link"
                    :linkable="{
                      href: 'https://nuxt.com',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }"
                    text="Documentation"
                    variant="accent"
                  />
                  <BaseChip
                    icon="lucide:mail"
                    :linkable="{
                      href: 'mailto:example@email.com',
                    }"
                    text="Email"
                    variant="secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Buttons Section -->
      <section class="space-y-8 pb-16">
        <h2 class="ty-app-title-xl text-app-accent mb-8">
          {{ t('pages.home.buttons.section-title') }}
        </h2>

        <div class="space-y-8">
          <!-- Primary Buttons -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              {{ t('pages.home.buttons.primary.title') }}
            </h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton variant="primary">
                {{ t('pages.home.buttons.primary.button') }}
              </BaseButton>
              <BaseButton :is-disabled="true" variant="primary">
                {{ t('pages.home.buttons.primary.disabled') }}
              </BaseButton>
              <BaseButton :is-loading="true" variant="primary">
                {{ t('pages.home.buttons.primary.loading') }}
              </BaseButton>
              <BaseButton type="submit" variant="primary">
                {{ t('pages.home.buttons.primary.submit') }}
              </BaseButton>
            </div>
          </div>

          <!-- Secondary Buttons -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              {{ t('pages.home.buttons.secondary.title') }}
            </h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton variant="secondary">
                {{ t('pages.home.buttons.secondary.button') }}
              </BaseButton>
              <BaseButton :is-disabled="true" variant="secondary">
                {{ t('pages.home.buttons.secondary.disabled') }}
              </BaseButton>
              <BaseButton :is-loading="true" variant="secondary">
                {{ t('pages.home.buttons.secondary.loading') }}
              </BaseButton>
            </div>
          </div>

          <!-- Outline Buttons -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              {{ t('pages.home.buttons.outline.title') }}
            </h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton variant="outline">
                {{ t('pages.home.buttons.outline.button') }}
              </BaseButton>
              <BaseButton :is-disabled="true" variant="outline">
                {{ t('pages.home.buttons.outline.disabled') }}
              </BaseButton>
              <BaseButton :is-loading="true" variant="outline">
                {{ t('pages.home.buttons.outline.loading') }}
              </BaseButton>
            </div>
          </div>

          <!-- Link Buttons -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              {{ t('pages.home.buttons.link.title') }}
            </h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton to="https://github.com" type="link" variant="primary">
                {{ t('pages.home.buttons.link.primary') }}
              </BaseButton>
              <BaseButton to="https://nuxt.com" type="link" variant="secondary">
                {{ t('pages.home.buttons.link.secondary') }}
              </BaseButton>
              <BaseButton to="https://tailwindcss.com" type="link" variant="outline">
                {{ t('pages.home.buttons.link.outline') }}
              </BaseButton>
            </div>
          </div>

          <!-- Buttons with Icons -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              {{ t('pages.home.buttons.with-icons.title') }}
            </h3>
            <div class="flex flex-wrap gap-4 items-center">
              <BaseButton variant="primary">
                <Icon class="size-5 mr-2" name="lucide:send" />
                {{ t('pages.home.buttons.with-icons.send') }}
              </BaseButton>
              <BaseButton variant="secondary">
                <Icon class="size-5 mr-2" name="lucide:download" />
                {{ t('pages.home.buttons.with-icons.download') }}
              </BaseButton>
              <BaseButton variant="outline">
                <Icon class="size-5 mr-2" name="lucide:heart" />
                {{ t('pages.home.buttons.with-icons.like') }}
              </BaseButton>
            </div>
          </div>

          <!-- All States Demo -->
          <div class="space-y-4">
            <h3 class="ty-app-subtitle text-app-contrast">
              {{ t('pages.home.buttons.states.title') }}
            </h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton variant="primary">
                {{ t('pages.home.buttons.states.normal') }}
              </BaseButton>
              <BaseButton :is-loading="true" variant="primary">
                {{ t('pages.home.buttons.states.loading') }}
              </BaseButton>
              <BaseButton :is-disabled="true" variant="primary">
                {{ t('pages.home.buttons.states.disabled') }}
              </BaseButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Dialogs Section -->
      <section class="space-y-8 pb-16">
        <h2 class="ty-app-title-xl text-app-accent mb-8">
          {{ t('pages.home.dialogs.section-title') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Simple Dialog (Small) -->
          <BaseCard
            :paragraph="t('pages.home.dialogs.simple.content')"
            :subtitle="t('pages.home.dialogs.simple.subtitle')"
            :title="t('pages.home.dialogs.simple.title')"
            variant="dark"
          >
            <template #card-footer>
              <BaseButton variant="primary" @click="isSimpleDialogOpen = true">
                {{ t('pages.home.dialogs.trigger-button') }}
              </BaseButton>
            </template>
          </BaseCard>

          <!-- Medium Dialog -->
          <BaseCard
            :paragraph="t('pages.home.dialogs.medium.content')"
            :subtitle="t('pages.home.dialogs.medium.subtitle')"
            :title="t('pages.home.dialogs.medium.title')"
            variant="light"
          >
            <template #card-footer>
              <BaseButton variant="secondary" @click="isMediumDialogOpen = true">
                {{ t('pages.home.dialogs.trigger-button') }}
              </BaseButton>
            </template>
          </BaseCard>

          <!-- Large Dialog -->
          <BaseCard
            :paragraph="t('pages.home.dialogs.large.content')"
            :subtitle="t('pages.home.dialogs.large.subtitle')"
            :title="t('pages.home.dialogs.large.title')"
            variant="dark-hover"
          >
            <template #card-footer>
              <BaseButton variant="outline" @click="isLargeDialogOpen = true">
                {{ t('pages.home.dialogs.trigger-button') }}
              </BaseButton>
            </template>
          </BaseCard>

          <!-- Dialog with Custom Header -->
          <BaseCard
            :paragraph="t('pages.home.dialogs.with-header.content')"
            :subtitle="t('pages.home.dialogs.with-header.subtitle')"
            :title="t('pages.home.dialogs.with-header.title')"
            variant="light-hover"
          >
            <template #card-footer>
              <BaseButton variant="primary" @click="isHeaderDialogOpen = true">
                {{ t('pages.home.dialogs.trigger-button') }}
              </BaseButton>
            </template>
          </BaseCard>

          <!-- Dialog with Footer Actions -->
          <BaseCard
            :paragraph="t('pages.home.dialogs.with-footer.content')"
            :subtitle="t('pages.home.dialogs.with-footer.subtitle')"
            :title="t('pages.home.dialogs.with-footer.title')"
            variant="dark"
          >
            <template #card-footer>
              <BaseButton variant="secondary" @click="isFooterDialogOpen = true">
                {{ t('pages.home.dialogs.trigger-button') }}
              </BaseButton>
            </template>
          </BaseCard>

          <!-- Confirmation Dialog -->
          <BaseCard
            :paragraph="t('pages.home.dialogs.confirmation.content')"
            :subtitle="t('pages.home.dialogs.confirmation.subtitle')"
            :title="t('pages.home.dialogs.confirmation.title')"
            variant="light"
          >
            <template #card-footer>
              <BaseButton variant="outline" @click="isConfirmDialogOpen = true">
                {{ t('pages.home.dialogs.trigger-button') }}
              </BaseButton>
            </template>
          </BaseCard>
        </div>
      </section>
    </div>

    <!-- Dialog Components -->
    <BaseDialog
      :is-open="isSimpleDialogOpen"
      size="sm"
      :subtitle="t('pages.home.dialogs.simple.subtitle')"
      :title="t('pages.home.dialogs.simple.title')"
      @close="isSimpleDialogOpen = false"
    >
      <p>{{ t('pages.home.dialogs.simple.content') }}</p>
      <template #footer>
        <BaseButton variant="primary" @click="isSimpleDialogOpen = false">
          {{ t('pages.home.dialogs.simple.close-button') }}
        </BaseButton>
      </template>
    </BaseDialog>

    <BaseDialog
      :is-open="isMediumDialogOpen"
      size="md"
      :subtitle="t('pages.home.dialogs.medium.subtitle')"
      :title="t('pages.home.dialogs.medium.title')"
      @close="isMediumDialogOpen = false"
    >
      <p>{{ t('pages.home.dialogs.medium.content') }}</p>
      <template #footer>
        <BaseButton variant="secondary" @click="isMediumDialogOpen = false">
          {{ t('pages.home.dialogs.medium.close-button') }}
        </BaseButton>
      </template>
    </BaseDialog>

    <BaseDialog
      :is-open="isLargeDialogOpen"
      size="lg"
      :subtitle="t('pages.home.dialogs.large.subtitle')"
      :title="t('pages.home.dialogs.large.title')"
      @close="isLargeDialogOpen = false"
    >
      <p>{{ t('pages.home.dialogs.large.content') }}</p>
      <template #footer>
        <BaseButton variant="outline" @click="isLargeDialogOpen = false">
          {{ t('pages.home.dialogs.large.close-button') }}
        </BaseButton>
      </template>
    </BaseDialog>

    <BaseDialog
      :is-open="isHeaderDialogOpen"
      size="md"
      :subtitle="t('pages.home.dialogs.with-header.subtitle')"
      :title="t('pages.home.dialogs.with-header.title')"
      @close="isHeaderDialogOpen = false"
    >
      <template #header>
        <div class="p-4 bg-app-accent/10 rounded-lg border border-app-accent/20">
          <p class="ty-app-paragraph text-app-accent">
            <Icon class="size-5 inline-block mr-2" name="lucide:alert-circle" />
            {{ t('pages.home.dialogs.with-header.header-content') }}
          </p>
        </div>
      </template>
      <p>{{ t('pages.home.dialogs.with-header.content') }}</p>
      <template #footer>
        <BaseButton variant="primary" @click="isHeaderDialogOpen = false">
          {{ t('pages.home.dialogs.with-header.close-button') }}
        </BaseButton>
      </template>
    </BaseDialog>

    <BaseDialog
      :is-open="isFooterDialogOpen"
      size="md"
      :subtitle="t('pages.home.dialogs.with-footer.subtitle')"
      :title="t('pages.home.dialogs.with-footer.title')"
      @close="isFooterDialogOpen = false"
    >
      <p>{{ t('pages.home.dialogs.with-footer.content') }}</p>
      <template #footer>
        <BaseButton variant="outline" @click="isFooterDialogOpen = false">
          {{ t('pages.home.dialogs.with-footer.cancel-button') }}
        </BaseButton>
        <BaseButton variant="primary" @click="isFooterDialogOpen = false">
          {{ t('pages.home.dialogs.with-footer.save-button') }}
        </BaseButton>
      </template>
    </BaseDialog>

    <BaseDialog
      :is-open="isConfirmDialogOpen"
      size="sm"
      :subtitle="t('pages.home.dialogs.confirmation.subtitle')"
      :title="t('pages.home.dialogs.confirmation.title')"
      @close="isConfirmDialogOpen = false"
    >
      <p>{{ t('pages.home.dialogs.confirmation.content') }}</p>
      <template #footer>
        <BaseButton variant="outline" @click="isConfirmDialogOpen = false">
          {{ t('pages.home.dialogs.confirmation.cancel-button') }}
        </BaseButton>
        <BaseButton variant="primary" @click="isConfirmDialogOpen = false">
          {{ t('pages.home.dialogs.confirmation.confirm-button') }}
        </BaseButton>
      </template>
    </BaseDialog>
  </div>
</template>
