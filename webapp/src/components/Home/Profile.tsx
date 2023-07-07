import { CoverLetter } from './CoverLetter'
import { Links } from './Links'
import { Skills } from './Skills'
import { UserInfo } from './UserInfo'
import { WorkExperienceComponent } from './WorkExperience'
import { ProfileMobile } from './ProfileMobile'

import useScreenSize from '../../hooks/useScreenSize'
import { Education } from './Education'

export function Profile() {
    const { screenSize, breakpoints } = useScreenSize()

    const { width } = screenSize
    const { tablet } = breakpoints()

    if (width < tablet) {
        return <ProfileMobile />
    } else
        return (
            <main className="w-full flex flex-row justify-between bg-dark">
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
