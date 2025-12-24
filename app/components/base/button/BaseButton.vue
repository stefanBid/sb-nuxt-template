<script setup lang="ts">
interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  type?: 'button' | 'submit' | 'reset' | 'link'
  ariaLabel?: string
  to?: string
  isDisabled?: boolean
  isLoading?: boolean
}

// Input / Output
const props = withDefaults(defineProps<BaseButtonProps>(), {
  variant: 'primary',
  type: 'button',
  to: undefined,
  ariaLabel: undefined,
  isDisabled: false,
  isLoading: false,
})

const isInteractive = computed(() => {
  return !props.isDisabled && !props.isLoading
})
</script>

<template>
  <a
    v-if="props.type === 'link'"
    :aria-label="props.ariaLabel"
    class="ty-app-btn-label border px-4 py-2 md:px-6 md:py-3 rounded-xl u-app-soft-transition inline-flex items-center u-app-focus"
    :class="[
      // Variants
      props.variant === 'primary'
        ? 'bg-app-accent hover:bg-app-accent-hover border-app-accent-border text-app-contrast'
        : '',

      props.variant === 'secondary'
        ? 'bg-app-surface hover:bg-app-surface-2 border-app-border text-app-contrast'
        : '',

      props.variant === 'outline'
        ? 'bg-transparent border-app-accent text-app-accent hover:bg-app-accent hover:text-app-main'
        : '',
    ]"
    :href="props.to"
    rel="noopener noreferrer"
    target="_blank"
  >
    <slot></slot>
  </a>
  <button
    v-else
    :aria-label="props.ariaLabel"
    class="ty-app-btn-label border px-4 py-2 md:px-6 md:py-3 rounded-xl u-app-soft-transition inline-flex items-center u-app-focus"

    :class="[
      // General state
      isInteractive ? 'cursor-pointer' : 'opacity-45 cursor-not-allowed',

      // Variants
      props.variant === 'primary'
        ? isInteractive
          ? 'bg-app-accent hover:bg-app-accent-hover border-app-accent-border text-app-contrast'
          : 'bg-app-accent border-app-accent-border text-app-contrast'
        : '',

      props.variant === 'secondary'
        ? isInteractive
          ? 'bg-app-surface hover:bg-app-surface-2 border-app-border text-app-contrast'
          : 'bg-app-surface border-app-border text-app-contrast'
        : '',

      props.variant === 'outline'
        ? isInteractive
          ? 'bg-transparent border-app-accent text-app-accent hover:bg-app-accent hover:text-app-main'
          : 'bg-transparent border-app-accent text-app-accent'
        : '',
    ]"
    :disabled="props.isDisabled || props.isLoading"
    :type="props.type"
  >
    <slot></slot>
    <Icon v-if="props.isLoading" class="inline-block size-5 md:size-6 ml-2 animate-spin" name="lucide:loader-circle" />
  </button>
</template>
