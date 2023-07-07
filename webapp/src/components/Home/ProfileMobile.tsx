import { useState } from 'react'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

import { CoverLetter } from './CoverLetter'
import { Links } from './Links'
import { Skills } from './Skills'
import { UserInfo } from './UserInfo'
import { WorkExperienceComponent } from './WorkExperience'
import { Education } from './Education'

interface Props {
    handler: () => void
    state: boolean
}

function ArrowButton({ handler, state }: Props) {
    return (
        <button onClick={handler}>
            <i>{!state ? <IoArrowForward /> : <IoArrowBack />}</i>
        </button>
    )
}

export function ProfileMobile() {
    function handleCoverLetter() {
        setIsCoverLetterShowed(!isCoverLetterShowed)
    }

    const [isCoverLetterShowed, setIsCoverLetterShowed] =
        useState<boolean>(false)

    if (!isCoverLetterShowed) {
        return (
            <main className="font-montserrat flex flex-col w-4/5 ml-[10%]">
                <section>
                    <UserInfo />
                    <Links />
                    <WorkExperienceComponent />
                    <Education />
                    <Skills />
                </section>
                <ArrowButton
                    handler={handleCoverLetter}
                    state={isCoverLetterShowed}
                />
            </main>
        )
    } else {
        return (
            <>
                <CoverLetter />{' '}
                <ArrowButton
                    handler={handleCoverLetter}
                    state={isCoverLetterShowed}
                />
            </>
        )
    }
}
