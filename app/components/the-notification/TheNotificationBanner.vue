<script setup lang="ts">
interface TheNotificationBannerProps {
  type?: 'success' | 'warning' | 'error' | 'info'
  icon?: string | null
  title?: string | null
  message: string
  dismissible?: boolean
  autoClose?: boolean
  duration?: number
}
// Input / Output
const props = withDefaults(defineProps<TheNotificationBannerProps>(), {
  type: 'info',
  icon: null,
  title: null,
  dismissible: true,
  autoClose: false,
  duration: 5000,
})

const emit = defineEmits <{
  // eslint-disable-next-line no-unused-vars
  (e: 'close', falsyValue: false): void
}>()

// Events
const onClose = () => {
  emit('close', false)
}

onMounted(() => {
  // Auto-close logic
  if (props.autoClose && props.duration > 0 && import.meta.client) {
    setTimeout(() => {
      onClose()
    }, props.duration)
  }
})
</script>

<template>
  <div
    :aria-live="props.type === 'error' ? 'assertive' : 'polite'"
    :class="[
      'w-full sm:w-lg p-3.5 sm:p-5 rounded-xl border backdrop-blur-sm u-app-soft-transition',
      'shadow-[0_4px_20px_var(--color-app-shadow)]',
      {
        'bg-emerald-50 border-emerald-500': props.type === 'success',
        'bg-amber-50 border-amber-500': props.type === 'warning',
        'bg-red-50 border-app-error': props.type === 'error',
        'bg-blue-50 border-blue-500': props.type === 'info',
      },
    ]"
    role="alert"
  >
    <div class="flex items-start gap-3 sm:gap-4">
      <!-- Icon -->
      <div
        v-if="props.icon"
        :class="[
          'shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg u-app-soft-transition',
          {
            'bg-emerald-100 text-emerald-700': props.type === 'success',
            'bg-amber-100 text-amber-700': props.type === 'warning',
            'bg-red-100 text-red-700': props.type === 'error',
            'bg-blue-100 text-blue-700': props.type === 'info',
          },
        ]"
      >
        <Icon class="size-5 sm:size-6" :name="props.icon" />
      </div>

      <!-- Text Content -->
      <div class="flex-1 min-w-0">
        <h3
          v-if="props.title"
          :class="[
            'ty-app-title text-lg sm:text-xl mb-1',
            {
              'text-emerald-900': props.type === 'success',
              'text-amber-900': props.type === 'warning',
              'text-red-900': props.type === 'error',
              'text-blue-900': props.type === 'info',
            },
          ]"
        >
          {{ props.title }}
        </h3>
        <p
          :class="[
            'ty-app-paragraph text-[0.8125rem] sm:text-sm',
            {
              'text-emerald-800': props.type === 'success',
              'text-amber-800': props.type === 'warning',
              'text-red-800': props.type === 'error',
              'text-blue-800': props.type === 'info',
            },
          ]"
        >
          {{ props.message }}
        </p>
      </div>

      <!-- Close Button -->
      <BaseCloseButton
        v-if="props.dismissible"
        :class="[
          'shrink-0 -mt-1 -mr-1',
          {
            'text-emerald-700 hover:bg-emerald-100': props.type === 'success',
            'text-amber-700 hover:bg-amber-100': props.type === 'warning',
            'text-red-700 hover:bg-red-100': props.type === 'error',
            'text-blue-700 hover:bg-blue-100': props.type === 'info',
          },
        ]"
        @close="onClose()"
      />
    </div>
  </div>
</template>
