import { useState } from 'react'
import { RegisterForm } from './components/Register/'
import { Profile } from './components/Home/Profile'
import { UserContext } from './contexts/userContext'
import { Navbar } from './components/UI/Navbar'
import { LOCALSTORAGE_KEYS, Langs, Mode, DEFAULT_LANG } from './models'
import utils from './utils'

function App() {
    const [isRegistered, setIsRegistered] = useState<boolean>(
        Boolean(Number(localStorage.getItem('isRegistered')))
    )

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isModeChanged, setIsModeChanged] = useState<boolean>(false)

    const formfolioLang = localStorage.getItem(LOCALSTORAGE_KEYS.LANG) as Langs

    if (!formfolioLang) {
        utils.setFormFolioLanguage()
    }

    const [selectedLang, setSelectedLang] = useState<Langs>(
        (utils
            .getLanguages()
            .find((lang) => lang === formfolioLang) as Langs) || DEFAULT_LANG
    )

    const body = document.querySelector('body') as HTMLBodyElement
    body.style.backgroundColor = isModeChanged ? Mode.LIGHT : Mode.DARK

    return (
        <UserContext.Provider
            value={{
                isRegistered,
                setIsRegistered,
                isModeChanged,
                setIsModeChanged,
                selectedLang,
                setSelectedLang,
                isModalOpen,
                setIsModalOpen,
            }}
        >
            <>
                <Navbar />
                {!isRegistered ? <RegisterForm /> : <Profile />}
            </>
        </UserContext.Provider>
    )
}

export default App
