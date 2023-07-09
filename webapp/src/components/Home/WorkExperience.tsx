import { useContext } from 'react'
import { LOCALSTORAGE_KEYS, WorkExperience } from '../../models'
import utils from '../../utils'
import { Title } from '../UI/Title'
import { UserContext } from '../../contexts/userContext'

interface Experience {
    experience: string
}

export function WorkExperienceComponent() {
    const { isModeChanged } = useContext(UserContext)

    const { experience } = utils.getFields<Experience>(
        LOCALSTORAGE_KEYS.WORK_EXP
    )

    let filledExperience: WorkExperience[] | null =
        experience && JSON?.parse(experience)

    filledExperience = filledExperience
        ? filledExperience.filter((obj) => {
              return Object.values(obj).every((value) => value)
          })
        : null

    return (
        <section className="my-2 md:my-8">
            <Title text="Work Experience" />

            {filledExperience ? (
                filledExperience.map(({ charge, company, description }) => {
                    return (
                        <article
                            key={`work-exp-${company}`}
                            className={`my-2 ${
                                filledExperience && filledExperience?.length > 1
                                    ? 'my-6'
                                    : ''
                            }`}
                        >
                            <h3 className="text-base md:text-xl lg:text-2xl">
                                <span
                                    className={`underline ${utils.changeColorDependingOfMode(
                                        isModeChanged,
                                        'decoration'
                                    )}  decoration-2 capitalize`}
                                >
                                    {charge}
                                </span>{' '}
                                <span
                                    className={utils.changeColorDependingOfMode(
                                        isModeChanged,
                                        'text'
                                    )}
                                >
                                    @
                                </span>{' '}
                                <span
                                    className={`underline ${utils.changeColorDependingOfMode(
                                        isModeChanged,
                                        'decoration'
                                    )} decoration-2`}
                                >
                                    {utils.capitalizeSkill(company)}
                                </span>
                            </h3>
                            <p className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl lg:w-4/5 ">
                                {description}
                            </p>
                        </article>
                    )
                })
            ) : (
                <article>
                    <p>
                        Add some experience, rememeber that everything counts.
                        Bootcamps, freelancing...
                    </p>
                </article>
            )}
        </section>
    )
}
