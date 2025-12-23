<script setup lang="ts">
interface BaseIconButtonProps {
  icon: string
  ariaLabel?: string
  isActive?: boolean
}

// Input / Output
const props = withDefaults(defineProps<BaseIconButtonProps>(), {
  ariaLabel: undefined,
  isActive: false,
})

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'click'): void
}>()

// Events
const onClick = () => {
  emit('click')
}
</script>

<template>
  <button
    :aria-label="props.ariaLabel"
    class="group relative inline-flex items-center justify-center rounded-lg border border-app-border u-app-soft-transition u-app-focus cursor-pointer size-7 md:size-8"
    :class="{
      'bg-app-surface-2': props.isActive,
      'bg-app-surface border hover:bg-app-surface-2': !props.isActive,
    }"
    type="button"
    @click="onClick"
  >
    <Icon
      class="size-4.5 md:size-5"
      :class="{
        'text-app-accent': props.isActive,
        'text-app-contrast group-hover:text-app-accent': !props.isActive,
      }"
      :name="props.icon"
    />
  </button>
</template>
