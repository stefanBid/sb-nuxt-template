<script setup lang="ts" generic="T">
interface BaseComboboxProps {
  id: string
  name?: string
  type?: 'single' | 'multiple'
  items: {
    label: string
    value: T
  }[]
  label?: string
  placeholder?: string
  hint?: string
  error?: string | null
  prefixIcon?: string
}

// Input / Output
const props = withDefaults(defineProps<BaseComboboxProps>(), {
  type: 'single',
  label: undefined,
  placeholder: 'Insert a value...',
  name: undefined,
  hint: undefined,
  error: null,
  prefixIcon: undefined,
})

const model = defineModel<T[]>('input', {
  default: () => [],
})

// Floating UI composable
const {
  reference,
  floating,
  floatingStyles,
  open,
  toggleFloating,
} = useFloatingUi({
  placement: 'bottom',
  offset: 8,
  strategy: 'fixed',
})

// State
const menu = ref<HTMLElement | null>(null)
const menuWidth = ref<string | null>(null)
const resizeRafId = ref<number | null>(null)

const valuesWithCommas = computed<string>(() => {
  return model.value.map((v) => {
    const item = props.items.find(i => i.value === v)
    return item ? item.label : ''
  }).join(', ')
})

const describedBy = computed(() => {
  const ids: string[] = []
  if (props.hint) {
    ids.push(`${props.id}-hint`)
  }
  if (props.error) {
    ids.push(`${props.id}-error`)
  }
  return ids.length ? ids.join(' ') : undefined
})

// Helpers
const updateMenuWidth = () => {
  if (!import.meta.client) {
    return
  }
  const el = reference.value as HTMLElement | null
  if (el) {
    menuWidth.value = `${el.offsetWidth}px`
  }
}

// Events
const onSelect = (value: T) => {
  if (props.type === 'multiple') {
    if (model.value.includes(value)) {
      model.value = model.value.filter(v => v !== value)
    }
    else {
      model.value = [...model.value, value]
    }
  }
  else {
    if (model.value.includes(value)) {
      model.value = []
    }
    else {
      model.value = [value]
    }
    toggleFloating(false)
  }
}

// Click outside: close when clicking outside the menu, ignoring the trigger
onClickOutside(
  floating,
  () => {
    toggleFloating(false)
  },
  { ignore: [reference] },
)

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    e.preventDefault()
    toggleFloating(false)
  }
}

const onResize = () => {
  if (!import.meta.client) {
    return
  }
  // Throttle with requestAnimationFrame
  if (resizeRafId.value !== null) {
    cancelAnimationFrame(resizeRafId.value)
  }
  resizeRafId.value = requestAnimationFrame(() => {
    updateMenuWidth()
  })
}

onMounted(() => {
  if (!import.meta.client) {
    return
  }
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize)
  // Initial width sync (in case the menu opens immediately)
  updateMenuWidth()
})

onBeforeUnmount(() => {
  if (!import.meta.client) {
    return
  }
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onResize)
  if (resizeRafId.value !== null) {
    cancelAnimationFrame(resizeRafId.value)
  }
})

// When the menu opens, match width to the input and focus first item
watch(open, (newVal) => {
  if (!import.meta.client) {
    return
  }

  if (newVal) {
    nextTick(() => {
      updateMenuWidth()

      // Focus the first menu item
      const first = menu.value?.querySelector<HTMLElement>('[role="menuitem"]')
      first?.focus()
    })
  }
})
</script>

<template>
  <div>
    <label
      v-if="props.label"
      class="ty-app-label block text-app-muted mb-2 md:mb-3 u-app-soft-transition"
      :for="props.id"
    >
      {{ props.label }}
    </label>

    <div class="relative">
      <span
        v-if="props.prefixIcon"
        class="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-app-muted u-app-soft-transition pointer-events-none"
      >
        <Icon class="size-5" :name="props.prefixIcon" />
      </span>

      <span class="absolute top-1/2 right-3 md:right-4 transform -translate-y-1/2 text-app-contrast u-app-soft-transition pointer-events-none">
        <Icon
          class="size-6 u-app-soft-transition"
          :class="{
            'rotate-0': !open,
            'rotate-180': open,
          }"
          name="lucide:chevron-down"
        />

      </span>

      <input
        :id="props.id"
        ref="reference"
        :aria-describedby="describedBy"
        :aria-invalid="props.error ? 'true' : 'false'"
        class="w-full rounded-xl bg-app-surface-2 border pl-3 pr-10 py-1.5 md:pl-4 md:pr-11 md:py-2 text-app-contrast ty-app-paragraph focus:outline-none focus:ring-2 focus:ring-app-accent truncate"
        :class="{
          'border-red-500': props.error,
          'border-app-border': !props.error,
          'pl-9! md:pl-10!': props.prefixIcon,
        }"
        :name="props.name || `${props.id}-name`"
        :placeholder="props.placeholder"
        readonly
        type="text"
        :value="valuesWithCommas"
        @click="toggleFloating(!open)"
        @keydown.enter.prevent="toggleFloating(!open)"
      />
    </div>

    <!-- Hint -->
    <p
      v-if="props.hint"
      :id="`${props.id}-hint`"
      class="ty-app-label normal-case! text-app-muted mt-1 md:mt-1.5 u-app-soft-transition"
    >
      {{ props.hint }}
    </p>

    <!-- Error -->
    <p
      v-if="props.error"
      :id="`${props.id}-error`"
      class="ty-app-label normal-case! text-red-500 mt-1 md:mt-1.5 u-app-soft-transition"
      role="alert"
    >
      {{ props.error }}
    </p>

    <Teleport to="body">
      <transition name="scale-fade">
        <div
          v-if="open"
          ref="floating"
          class="z-300 rounded-xl border border-app-border/60 bg-app-surface shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
          :style="[
            floatingStyles,
            { width: menuWidth ? menuWidth : 'auto' },
          ]"
        >
          <ul
            ref="menu"
            class="outline-none max-h-80 overflow-y-auto p-1"
            role="menu"
          >
            <li v-for="item in props.items" :key="item.label">
              <button
                :aria-current="model.includes(item.value) ? 'true' : 'false'"
                class="relative inline-flex w-full text-left px-3 py-2 md:px-3.5 md:py-2.5 h-9 sm:h-10 gap-1 text-app-contrast cursor-pointer ty-app-label normal-case! u-app-focus u-app-soft-transition"
                :class="{
                  'bg-app-border': model.includes(item.value),
                  'hover:bg-app-surface-2': !model.includes(item.value),
                }"
                role="menuitem"
                type="button"
                @click="onSelect(item.value)"
              >
                <span class="truncate flex-1">{{ item.label }}</span>
                <Icon
                  v-if="model.includes(item.value)"
                  class="size-5 text-app-accent u-app-soft-transition"
                  name="lucide:check-circle"
                />
              </button>
            </li>
          </ul>
        </div>
      </transition>
    </Teleport>
  </div>
</template>
