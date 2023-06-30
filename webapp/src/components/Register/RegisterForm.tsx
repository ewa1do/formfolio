import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/userContext'
import { SkillsArea } from './SkillsArea'
import { InputData } from './InputData'
import { LOCALSTORAGE_KEYS } from '../../models'
import Utils from '../../utils'

const appMessages = [
    'Welcome to formfolio, the only app you will need to fill job forms, lets begin adding your personal information',
    'If you have work experience add it if not you can move on, Im sure youre going to find it soon',
    'Add links to your sites, this way it will easier for you to fill forms, just copy and paste',
    'Finally add some skills you have',
]

export function RegisterForm() {
    const { setIsRegistered } = useContext(UserContext)
    const [option, setOption] = useState<number>(0)

    function handleRegister() {
        localStorage.setItem(LOCALSTORAGE_KEYS.ISREGISTERED, '1')

        const register = Number(
            localStorage.getItem(LOCALSTORAGE_KEYS.ISREGISTERED)
        )

        setIsRegistered(Boolean(register))
    }

    function increaseOption(): void {
        setOption((prev) => prev + 1)
    }

    const renderList = [
        <InputData
            onClick={increaseOption}
            data={Utils.getUserInfo()}
            validField="profile"
        />,
        <>
            {[0, 1, 2].map((_) => {
                return (
                    <>
                        <input
                            type="text"
                            placeholder="charge exg: Backend developer"
                        />{' '}
                        <span>@</span>{' '}
                        <input
                            type="text"
                            placeholder="company name: exg. Microsoft"
                        />
                        <button onClick={increaseOption}>next</button>
                    </>
                )
            })}
        </>,
        <InputData
            data={Utils.getUserLinks()}
            onClick={increaseOption}
            validField="link"
        />,
        <SkillsArea fieldName="formfolio-skills" />,
    ]

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
            }}
        >
            <h2>{appMessages[option]}</h2>
            {renderList[option]}

            {option == renderList.length - 1 && (
                <button onClick={handleRegister}>Save!</button>
            )}
        </form>
    )
}

// eduardo
// isRegistered	1
// formfolio-profile-twitter	@edu_dev
// formfolio-profile-linkedin	https://www.linkedin.com/in/eduardo-vera-612626191/
// formfolio-profile-lastname	vera
// formfolio-profile-resume	https://docs.google.com/document/d/1jRY0CkLx-nThJT2cvT1DXTk8pZqacIemK6pc6EwVAM8/edit?usp=sharing
// formfolio-profile-phone_number	584246913238
// formfolio-profile-email	this.eduardovera@gmail.com
// formfolio-profile-portfolio	https://eduardovera.vercel.app
// formfolio-profile-job_title	software developer
