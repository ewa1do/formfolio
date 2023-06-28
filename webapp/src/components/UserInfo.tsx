import { UserInformation } from '../models/ProfileData'
import Utils from '../utils/Utilities'

export function UserInfo() {
    const { name, job_title, lastname, email, phone_number } =
        Utils.getFields<UserInformation>('formfolio-profile')

    return (
        <div>
            <h2>
                {name} {lastname}
            </h2>
            <h3>{job_title}</h3>
            <h3>{email}</h3>
            <h3>{phone_number}</h3>
        </div>
    )
}
