import { useState } from 'react'
import { RegisterForm } from './components/Register/'
import { Profile } from './components/Home/Profile'
import { UserContext } from './contexts/userContext'
import { Navbar } from './components/UI/Navbar'

function App() {
    const [isRegistered, setIsRegistered] = useState<boolean>(
        Boolean(Number(localStorage.getItem('isRegistered')))
    )

    return (
        <UserContext.Provider value={{ isRegistered, setIsRegistered }}>
            <>
                <Navbar />
                {!isRegistered ? <RegisterForm /> : <Profile />}
            </>
        </UserContext.Provider>
    )
}

export default App
