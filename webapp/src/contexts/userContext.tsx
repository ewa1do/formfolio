import { Dispatch, SetStateAction, createContext } from 'react'

interface UserInterface {
    isRegistered: boolean
    setIsRegistered: Dispatch<SetStateAction<boolean>>
}

export const UserContext = createContext<UserInterface>({
    isRegistered: false,
    setIsRegistered: () => {
        return
    },
})
