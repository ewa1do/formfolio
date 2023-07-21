import { useState } from 'react'

export function useNotification() {
    const [showNotification, setShowNotification] = useState<boolean>(false)

    function triggerNotification(durationinMiliseconds = 2000) {
        setShowNotification(true)

        setTimeout(() => {
            setShowNotification(false)
        }, durationinMiliseconds)
    }

    return { showNotification, triggerNotification }
}
