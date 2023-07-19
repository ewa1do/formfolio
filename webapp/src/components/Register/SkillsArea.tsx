import { useContext } from 'react'
import { useInput } from '../../hooks/useInput'
import { UserContext } from '../../contexts/userContext'
import { Button } from '../UI/Button'
import utils from '../../utils'

interface Props {
    fieldName: string
    onClick: {
        decrease: () => void
        save: () => void
    }
}

export function SkillsArea({ fieldName, onClick }: Props) {
    const { handleInput, getValue } = useInput(fieldName)

    const { isModeChanged, selectedLang } = useContext(UserContext)

    const { placeholder } = utils.getAppTexts().skills

    return (
        <>
            <div className="flex flex-col">
                <label htmlFor="textarea" className="text-xl my-1">
                    Skills:{' '}
                </label>
                <textarea
                    onChange={handleInput}
                    name="textarea"
                    placeholder={placeholder[selectedLang]}
                    value={getValue(fieldName)}
                    className={`bg-transparent p-2 w-full md:w-3/4 min-h-[5rem] md:min-h-[8rem] border-2 ${
                        !isModeChanged ? 'border-aqua-50' : 'border-aqua-100'
                    }`}
                ></textarea>
            </div>

            <Button
                onClick={onClick.decrease}
                value={`${selectedLang === 'EN' ? 'Prev' : 'Anterior'}`}
            />
            <Button
                onClick={onClick.save}
                value={`${selectedLang === 'EN' ? 'Save!' : 'Guardar!'}`}
            />
        </>
    )
}
