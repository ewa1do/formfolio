import { useContext, useState } from 'react'
import { UserContext } from '../contexts/userContext'
import { LOCALSTORAGE_KEYS } from '../models'

export function useRegister() {
    const { setIsRegistered } = useContext(UserContext)
    const [option, setOption] = useState<number>(0)

    function handleRegister() {
        localStorage.setItem(LOCALSTORAGE_KEYS.ISREGISTERED, '1')

        const register = Number(
            localStorage.getItem(LOCALSTORAGE_KEYS.ISREGISTERED)
        )

        setIsRegistered(Boolean(register))
    }

    function increaseOption(): void {
        setOption((prev) => prev + 1)
    }

    function decreaseOption(): void {
        setOption((prev) => prev - 1)
    }

    return { option, handleRegister, increaseOption, decreaseOption }
}
