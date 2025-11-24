const SCROLL_LOCK_CLASS = 'app-scroll-locked'

export default function useLockScroll() {
  // Global state to track all owners that have locked the scroll
  const owners = useState<string[]>('scrollLockOwners', () => [])
  const isLocked = computed(() => owners.value.length > 0)

  // Unique owner ID for this composable instance
  const ownerId = ref<string | null>(null)

  const ensureOwnerId = () => {
    if (!ownerId.value) {
      ownerId.value = generateUuid()
    }
    return ownerId.value
  }

  function lock() {
    if (!import.meta.client) {
      return
    }

    const id = ensureOwnerId()

    // avoid duplicates if lock() is called multiple times by the same owner
    if (!owners.value.includes(id)) {
      owners.value = [...owners.value, id]
    }
  }

  function unlock() {
    if (!import.meta.client || !ownerId.value) {
      return
    }

    if (owners.value.includes(ownerId.value)) {
      owners.value = owners.value.filter(id => id !== ownerId.value)
    }
  }

  // Apply / remove the class on <html>
  watch(
    isLocked,
    (value) => {
      if (!import.meta.client) {
        return
      }

      const root = document.documentElement
      if (value) {
        root.classList.add(SCROLL_LOCK_CLASS)
      }
      else {
        root.classList.remove(SCROLL_LOCK_CLASS)
      }
    },
    { immediate: true },
  )

  return {
    isLocked,
    lock,
    unlock,
  }
}
