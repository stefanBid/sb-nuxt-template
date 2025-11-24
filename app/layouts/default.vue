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
const { notifications, removeNotification, info } = useAppNotifications()

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

const onCloseNotification = (id: string) => {
  removeNotification(id)
}

onMounted(() => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }
  nextTick(() => {
    info({
      title: `🚀 Notification Title`,
      message: `This is an informational notification to welcome users to the website.`,
      autoClose: true,
      dismissible: true,
      duration: 10000,
    })
  })
})
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
    <ClientOnly>
      <TheNotificationBox>
        <transition-group class="flex flex-col gap-3" name="slide-down" tag="div">
          <TheNotificationBanner
            v-for="notification in notifications"
            :key="notification.id"
            :auto-close="notification.autoClose"
            :dismissible="notification.dismissible"
            :duration="notification.duration"
            :icon="notification.icon"
            :message="notification.message"
            :title="notification.title"
            :type="notification.type"
            @close="onCloseNotification(notification.id)"
          />
        </transition-group>
      </TheNotificationBox>
    </ClientOnly>
  </div>
</template>
