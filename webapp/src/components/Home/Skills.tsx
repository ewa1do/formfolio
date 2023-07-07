import { useEffect } from 'react'
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

    function randomizeIdx(length: number) {
        return Math.floor(Math.random() * length)
    }

    useEffect(() => {
        window.addEventListener('load', () => {
            const ul = [...document.querySelector('ul')?.children] || []

            if (ul) {
                ul.forEach((li) => {
                    li.style.border = `2px solid ${
                        Utils.getColors()[
                            randomizeIdx(Utils.getColors().length)
                        ]
                    }`
                })
            }
        })
    }, [])

    return (
        <section className="my-2">
            <Title text="Skills" />
            <ul className="flex flex-wrap">
                {splittedSkills.map((skill) => (
                    <li
                        key={`skill-${skill}`}
                        className={`border-2 w-fit p-1 rounded-md m-1 text-xs md:text-sm lg:text-base xl:text-lg`}
                    >
                        <span>{Utils.capitalizeSkill(skill)}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
