import { LOCALSTORAGE_KEYS } from '../../models'
import { Title } from '../UI/Title'
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

    return (
        <>
            <Title text="Education" />

            {filledEducation ? (
                <h3 className="text-sm md:text-xl lg:text-2xl ">
                    <span className="underline decoration-aqua-50 decoration-2 capitalize">
                        {filledEducation.title}
                    </span>{' '}
                    <span className="text-aqua-50">@</span>{' '}
                    <span className="underline decoration-aqua-50 decoration-2 capitalize">
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
