interface NotificationState {
  notifications: NotificationItem[]
  notificationId: string
}

export default function useAppNotifications() {
  const state = useState<NotificationState>('appNotifications', () => ({
    notifications: [],
    notificationId: crypto.randomUUID(),
  }))

  const notifications = computed(() => state.value.notifications)
  // Add notification
  const addNotification = (newNotification: Omit<NotificationItem, 'id'>) => {
    const id = crypto.randomUUID()

    state.value.notifications.push({
      ...newNotification,
      id,
    })
    return id
  }

  // Remove notification by id
  const removeNotification = (id: string) => {
    const index = state.value.notifications.findIndex(n => n.id === id)
    if (index > -1) {
      state.value.notifications.splice(index, 1)
    }
  }

  // Clear all notifications
  const clearNotifications = () => {
    state.value.notifications = []
  }

  // Helper methods for specific types
  const success = (newNotification: Omit<NotificationItem, 'type' | 'id'>) => {
    return addNotification({ ...newNotification, type: 'success' })
  }

  const warning = (newNotification: Omit<NotificationItem, 'type' | 'id'>) => {
    return addNotification({ ...newNotification, type: 'warning' })
  }

  const error = (newNotification: Omit<NotificationItem, 'type' | 'id'>) => {
    return addNotification({ ...newNotification, type: 'error' })
  }

  const info = (newNotification: Omit<NotificationItem, 'type' | 'id'>) => {
    return addNotification({
      ...newNotification, type: 'info',
    })
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,
    success,
    warning,
    error,
    info,
  }
}
