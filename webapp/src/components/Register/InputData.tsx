import { Input } from '../UI/Input'
import { Choices } from '../../models'
import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'

type ValidData = {
    name: string
    type?: string
    label?: Choices
}

interface Props {
    onClick: () => void | null
    data: ValidData[]
    validField: 'profile' | 'link'
}

export function InputData({ onClick, data, validField }: Props) {
    const { selectedLang, isModeChanged } = useContext(UserContext)

    return (
        <>
            {data.map((field) => (
                <Input
                    fieldName={`formfolio-${validField}-${field.name}`}
                    type={field.type || 'text'}
                    label={field.label}
                />
            ))}
            <button
                onClick={onClick}
                className={`border-2 p-2 rounded-md mt-8 ${
                    !isModeChanged ? 'border-aqua-50' : 'border-aqua-100'
                }`}
            >
                {selectedLang === 'EN' ? 'Next' : 'Siguiente'}
            </button>
        </>
    )
}
