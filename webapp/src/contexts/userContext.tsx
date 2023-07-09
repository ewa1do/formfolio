import { Dispatch, SetStateAction, createContext } from 'react'

interface UserInterface {
    isRegistered: boolean
    isModeChanged: boolean
    setIsRegistered: Dispatch<SetStateAction<boolean>>
    setIsModeChanged: Dispatch<SetStateAction<boolean>>
}

export const UserContext = createContext<UserInterface>({
    isRegistered: false,
    setIsRegistered: () => {
        return
    },
    isModeChanged: false,
    setIsModeChanged: () => {
        return
    },
})
