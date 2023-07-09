import { useState } from 'react'
import { RegisterForm } from './components/Register/'
import { Profile } from './components/Home/Profile'
import { UserContext } from './contexts/userContext'
import { Navbar } from './components/UI/Navbar'

enum Mode {
    LIGHT = '#EEE',
    DARK = '#212121',
}

function App() {
    const [isRegistered, setIsRegistered] = useState<boolean>(
        Boolean(Number(localStorage.getItem('isRegistered')))
    )

    const [isModeChanged, setIsModeChanged] = useState<boolean>(false)

    const body = document.querySelector('body') as HTMLBodyElement
    body.style.backgroundColor = isModeChanged ? Mode.LIGHT : Mode.DARK

    return (
        <UserContext.Provider
            value={{
                isRegistered,
                setIsRegistered,
                isModeChanged,
                setIsModeChanged,
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
