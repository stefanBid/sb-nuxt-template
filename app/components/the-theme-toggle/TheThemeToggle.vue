<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => (colorMode.value as string) === 'dark')

const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <BaseIconButton
    aria-label="Toggle theme"
    :icon="isDark ? 'lucide:moon' : 'lucide:sun'"
    @click="toggleTheme"
  />
</template>
