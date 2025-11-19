<script setup lang="ts">
const i18nHead = useLocaleHead({
  dir: true,
  seo: true,
})

useHead(() => ({
  htmlAttrs: i18nHead.value.htmlAttrs,
  meta: i18nHead.value.meta,
  link: i18nHead.value.link,
  titleTemplate: '%s Full-Stack Developer & Web Designer',
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
  </div>
</template>
