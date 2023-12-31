import { ChangeEvent, useContext, useState } from 'react'
import { UserContext } from '../../contexts/userContext'
import { LOCALSTORAGE_KEYS } from '../../models'
import { useOpenAIRequest } from '../../hooks/useOpenAIRequest'
import { Title } from '../UI/Title'
import utils from '../../utils'

interface CoverLetter {
    charge: string
    company: string
    letter: string
}

export function CoverLetter() {
    const profileInformation = utils.getFields(LOCALSTORAGE_KEYS.PROFILE)
    const skills = utils.getFields(LOCALSTORAGE_KEYS.SKILLS)
    const workExperience = utils.getFields(LOCALSTORAGE_KEYS.WORK_EXP)
    const { isModeChanged } = useContext(UserContext)

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

    async function handleClick() {
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

    const defaultClass = `py-2 my-1 mx-2 w-full md:w-4/5 bg-transparent rounded-md border-2 ${
        isModeChanged
            ? 'border-dark placeholder-[#333]'
            : 'border-light placeholder-[#ccc]'
    } `

    return (
        <aside className="md:w-2/5">
            <Title text="Generate Cover Letter" />

            <form className="flex flex-col mb-8">
                <div>
                    <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                        onChange={(e) => handleInputState(e)}
                        className={defaultClass}
                    />
                    <input
                        type="text"
                        name="charge"
                        placeholder="Charge you're applying"
                        onChange={(e) => handleInputState(e)}
                        className={defaultClass}
                    />
                </div>

                <input
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        handleClick()
                    }}
                    value="Generate!"
                    className={`border-2 ${utils.changeColorDependingOfMode(
                        isModeChanged,
                        'border'
                    )} p-2 mt-2 rounded-md md:w-3/5 ml-2`}
                />
            </form>

            <Title text="Last cover letters" />

            <div>
                {coverLetters.map((coverLetter, i) => {
                    return (
                        <article
                            className={`border-2 ${utils.changeColorDependingOfMode(
                                isModeChanged,
                                'border'
                            )} p-1 rounded-md my-8`}
                            key={`cover-letter-${i}`}
                        >
                            <h3 className="capitalize">
                                {coverLetter.charge || 'Default'} @{' '}
                                {coverLetter.company || 'Unknown'}
                            </h3>
                            <p key={`letter-${i}`} className="my-4">
                                {utils.sliceParagraph(coverLetter.letter)}...
                            </p>
                        </article>
                    )
                })}
            </div>
        </aside>
    )
}
