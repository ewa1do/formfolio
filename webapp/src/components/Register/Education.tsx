import { ChangeEvent, useState } from 'react'
import { LOCALSTORAGE_KEYS } from '../../models'

enum EducationEnum {
    TITLE = 'title',
    INSTITUTION = 'institution',
}

interface IEducation {
    title: string
    institution: string
}

export function Education({ onClick }: { onClick: () => void }) {
    const [education, setEducation] = useState<IEducation>(
        JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.EDUCATION))
    )

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
        <section className="flex flex-col my-8">
            <input
                type="text"
                name={EducationEnum.TITLE}
                onChange={handleInput}
            />
            <input
                type="text"
                name={EducationEnum.INSTITUTION}
                onChange={handleInput}
            />

            <button onClick={onClick}>Next</button>
        </section>
    )
}
