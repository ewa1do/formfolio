import { LOCALSTORAGE_KEYS, UserInformation } from '../../models'
import Utils from '../../utils'

export function UserInfo() {
    const { name, job_title, lastname, email, phone_number } =
        Utils.getFields<UserInformation>(LOCALSTORAGE_KEYS.PROFILE)

    function defaultClass(capitalize = false) {
        return `text-base md:text-2xl lg: text-3xl ${
            capitalize ? 'capitalize' : ''
        }`
    }

    return (
        <section className="my-2 lg:my-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl capitalize ">
                {name} {lastname}
            </h2>
            <h3 className={defaultClass(true)}>{job_title}</h3>
            <h3 className={defaultClass()}>{email}</h3>
            <h3 className="text-base md:text-xl">{phone_number}</h3>
        </section>
    )
}
