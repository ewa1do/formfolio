import { LOCALSTORAGE_KEYS, WorkExperience } from '../../models'
import Utils from '../../utils'

interface Experience {
    experience: string
}

export function WorkExperienceComponent() {
    const { experience } = Utils.getFields<Experience>(
        LOCALSTORAGE_KEYS.WORK_EXP
    )

    let filledExperience: WorkExperience[] | null =
        experience && JSON?.parse(experience)

    filledExperience = filledExperience
        ? filledExperience.filter((obj) => {
              return Object.values(obj).every((value) => value)
          })
        : null

    console.log(filledExperience)
    return (
        <section className="my-2">
            <h2>Work Experience</h2>

            {filledExperience ? (
                filledExperience.map(({ charge, company, description }) => {
                    return (
                        <article className="my-2">
                            <h3>
                                {charge} @ {company}
                            </h3>
                            <p>{description}</p>
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
