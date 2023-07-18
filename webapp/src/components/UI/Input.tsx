import Utils from '../../utils'
import { useInput } from '../../hooks/useInput'
import { Choices } from '../../models'
import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'

interface Props {
    fieldName: string
    type?: string
    label?: Choices
}

export function Input({ fieldName, type, label }: Props) {
    const { selectedLang, isModeChanged } = useContext(UserContext)

    const { getValue, handleInput } = useInput(fieldName)

    return (
        <div className="flex my-2 items-center">
            <label className="text-base mr-2" htmlFor={fieldName}>
                {label
                    ? label[selectedLang]
                    : Utils.sanitizeInput(fieldName, true)}
                :
            </label>
            <input
                type={type}
                name={fieldName}
                placeholder=""
                onChange={handleInput}
                value={getValue(fieldName)}
                className={`px-1 bg-transparent border-2 rounded-md ${
                    !isModeChanged ? 'border-aqua-50' : 'border-aqua-100'
                } md:w-2/4 md:my-1`}
            />
        </div>
    )
}
