import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'

interface Props {
    value: string
    onClick: () => void
}

export function Button({ onClick, value }: Props) {
    const { isModeChanged } = useContext(UserContext)

    return (
        <button
            onClick={onClick}
            className={`border-2 p-2 mr-4 rounded-md mt-8 ${
                !isModeChanged ? 'border-aqua-50' : 'border-aqua-100'
            }`}
        >
            {value}
        </button>
    )
}
