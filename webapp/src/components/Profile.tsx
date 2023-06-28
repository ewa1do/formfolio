import { Links } from './Links'
import { Skills } from './Skills'
import { UserInfo } from './UserInfo'
import { WorkExperience } from './WorkExperience'

export function Profile() {
    return (
        <>
            <UserInfo />
            <WorkExperience />
            <Skills />
            <Links />
        </>
    )
}
