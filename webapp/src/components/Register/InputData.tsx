import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'
import {
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoGithub,
    IoLogoBehance,
    IoDocumentOutline,
} from 'react-icons/io5'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { Input } from '../UI/Input'
import { Choices } from '../../models'
import { Button } from '../UI/Button'

type ValidData = {
    name: string
    type?: string
    label?: Choices
}

interface Props {
    onClick: {
        increase: () => void
        decrease?: () => void
    }
    data: ValidData[]
    validField: 'profile' | 'link'
    icons?: boolean
}

export function InputData({ onClick, data, validField, icons }: Props) {
    const { selectedLang } = useContext(UserContext)

    const { increase, decrease } = onClick

    const iconsMap: any = {
        linkedin: <IoLogoLinkedin />,
        twitter: <IoLogoTwitter />,
        portfolio: <PiSuitcaseSimple />,
        resume: <IoDocumentOutline />,
        github: <IoLogoGithub />,
        behance: <IoLogoBehance />,
    }

    function defaultInput(field: ValidData) {
        return (
            <Input
                fieldName={`formfolio-${validField}-${field.name}`}
                type={field.type || 'text'}
                label={field.label}
            />
        )
    }

    function inputWithIcon(field: ValidData) {
        return (
            <div className="flex items-center">
                {icons && <i className="mx-1">{iconsMap[field.name]}</i>}

                <Input
                    fieldName={`formfolio-${validField}-${field.name}`}
                    type={field.type || 'text'}
                    label={field.label}
                />
            </div>
        )
    }

    return (
        <>
            {data.map((field) =>
                icons ? inputWithIcon(field) : defaultInput(field)
            )}

            {decrease && (
                <Button
                    onClick={decrease}
                    value={selectedLang === 'EN' ? 'Prev' : 'Anterior'}
                />
            )}

            <Button
                onClick={increase}
                value={selectedLang === 'EN' ? 'Next' : 'Siguiente'}
            />
        </>
    )
}
