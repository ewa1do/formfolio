import { CoverLetter } from './CoverLetter'
import { Links } from './Links'
import { Skills } from './Skills'
import { UserInfo } from './UserInfo'
import { WorkExperienceComponent } from './WorkExperience'
import { ProfileMobile } from './ProfileMobile'
import { Education } from './Education'

import useScreenSize from '../../hooks/useScreenSize'

import { UserContext } from '../../contexts/userContext'
import { useContext } from 'react'

export function Profile() {
    const { screenSize, breakpoints } = useScreenSize()

    const { width } = screenSize
    const { tablet } = breakpoints()

    const { isModeChanged } = useContext(UserContext)

    if (width < tablet) {
        return <ProfileMobile />
    } else
        return (
            <main
                className={`w-full flex flex-row justify-between ${
                    isModeChanged
                        ? 'bg-light text-dark'
                        : 'bg-dark text text-light'
                }`}
            >
                <section className="w-3/6">
                    <UserInfo />
                    <Links />
                    <WorkExperienceComponent />
                    <Education />
                    <Skills />
                </section>
                <CoverLetter />
            </main>
        )
}
