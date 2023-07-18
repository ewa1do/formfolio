import { ChangeEvent, useContext, useState } from 'react'
import { UserContext } from '../../contexts/userContext'
import { Button } from '../UI/Button'
import { LOCALSTORAGE_KEYS } from '../../models'
import utils from '../../utils'

enum EducationEnum {
    TITLE = 'title',
    INSTITUTION = 'institution',
}

interface IEducation {
    title: string
    institution: string
}

interface Props {
    onClick: {
        increase: () => void
        decrease: () => void
    }
}

export function Education({ onClick }: Props) {
    const [education, setEducation] = useState<IEducation>(
        JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.EDUCATION) as string)
    )

    const { selectedLang, isModeChanged } = useContext(UserContext)
    const { decrease, increase } = onClick

    const { institution, title } = utils.getAppTexts().education.placeholders

    const defaultClass = `px-1 bg-transparent border-2 rounded-md ${
        !isModeChanged ? 'border-aqua-50' : 'border-aqua-100'
    } md:w-2/5 my-1`

    if (!education) {
        const initialData: IEducation = {
            institution: '',
            title: '',
        }

        setEducation(initialData)

        localStorage.setItem(
            LOCALSTORAGE_KEYS.EDUCATION,
            JSON.stringify(initialData)
        )
    }

    function handleInput(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const target = event.target as HTMLInputElement

        const inputValue = target.value

        const updatedValue = {
            ...education,
            [target.name]: inputValue,
        }

        setEducation(updatedValue)

        localStorage.setItem(
            LOCALSTORAGE_KEYS.EDUCATION,
            JSON.stringify(updatedValue)
        )
    }

    return (
        <section className="my-8">
            <article>
                <input
                    type="text"
                    name={EducationEnum.TITLE}
                    onChange={handleInput}
                    value={education.title}
                    className={defaultClass}
                    placeholder={title[selectedLang]}
                />
                <span> @ </span>
                <input
                    type="text"
                    name={EducationEnum.INSTITUTION}
                    onChange={handleInput}
                    value={education.institution}
                    className={defaultClass}
                    placeholder={institution[selectedLang]}
                />
            </article>

            <Button
                onClick={decrease}
                value={selectedLang === 'EN' ? 'Prev' : 'Anterior'}
            />

            <Button
                onClick={increase}
                value={selectedLang === 'EN' ? 'Next' : 'Siguiente'}
            />
        </section>
    )
}
