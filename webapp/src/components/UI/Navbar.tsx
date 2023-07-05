export function Navbar() {
    return (
        <nav className="flex justify-between items-start">
            <h1>Formfolio</h1>

            <div className="">
                <button className="mx-2">Change mode</button>
                <button>Change language</button>
            </div>
        </nav>
    )
}
