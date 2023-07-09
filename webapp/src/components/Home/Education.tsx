import { LOCALSTORAGE_KEYS } from '../../models'
import { Title } from '../UI/Title'
import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'
import utils from '../../utils'

interface IEducation {
    institution: string
    title: string
}

export function Education() {
    const { education } = utils.getFields<{ education: string }>(
        LOCALSTORAGE_KEYS.EDUCATION
    )

    const filledEducation: IEducation = JSON.parse(education)

    const { isModeChanged } = useContext(UserContext)

    return (
        <>
            <Title text="Education" />

            {filledEducation ? (
                <h3 className="text-sm md:text-xl lg:text-2xl ">
                    <span
                        className={`underline ${utils.changeColorDependingOfMode(
                            isModeChanged,
                            'decoration'
                        )} decoration-2 capitalize`}
                    >
                        {filledEducation.title}
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
                        className={`underline decoration-2 capitalize ${utils.changeColorDependingOfMode(
                            isModeChanged,
                            'decoration'
                        )}`}
                    >
                        {filledEducation.institution}
                    </span>
                </h3>
            ) : (
                <h3 className="text-sm md:text-xl lg:text-2xl">
                    Add your last education, can be college, high school,
                    bootcamp, course...
                </h3>
            )}
        </>
    )
}
