<script setup lang="ts">
interface BaseChipProps {
  text: string
  icon?: string
  variant?: 'accent' | 'primary' | 'secondary'
  clickable?: boolean
  linkable?: {
    href: string
    target?: string
    rel?: string
  }
}

// Input / Output
const props = withDefaults(defineProps<BaseChipProps>(), {
  icon: undefined,
  variant: 'accent',
  clickable: false,
  linkable: undefined,
})

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'chip-click'): void
}>()

// State
const componentTag = computed(() => {
  if (props.linkable) {
    return 'a'
  }
  if (props.clickable) {
    return 'button'
  }
  return 'span'
})

const isInteractive = computed(() => {
  return props.clickable || props.linkable
})

// Events
const onClick = () => {
  if (props.clickable) {
    emit('chip-click')
  }
}
</script>

<template>
  <component
    :is="componentTag"
    class="inline-flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full u-app-soft-transition"
    :class="{
      'bg-app-accent text-white': props.variant === 'accent',
      'bg-app-surface border border-app-border text-app-contrast': props.variant === 'primary',
      'bg-app-surface-2 border border-app-border text-app-contrast': props.variant === 'secondary',
      'cursor-pointer hover:scale-105 active:scale-95': isInteractive && props.variant === 'accent',
      'cursor-pointer hover:bg-app-surface-2 active:bg-app-border': isInteractive && props.variant === 'primary',
      'cursor-pointer hover:bg-app-border active:opacity-80': isInteractive && props.variant === 'secondary',
    }"
    :href="props.linkable?.href"
    :rel="props.linkable?.rel"
    :target="props.linkable?.target"
    :type="props.clickable ? 'button' : undefined"
    @click="onClick"
  >
    <Icon
      v-if="props.icon"
      class="size-3.5 md:size-4"
      :name="props.icon"
    />
    <span class="ty-app-label truncate">{{ props.text }}</span>
  </component>
</template>
