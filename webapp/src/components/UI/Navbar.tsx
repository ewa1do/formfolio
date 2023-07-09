import { LanguageList } from './LanguageList'
import { Logo } from './Logo'
import { ModeButton } from './ModeButton'

import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'

export function Navbar() {
    const { isModeChanged } = useContext(UserContext)

    return (
        <nav className="flex justify-between items-center mb-8">
            <Logo fill={isModeChanged ? '#000' : '#FFF'} />

            <div className="flex">
                <ModeButton />
                <LanguageList />
            </div>
        </nav>
    )
}
