import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'

export function Title({ text }: { text: string }) {
    const { isModeChanged } = useContext(UserContext)

    return (
        <h2
            className={`my-4 md:my-6 ${
                !isModeChanged ? 'text-aqua-50' : 'text-dark'
            } text-lg md:text-2xl lg:text-3xl xl:text-4xl`}
        >
            {text}
        </h2>
    )
}
