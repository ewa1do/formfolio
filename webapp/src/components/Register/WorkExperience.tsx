import { useContext } from 'react'
import { useWorkExperience } from '../../hooks/useWorkExperience'
import { Button } from '../UI/Button'
import { UserContext } from '../../contexts/userContext'
import utils from '../../utils'

interface Props {
    onClick: {
        increase: () => void
        decrease: () => void
    }
}

const defaultLength = utils.getDefaultWorkExpLength()

export function WorkExperience({ onClick }: Props) {
    const { handleStateIndex, workExp } = useWorkExperience()
    const { decrease, increase } = onClick

    const { selectedLang, isModeChanged } = useContext(UserContext)

    const defaultClass = `px-1 bg-transparent border-2 rounded-md ${
        !isModeChanged ? 'border-aqua-50' : 'border-aqua-100'
    } md:w-2/5 my-1`

    const { charge, company, description } =
        utils.getAppTexts().workExperiencePlaceholders

    return (
        <section>
            {Array.from({ length: defaultLength }, (_, i) => i).map((_, i) => {
                return (
                    <article className="flex flex-col my-8">
                        <div>
                            <input
                                type="text"
                                placeholder={charge[selectedLang]}
                                name="charge"
                                onChange={(e) => handleStateIndex(e, i)}
                                value={workExp[i].charge}
                                className={defaultClass}
                            />{' '}
                            <span>@</span>{' '}
                            <input
                                type="text"
                                placeholder={company[selectedLang]}
                                name="company"
                                onChange={(e) => handleStateIndex(e, i)}
                                value={workExp[i].company}
                                className={defaultClass}
                            />
                        </div>
                        <textarea
                            name="description"
                            placeholder={description[selectedLang]}
                            onChange={(e) => handleStateIndex(e, i)}
                            value={workExp[i].description}
                            className={`px-1 my-2 bg-transparent border-2 rounded-md ${
                                !isModeChanged
                                    ? 'border-aqua-50'
                                    : 'border-aqua-100'
                            } min-h-[5rem]`}
                        ></textarea>
                    </article>
                )
            })}

            <Button
                onClick={decrease}
                value={selectedLang === 'EN' ? 'Prev' : 'Anterior'}
            />
            <Button
                onClick={increase}
                value={selectedLang === 'EN' ? 'Next' : 'Siguiente'}
            />
        </section>
    )
}
