import { ChangeEvent, useState } from 'react'

/**
 * @param fieldName name for the field and key within the localstorage
 * @returns an object containing a the state saved on the localstorage, a getter and a setter of that state
 */
export function useInput(fieldName: string) {
    const [inputState, setInputState] = useState({
        [fieldName]: localStorage.getItem(fieldName),
    })

    function handleInput(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
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

    return { handleInput, inputState, getValue }
}
