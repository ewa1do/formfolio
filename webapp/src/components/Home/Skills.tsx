import { useContext } from 'react'
import { LOCALSTORAGE_KEYS } from '../../models'
import Utils from '../../utils'
import { Title } from '../UI/Title'
import { UserContext } from '../../contexts/userContext'
interface ISkills {
    skills: string
}

export function Skills() {
    const { skills } = Utils.getFields<ISkills>(LOCALSTORAGE_KEYS.SKILLS)

    const splittedSkills = skills.split(',').map((skill) => {
        return skill.trim().replace('/n', '')
    })

    const { isModeChanged } = useContext(UserContext)

    return (
        <section className="my-2">
            <Title text="Skills" />
            <ul className="flex flex-wrap">
                {splittedSkills.map((skill) => (
                    <li
                        key={`skill-${skill}`}
                        className={`border-2 ${
                            isModeChanged ? 'border-dark' : 'border-light'
                        } w-fit p-1 rounded-md m-1 text-xs md:text-sm lg:text-base xl:text-lg`}
                    >
                        <span>{Utils.capitalizeSkill(skill)}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
