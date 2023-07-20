import { Dispatch, SetStateAction, createContext } from 'react'
import { LOCALSTORAGE_KEYS, Langs } from '../models'

interface UserInterface {
    isRegistered: boolean
    isModeChanged: boolean
    selectedLang: Langs
    setIsRegistered: Dispatch<SetStateAction<boolean>>
    setIsModeChanged: Dispatch<SetStateAction<boolean>>
    setSelectedLang: Dispatch<SetStateAction<Langs>>
    isModalOpen: boolean
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
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
    selectedLang:
        (localStorage.getItem(LOCALSTORAGE_KEYS.LANG) as Langs) || 'EN',
    setSelectedLang: () => {
        return
    },
    isModalOpen: false,
    setIsModalOpen: () => {
        return
    },
})
