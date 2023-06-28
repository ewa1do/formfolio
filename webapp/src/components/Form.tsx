import { useContext } from 'react'
import { Input } from './Input'
import { UserContext } from '../contexts/userContext'

const userInfo = [
    {
        name: 'name',
    },
    {
        name: 'lastname',
    },
    {
        name: 'job_title',
    },
    {
        name: 'email',
        type: 'email',
    },
    {
        name: 'phone_number',
        type: 'number',
    },
]

const userLinks = [
    {
        name: 'twitter',
    },
    {
        name: 'linkedin',
    },
    {
        name: 'portfolio',
    },
    {
        name: 'resume',
    },
]

export function Form() {
    const { setIsRegistered } = useContext(UserContext)

    function handleRegister() {
        localStorage.setItem('isRegistered', '1')

        const register = Number(localStorage.getItem('isRegistered'))

        setIsRegistered(Boolean(register))
    }

    return (
        <form>
            {userInfo.map((field) => (
                <Input
                    fieldName={`formfolio-profile-${field.name}`}
                    type={field.type || 'text'}
                />
            ))}

            {userLinks.map((field) => (
                <Input
                    fieldName={`formfolio-link-${field.name}`}
                    type={'text'}
                />
            ))}

            <button onClick={handleRegister}>Save!</button>
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
