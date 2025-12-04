<script setup lang="ts">
interface BaseIconMenuProps {
  icon: string
  items: Array<MenuItem>
  selectedItemId?: string | null

}

// Input / Output
const props = withDefaults(defineProps<BaseIconMenuProps>(), {
  selectedItemId: null,
})

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'select', itemId: string): void
}>()

// Floating UI composable
const { reference, floating, floatingStyles, open, toggleFloating } = useFloatingUi({
  placement: 'bottom-start',
  offset: 8,
  strategy: 'fixed',
})

// State
const menu = ref<HTMLElement | null>(null)

// Events
const onSelect = (itemId: string) => {
  emit('select', itemId)
  toggleFloating(false)
}

// Click outside: chiudi se clicchi fuori dal menu, ignorando il trigger
onClickOutside(floating, () => {
  toggleFloating(false)
}, { ignore: [reference] })

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    e.preventDefault()
    toggleFloating(false)
  }
}

onMounted(() => {
  if (!import.meta.client) {
    return
  }
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  if (!import.meta.client) {
    return
  }
  window.removeEventListener('keydown', onKeydown)
})

watch(open, (newVal) => {
  if (newVal) {
    nextTick(() => {
      const first = menu.value?.querySelector<HTMLElement>('[role="menuitem"]')
      first?.focus()
    })
  }
})
</script>

<template>
  <div class="relative inline-block">
    <!-- Trigger -->
    <button
      ref="reference"
      :aria-expanded="open ? 'true' : 'false'"
      aria-haspopup="menu"
      class="inline-flex items-center p-1 bg-transparent gap-2 rounded-xl ty-app-btn-label u-app-soft-transition u-app-focus cursor-pointer"
      :class="{
        'text-app-contrast/70 hover:text-app-contrast': !open,
        'text-app-contrast': open,
      }"
      type="button"
      @click="toggleFloating(!open)"
    >
      <Icon
        class="size-6"
        :name="props.icon"
      />
    </button>

    <!-- Menu -->
    <Teleport to="body">
      <transition name="scale-fade">
        <div
          v-if="open"
          ref="floating"
          class="z-100 rounded-xl border border-app-border bg-app-surface w-fit shadow-[0_12px_32px_var(--color-app-shadow)]"
          :style="floatingStyles"
        >
          <ul
            ref="menu"
            class="p-2 outline-none space-y-2"
            role="menu"
          >
            <li v-for="item in props.items" :key="item.code">
              <button
                :aria-current="item.code === props.selectedItemId ? 'true' : 'false'"
                class="group inline-flex w-full text-left rounded-xl px-3 py-2 md:px-3.5 md:py-2.5 text-app-contrast sb-focus ty-app-label normal-case! gap-2 u-app-focus u-app-soft-transition"
                :class="{
                  'bg-app-surface-2': props.selectedItemId === item.code,
                  'hover:bg-app-surface-2 cursor-pointer': props.selectedItemId !== item.code,
                }"
                role="menuitem"
                type="button"
                @click="onSelect(item.code)"
              >
                <span class="truncate flex-1">{{ item.label }}</span>
                <Icon
                  v-if="item.iconType === 'nuxt-icon'"
                  class="size-4 shrink-0"
                  :name="item.icon"
                />
                <NuxtImg
                  v-else-if="item.iconType === 'custom'"
                  alt=""
                  class="size-4 shrink-0"
                  :src="item.icon"
                />
              </button>
            </li>
          </ul>
        </div>
      </transition>
    </Teleport>
  </div>
</template>
