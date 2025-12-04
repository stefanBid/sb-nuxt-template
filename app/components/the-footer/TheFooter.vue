<script setup lang="ts">
interface TheFooterProps {
  quickLinks?: Array<RouteItem>
  phone?: string
  email?: string
  githubUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
}

// Dependencies
const { t } = useI18n()
const localePath = useLocalePath()

// Input / Output
const props = withDefaults(defineProps<TheFooterProps>(), {
  quickLinks: () => [],
  phone: undefined,
  email: undefined,
  githubUrl: undefined,
  linkedinUrl: undefined,
  instagramUrl: undefined,
})
</script>

<template>
  <footer class="border-t border-app-border bg-app-main/95 text-app-contrast mt-16 px-6 md:px-10 u-app-soft-transition">
    <div
      class="max-w-[1400px] mx-auto grid gap-8 md:gap-10
             grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1.8fr)] items-start py-10 md:py-12 u-app-soft-transition"
    >
      <!-- 1) Logo + descrizione -->
      <section class="space-y-4">
        <NuxtLink
          class="inline-flex items-center gap-2 u-app-soft-transition u-app-focus rounded hover:opacity-90"
          :to="props.quickLinks[0]?.path || '/'"
        >
          <NuxtImg
            alt="Logo"
            class="object-contain size-7 sm:size-8 md:size-9 u-app-soft-transition"
            src="/logo.webp"
          />
          <span class="ty-app-title">
            Your Website
          </span>
        </NuxtLink>

        <p class="ty-app-label normal-case! text-app-muted max-w-md u-app-soft-transition">
          {{ t('footer.tagline') }}
        </p>
      </section>

      <!-- 2) Link veloci -->
      <section class="space-y-3">
        <h2 class="ty-app-label text-app-muted uppercase tracking-[0.22em] u-app-soft-transition">
          {{ t('footer.route-section') }}
        </h2>

        <nav class="flex flex-col gap-2">
          <template v-if="props.quickLinks.length">
            <template v-for="link in props.quickLinks" :key="link.path">
              <NuxtLink
                v-if="!link.disabled"
                class="w-fit ty-app-label normal-case! text-app-contrast/70 hover:text-app-contrast u-app-soft-transition u-app-focus rounded"
                :to="link.path"
              >
                {{ link.name }}
              </NuxtLink>
              <span
                v-else
                class="ty-app-label normal-case! text-app-contrast/40 cursor-not-allowed u-app-soft-transition"
              >
                {{ link.name }}
              </span>
            </template>
          </template>
          <p
            v-else
            class="ty-app-caption text-app-muted/70 u-app-soft-transition"
          >
            {{ t('footer.route-fallback') }}
          </p>
        </nav>
      </section>

      <!-- 3) Contact + Social -->
      <section class="space-y-4">
        <h2 class="ty-app-label text-app-muted uppercase tracking-[0.22em] u-app-soft-transition">
          {{ t('footer.contact-section') }}
        </h2>

        <div class="space-y-2">
          <span
            v-if="props.email"
            class="ty-app-label normal-case! text-app-contrast/85 u-app-soft-transition flex items-center"
          >
            <Icon class="size-4.5 inline-block shrink-0 mr-1.5 text-app-muted" name="mdi:email-edit-outline" />
            <a
              class="underline underline-offset-4 hover:text-app-accent u-app-soft-transition u-app-focus rounded"
              :href="`mailto:${props.email}`"
            >
              {{ props.email }}
            </a>
          </span>

          <span
            v-if="props.phone"
            class="ty-app-label normal-case! text-app-contrast/85 u-app-soft-transition flex items-center"
          >
            <Icon class="size-4.5 inline-block mr-1.5 shrink-0 text-app-muted" name="mdi:phone-classic" />
            <a
              class="underline underline-offset-4 hover:text-app-accent u-app-soft-transition u-app-focus rounded"
              :href="`tel:${props.phone}`"
            >
              {{ props.phone }}
            </a>
          </span>
        </div>

        <!-- Social badges -->
        <div class="flex flex-wrap items-center gap-3 mt-2">
          <a
            v-if="props.githubUrl"
            aria-label="Open GitHub profile"
            class="inline-flex items-center gap-2 rounded-xl bg-app-surface px-3 py-1.5 border border-app-border u-app-soft-transition u-app-focus hover:bg-app-surface-2"
            :href="githubUrl"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="inline-flex items-center justify-center p-0.5 border border-app-contrast/85 rounded">
              <Icon class="size-4 shrink-0" name="mdi:github" />
            </span>
            <span class="ty-app-caption text-app-contrast/85">
              GitHub
            </span>
          </a>

          <a
            v-if="props.linkedinUrl"
            aria-label="Open LinkedIn profile"
            class="inline-flex items-center gap-2 rounded-xl bg-app-surface px-3 py-1.5 border border-app-border u-app-soft-transition u-app-focus hover:bg-app-surface-2"
            :href="props.linkedinUrl"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="inline-flex items-center justify-center p-0.5 border border-app-contrast/85 rounded">
              <Icon class="size-4 shrink-0" name="mdi:linkedin" />
            </span>
            <span class="ty-app-caption text-app-contrast/85">
              LinkedIn
            </span>
          </a>

          <a
            v-if="props.instagramUrl"
            aria-label="Open Instagram profile"
            class="inline-flex items-center gap-2 rounded-xl bg-app-surface px-3 py-1.5 border border-app-border u-app-soft-transition u-app-focus hover:bg-app-surface-2"
            :href="props.instagramUrl"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="inline-flex items-center justify-center p-0.5 border border-app-contrast/85 rounded">
              <Icon class="size-4" name="mdi:instagram" />
            </span>
            <span class="ty-app-caption text-app-contrast/85">
              Instagram
            </span>
          </a>
        </div>
      </section>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-app-border bg-app-main/98 px-6 md:px-10 py-4 u-app-soft-transition">
      <div
        class="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 u-app-soft-transition"
      >
        <!-- Left side: credit + made with -->
        <div class="flex flex-col flex-1 items-center lg:items-start gap-1 ty-app-caption text-app-muted text-center lg:text-left u-app-soft-transition">
          <p>
            {{ t('footer.credit-section', { year: new Date().getFullYear() }) }}
          </p>

          <p class="text-app-muted/80">
            {{ t('footer.made-with') }}
          </p>
        </div>

        <!-- Right side: legal links -->
        <div class="flex flex-1 items-center justify-center lg:justify-end gap-4 ty-app-caption text-app-muted/80 not-italic text-center lg:text-right u-app-soft-transition">
          <!-- Privacy -->
          <NuxtLink
            class="hover:text-app-accent underline underline-offset-4 u-app-focus rounded w-fit u-app-soft-transition"
            :to="localePath('index')"
          >
            {{ t('nav.privacy-policy') }}
          </NuxtLink>

          <!-- Separator -->
          <span class="opacity-40 select-none">|</span>

          <!-- Terms -->
          <NuxtLink
            class="hover:text-app-accent underline underline-offset-4 u-app-focus rounded w-fit u-app-soft-transition"
            :to="localePath('index')"
          >
            {{ t('nav.terms-and-conditions') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
