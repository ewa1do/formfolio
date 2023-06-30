import { LOCALSTORAGE_KEYS } from '../../models'
import Utils from '../../utils'
interface ISkills {
    skills: string
}

export function Skills() {
    const { skills } = Utils.getFields<ISkills>(LOCALSTORAGE_KEYS.SKILLS)

    const splittedSkills = skills.split(',').map((skill) => {
        return skill.trim().replace('/n', '')
    })

    return (
        <section className="my-2">
            <h3>Skills</h3>
            <ul>
                {splittedSkills.map((skill) => (
                    <li key={`skill-${skill}`}>
                        <span className="capitalize">{skill}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
