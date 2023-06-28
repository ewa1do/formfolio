import { useState } from 'react'
// import './App.css'
import { Form } from './components/Form'
import { Profile } from './components/Profile'
import { UserContext } from './contexts/userContext'
import { Navbar } from './components/Navbar'

function App() {
    const [isRegistered, setIsRegistered] = useState<boolean>(
        Boolean(Number(localStorage.getItem('isRegistered')))
    )

    return (
        <UserContext.Provider value={{ isRegistered, setIsRegistered }}>
            <>
                <Navbar />
                {!isRegistered ? <Form /> : <Profile />}
            </>
        </UserContext.Provider>
    )
}

export default App
