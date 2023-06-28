import { ChangeEvent, useState } from 'react'
import Utils from '../utils/Utilities'

interface Props {
    fieldName: string
    type?: string
}

export function Input({ fieldName, type }: Props) {
    const [inputState, setInputState] = useState({
        [fieldName]: localStorage.getItem(fieldName),
    })

    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement

        const [field] = Object.keys(inputState)
        const inputValue = target.value

        setInputState({
            ...inputState,
            [field]: inputValue,
        })

        localStorage.setItem(field, inputValue)
    }

    function getValue(name: string) {
        return localStorage.getItem(name) || ''
    }

    return (
        <div>
            <label className="text-2xl" htmlFor={fieldName}>
                {Utils.sanitizeInput(fieldName, true)}:
            </label>
            <input
                type={type}
                name={fieldName}
                placeholder=""
                onChange={handleInput}
                value={getValue(fieldName)}
            />
        </div>
    )
}
