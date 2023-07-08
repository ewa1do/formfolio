import { ModeButton } from './ModeButton'

export function Navbar() {
    return (
        <nav className="flex justify-between items-center mb-8">
            <h1>Formfolio</h1>

            <div className="flex">
                <ModeButton />
                <button>Change language</button>
            </div>
        </nav>
    )
}
