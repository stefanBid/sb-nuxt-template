<script setup lang="ts">
interface TheHeaderProps {
  routes: Array<RouteItem>
  langs: Array<MenuItem>
  selectedLangId?: string | null
}

// Dependencies
const { lock, unlock } = useLockScroll()
const { t } = useI18n()

// Input / Output
const props = withDefaults(defineProps<TheHeaderProps>(), {
  selectedLangId: null,
})

// eslint-disable-next-line no-unused-vars
const emit = defineEmits<{ (e: 'change-lang', langCode: string): void }>()
// Dependencies
const open = useState('header-drawer-open', () => false)
const isMdUp = import.meta.client ? useMediaQuery('(min-width: 768px)') : ref(false)
const currentRoute = useRoute()

// Data

// Events
/** Only client: attach/detach listeners */
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    e.preventDefault()
    onClose()
  }
}

const onToggle = (newOpenValue: boolean) => {
  open.value = newOpenValue
  if (open.value) {
    lock()
  }
  else {
    unlock()
  }
}

const onClose = () => {
  open.value = false
  unlock()
}

const onSelectLang = (langCode: string) => {
  // Emit lang change
  emit('change-lang', langCode)
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', onKeydown)
  }
  unlock()
})

watch(isMdUp, (newVal) => {
  if (newVal && open.value) {
    onClose()
  }
})
</script>

<template>
  <div class="relative z-50">
    <!-- HEADER FIXED -->
    <header
      class="fixed top-0 inset-x-0 h-16 border-b border-app-border backdrop-blur px-6 md:px-10 u-app-soft-transition"
      :class="{
        'bg-app-main': open,
        'bg-app-main/80 supports-backdrop-filter:bg-app-main/60': !open,
      }"
    >
      <div class=" h-full flex items-center max-w-[1400px] mx-auto justify-between">
        <NuxtLink
          class="inline-flex items-center gap-2 ty-app-title tracking-tight hover:opacity-90 u-app-focus u-app-soft-transition rounded cursor-pointer"
          :to="props.routes[0]?.path || '/'"
        >
          <NuxtImg
            alt="Logo"
            class="object-contain size-8 sm:size-10 md:size-12 u-app-soft-transition ty-app-btn-label"
            src="/images/logo.webp"
          />
          Your Website
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="flex items-center">
          <nav class="hidden md:flex items-center gap-6 bg-app-surface rounded-xl px-4 py-2 border border-app-border">
            <template v-for="r in routes" :key="r.path">
              <NuxtLink
                v-if="!r.disabled"
                class="ty-app-btn-label normal-case! cursor-pointer u-app-soft-transition u-app-focus rounded"
                :class="{
                  'text-app-contrast/70 hover:text-app-contrast font-normal!': currentRoute.path !== r.path && !r.disabled,
                  'text-app-accent font-bold!': currentRoute.path === r.path && !r.disabled,
                  'opacity-50 cursor-not-allowed text-app-contrast/70': r.disabled,
                }"
                :to="r.path"
              >
                {{ r.name }}
              </NuxtLink>
              <span
                v-else
                class="ty-app-btn-label normal-case! font-normal! cursor-not-allowed opacity-50 text-app-contrast/70 u-app-soft-transition rounded"
              >
                {{ r.name }}
              </span>
            </template>
          </nav>
          <div class="ml-0 md:ml-4 hidden! md:inline-block!">
            <BaseIconMenu
              :icon="'solar:globus-bold-duotone'"
              :items="props.langs"
              :selected-item-id="props.selectedLangId"
              @select="itemId => onSelectLang(itemId)"
            />
          </div>
        </div>
        <!-- Mobile: hamburger -->
        <TheHeaderMenuToggle
          class="md:hidden"
          :open="open"
          @toggle="newOpenValue => onToggle(newOpenValue)"
        />
      </div>
    </header>
    <!-- OVERLAY + DRAWER -->
    <div class="md:hidden">
      <!-- overlay -->
      <div
        aria-hidden="true"
        class="fixed inset-0 top-16 bg-black/50 transition-opacity duration-200"
        :class="open ? 'opacity-100 pointer-events-auto' :'opacity-0 pointer-events-none'"
        @click.stop="onClose()"
      ></div>

      <!-- drawer -->
      <aside
        id="mobile-drawer"
        :aria-modal="open ? 'true' : undefined"
        class="fixed left-0 top-16 h-[calc(100vh-4rem)] w-72 max-w-[85vw] bg-app-surface border-r border-app-border shadow-[0_20px_60px_var(--color-app-shadow)] transition-transform duration-300 will-change-transform"
        :class="open ? 'translate-x-0' : '-translate-x-full'"
        :inert="!open"
        :role="open ? 'dialog' : undefined"
      >
        <div class="flex items-center justify-between px-6 py-3 border-b border-app-border">
          <span class="ty-label text-app-muted font-semibold! u-app-soft-transition">{{ t('header.route-section') }}</span>
        </div>

        <nav class="flex flex-col gap-2 p-6">
          <template v-for="r in routes" :key="r.path">
            <NuxtLink
              v-if="!r.disabled"
              class="rounded-lg p-3 ty-btn-label cursor-pointer u-app-soft-transition u-app-focus text-app-contrast"
              :class="{
                'hover:bg-app-surface-2': currentRoute.path !== r.path,
                'bg-app-accent text-white font-bold!': currentRoute.path === r.path,
              }"
              :to="r.path"
              @click="onClose()"
            >
              {{ r.name }}
            </NuxtLink>
            <span
              v-else
              class="rounded-lg p-3 ty-btn-label cursor-not-allowed opacity-50 text-app-contrast/70 u-app-soft-transition"
            >
              {{ r.name }}
            </span>
          </template>
        </nav>
        <div class="flex items-center justify-between px-6 py-3 border-y border-app-border">
          <span class="ty-label text-app-muted u-app-soft-transition font-semibold ">{{ t('header.settings-section') }}</span>
        </div>
        <div class="p-6">
          <BaseIconMenu
            :icon="'solar:globus-bold-duotone'"
            :items="props.langs"
            :selected-item-id="props.selectedLangId"
            @select="itemId => onSelectLang(itemId)"
          />
        </div>
      </aside>
    </div>
  </div>
</template>
