import { LOCALSTORAGE_KEYS, UserInformation } from '../../models'
import Utils from '../../utils'

export function UserInfo() {
    const { name, job_title, lastname, email, phone_number } =
        Utils.getFields<UserInformation>(LOCALSTORAGE_KEYS.PROFILE)

    return (
        <section className="my-2 ">
            <h2 className="text-3xl capitalize">
                {name} {lastname}
            </h2>
            <h3 className="text-lg capitalize">{job_title}</h3>
            <h3>{email}</h3>
            <h3>{phone_number}</h3>
        </section>
    )
}
