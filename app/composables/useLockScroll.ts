const SCROLL_LOCK_CLASS = 'app-scroll-locked'

export default function useLockScroll() {
  // Internal State
  const _owners = useState<string[]>('scrollLockOwners', () => [])
  const _ownerId = ref<string | null>(null)

  function _ensureOwnerId() {
    if (!_ownerId.value) {
      _ownerId.value = generateUuid()
    }
    return _ownerId.value
  }

  // State
  const isLocked = computed(() => _owners.value.length > 0)

  /**
   * Locks the scroll for the current owner instance.
   */
  function lock() {
    if (!import.meta.client) {
      return
    }

    const id = _ensureOwnerId()

    // avoid duplicates if lock() is called multiple times by the same owner
    if (!_owners.value.includes(id)) {
      _owners.value = [..._owners.value, id]
    }
  }

  /**
   * Unlocks the scroll for the current owner instance.
   */
  function unlock() {
    if (!import.meta.client || !_ownerId.value) {
      return
    }

    if (_owners.value.includes(_ownerId.value)) {
      _owners.value = _owners.value.filter(id => id !== _ownerId.value)
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
