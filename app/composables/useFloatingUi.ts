import type { Placement, Strategy } from '@floating-ui/vue'
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue'

interface FloatingConfig {
  placement?: Placement
  offset?: number
  strategy?: Strategy
}

const DEFAULT_CONFIG: FloatingConfig = {
  placement: 'bottom-start',
  offset: 8,
  strategy: 'absolute',
}

export default function useFloatingUi(conf: FloatingConfig = {}) {
  // Internal state
  const _mergedConf: FloatingConfig = {
    ...DEFAULT_CONFIG,
    ...conf,
  }

  // State
  const reference = ref<HTMLElement | null>(null)
  const floating = ref<HTMLElement | null>(null)
  const open = ref(false)

  const { floatingStyles } = useFloating(reference, floating, {
    placement: _mergedConf.placement,
    strategy: _mergedConf.strategy,
    middleware: [offset(_mergedConf.offset), flip(), shift()],
    whileElementsMounted: autoUpdate,
    transform: false,

  })

  /**
   * Toggle floating UI visibility
   * @param newFloatingState boolean - desired floating state
   * @returns void
   */
  function toggleFloating(newFloatingState: boolean) {
    if (newFloatingState === open.value) {
      return
    }
    open.value = newFloatingState
  }

  return {
    reference,
    floating,
    floatingStyles,
    open,
    toggleFloating,
  }
}
