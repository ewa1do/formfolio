import { useInput } from '../hooks/useInput'

interface Props {
    fieldName: string
}

export function TextArea({ fieldName }: Props) {
    const { handleInput, getValue } = useInput(fieldName)

    return (
        <div>
            <label htmlFor="textarea">Skills</label>
            <textarea
                onChange={handleInput}
                name="textarea"
                id=""
                placeholder="separate your skills by commas"
                value={getValue(fieldName)}
            ></textarea>
        </div>
    )
}
