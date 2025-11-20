<script setup lang="ts">
const i18nHead = useLocaleHead({
  dir: true,
  seo: true,
})

useHead(() => ({
  htmlAttrs: i18nHead.value.htmlAttrs,
  meta: i18nHead.value.meta,
  link: i18nHead.value.link,
  titleTemplate: '%s -  Your Website',
}))

const { t, setLocale, locale } = useI18n()
const localePath = useLocalePath()
// State

const routes = computed(() => [
  { name: t('nav.home'), path: localePath('index') },
] as Array<RouteItem>)

const langs = [
  { code: 'en', label: 'English', icon: 'circle-flags:en' },
  { code: 'it', label: 'Italiano', icon: 'circle-flags:it' },
] as Array<MenuItem>

// Events

const onChangeLang = (langCode: string) => {
  setLocale(langCode as 'en' | 'it')
}
</script>

<template>
  <div>
    <TheHeader
      :langs="langs"
      :routes="routes"
      :selected-lang-id="locale"
      @change-lang="langCode => onChangeLang(langCode)"
    />
    <main class="pt-16 px-6 md:px-10">
      <div class="w-full max-w-[1400px] mx-auto u-app-soft-transition">
        <slot></slot>
      </div>
    </main>
    <TheFooter
      email="your.email@example.com"
      github-url="https://github.com/stefanBid"
      instagram-url="https://www.instagram.com/stefano_bid/"
      linkedin-url="https://www.linkedin.com/in/stefano-biddau/"
      phone="+39 123 456 7890"
      :quick-links="routes"
    />
  </div>
</template>
