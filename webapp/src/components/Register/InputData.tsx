import { Input } from '../UI/Input'
import { Choices } from '../../models'
import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'
import { Button } from '../UI/Button'

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
    const { selectedLang } = useContext(UserContext)

    return (
        <>
            {data.map((field) => (
                <Input
                    fieldName={`formfolio-${validField}-${field.name}`}
                    type={field.type || 'text'}
                    label={field.label}
                />
            ))}

            <Button
                onClick={onClick}
                value={selectedLang === 'EN' ? 'Next' : 'Siguiente'}
            />
        </>
    )
}
