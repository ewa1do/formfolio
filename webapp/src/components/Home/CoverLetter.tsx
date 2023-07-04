import { ChangeEvent, MouseEvent, useState } from 'react'
import { LOCALSTORAGE_KEYS } from '../../models'
import { useOpenAIRequest } from '../../hooks/useOpenAIRequest'
import Utils from '../../utils'

interface CoverLetter {
    charge: string
    company: string
    letter: string
}

export function CoverLetter() {
    const profileInformation = Utils.getFields(LOCALSTORAGE_KEYS.PROFILE)
    const skills = Utils.getFields(LOCALSTORAGE_KEYS.SKILLS)
    const workExperience = Utils.getFields(LOCALSTORAGE_KEYS.WORK_EXP)

    const [letterInput, setLetterInput] = useState<{
        charge: string
        company: string
    }>({
        charge: '',
        company: '',
    })

    const info = {
        profileInformation,
        skills,
        workExperience,
        applyingTo: letterInput.company,
        chargeApplying: letterInput.charge,
    }

    const prompt = `Generate a cover letter for me this is my information ${JSON.stringify(
        info
    )}`

    const { sendRequest, response } = useOpenAIRequest(prompt)

    let storedCoverLetters: CoverLetter[] = JSON.parse(
        localStorage.getItem(LOCALSTORAGE_KEYS.COVER_LETTERS) as string
    )

    if (!storedCoverLetters) {
        localStorage.setItem(
            LOCALSTORAGE_KEYS.COVER_LETTERS,
            JSON.stringify([])
        )
    }

    const [coverLetters, setCoverLetters] = useState<CoverLetter[]>(
        storedCoverLetters || []
    )

    function handleInputState(e: ChangeEvent) {
        const target = e.target as HTMLInputElement

        setLetterInput((prevState) => {
            return {
                ...prevState,
                [target.name]: target.value,
            }
        })
    }

    async function handleClick(e: MouseEvent<Element, MouseEvent>) {
        // const target = e.target as Element

        await sendRequest()

        if (storedCoverLetters.length > 4) {
            storedCoverLetters = storedCoverLetters.slice(1)
        }

        if (!response.loading) {
            storedCoverLetters = storedCoverLetters.concat({
                charge: letterInput['charge'],
                company: letterInput['company'],
                letter: response.data,
            })

            localStorage.setItem(
                LOCALSTORAGE_KEYS.COVER_LETTERS,
                JSON.stringify(storedCoverLetters)
            )

            setCoverLetters(storedCoverLetters)
        }
    }

    return (
        <aside className="w-2/5">
            <h2>Generate Cover letter</h2>

            <form action="">
                <input
                    type="text"
                    name="company"
                    placeholder="name of the company"
                    onChange={(e) => handleInputState(e)}
                />
                <input
                    type="text"
                    name="charge"
                    id=""
                    placeholder="charge you are applying"
                    onChange={(e) => handleInputState(e)}
                />

                <input
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        handleClick(e)
                    }}
                />
            </form>

            <h3>Last cover letters</h3>
            <div>
                {coverLetters.map((coverLetter, i) => {
                    return (
                        <p key={`letter-${i}`} className="my-4">
                            {coverLetter.letter}
                        </p>
                    )
                })}
            </div>
        </aside>
    )
}
