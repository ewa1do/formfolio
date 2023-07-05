import Utils from '../../utils'
import { useInput } from '../../hooks/useInput'

interface Props {
    fieldName: string
    type?: string
}

export function Input({ fieldName, type }: Props) {
    const { getValue, handleInput } = useInput(fieldName)

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
