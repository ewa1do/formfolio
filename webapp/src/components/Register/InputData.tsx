import { Input } from '../Input'

type ValidData = {
    name: string
    type?: string
}

interface Props {
    onClick: () => void | null
    data: ValidData[]
    validField: 'profile' | 'link'
}

export function InputData({ onClick, data, validField }: Props) {
    return (
        <>
            {data.map((field) => (
                <Input
                    fieldName={`formfolio-${validField}-${field.name}`}
                    type={field.type || 'text'}
                />
            ))}
            <button onClick={onClick}>Next</button>
        </>
    )
}
