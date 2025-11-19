<script setup lang="ts">
// State

const routes = computed(() => [

] as Array<RouteItem>)

const langs = [
  { code: 'en', label: 'English', icon: 'circle-flags:en' },
  { code: 'it', label: 'Italiano', icon: 'circle-flags:it' },
] as Array<LangItem>

// Events

const onChangeLang = (langCode: string) => {
  // setLocale(langCode as 'en' | 'it')
  console.log('Change lang to:', langCode)
}
</script>

<template>
  <div>
    <TheHeader
      :langs="langs"
      :routes="routes"
      :selected-lang-id="'it'"
      @change-lang="langCode => onChangeLang(langCode)"
    />
    <main class="pt-16 px-6 md:px-10">
      <div class="w-full max-w-[1400px] mx-auto u-app-soft-transition">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
