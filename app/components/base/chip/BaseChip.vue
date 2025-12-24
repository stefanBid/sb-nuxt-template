<script setup lang="ts">
interface BaseChipProps {
  text: string
  icon?: string
  variant?: 'primary' | 'secondary' | 'outline'
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
  variant: 'primary',
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
      'bg-app-accent text-white': props.variant === 'primary',
      'bg-app-surface border border-app-border text-app-contrast': props.variant === 'secondary',
      'bg-transparent border border-app-accent text-app-accent': props.variant === 'outline',
      'cursor-pointer hover:scale-105 active:scale-95': isInteractive && props.variant === 'primary',
      'cursor-pointer hover:bg-app-surface-2 active:bg-app-border': isInteractive && props.variant === 'secondary',
      'cursor-pointer hover:bg-app-accent hover:text-white active:opacity-90': isInteractive && props.variant === 'outline',
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
