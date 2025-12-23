<script setup lang="ts">
interface BaseInputProps {
  id: string
  name?: string
  label?: string
  placeholder?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url'
  hint?: string
  error?: string | null
  autocomplete?: string
  prefixIcon?: string
}
// Input / Output
const props = withDefaults(defineProps<BaseInputProps>(), {
  label: undefined,
  placeholder: 'Insert a value...',
  type: 'text',
  name: undefined,
  autocomplete: 'off',
  hint: undefined,
  error: null,
  prefixIcon: undefined,
})

const model = defineModel<string>('input')

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
</script>

<template>
  <div>
    <label
      v-if="props.label"
      class="ty-app-label block text-app-muted mb-2 md:mb-3 u-app-soft-transition"
      :for="props.id"
    >{{ props.label }}</label>
    <div class="relative">
      <span v-if="props.prefixIcon" class="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-app-muted/70 u-app-soft-transition pointer-events-none">
        <Icon class="size-5" :name="props.prefixIcon" />
      </span>
      <input
        :id="props.id"
        v-model="model"
        :aria-describedby="describedBy"
        :aria-invalid="props.error ? 'true' : 'false'"
        :autocomplete="props.autocomplete"
        class="w-full rounded-xl bg-app-surface-2 border px-3 py-1.5 md:px-4 md:py-2 text-app-contrast ty-app-paragraph focus:outline-none focus:ring-2 focus:ring-app-accent truncate"
        :class="{
          'border-app-error': props.error,
          'border-app-border': !props.error,
          'pl-10! md:pl-11!': props.prefixIcon,
        }
        "
        :name="props.name || `${props.id}-name`"
        :placeholder="props.placeholder"
        :type="props.type"
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
      class="ty-app-label normal-case! text-app-error mt-1 md:mt-1.5 u-app-soft-transition"
      role="alert"
    >
      {{ props.error }}
    </p>
  </div>
</template>
