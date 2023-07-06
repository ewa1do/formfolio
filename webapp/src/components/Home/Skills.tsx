import { LOCALSTORAGE_KEYS } from '../../models'
import Utils from '../../utils'
import { Title } from '../UI/Title'
interface ISkills {
    skills: string
}

export function Skills() {
    const { skills } = Utils.getFields<ISkills>(LOCALSTORAGE_KEYS.SKILLS)

    const splittedSkills = skills.split(',').map((skill) => {
        return skill.trim().replace('/n', '')
    })

    let colors = ['red', 'teal', 'green', 'orange', 'yellow', 'violet']

    function setBorders(colors: string[], opacity = '700') {
        return colors.map((color) => `border-${color}-${opacity}`)
    }

    function randomizeIdx(length: number) {
        return Math.floor(Math.random() * length)
    }

    colors = setBorders(colors)

    return (
        <section className="my-2">
            <Title text="Skills" />
            <ul className="flex flex-wrap">
                {splittedSkills.map((skill) => (
                    <li
                        key={`skill-${skill}`}
                        className={`border-2 w-fit p-1 rounded-md m-1 text-xs md:text-sm lg:text-base xl:text-lg ${
                            colors[randomizeIdx(colors.length)]
                        }`}
                    >
                        <span
                            className={
                                skill.toLowerCase() !== 'php'
                                    ? `capitalize`
                                    : 'uppercase'
                            }
                        >
                            {skill}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
