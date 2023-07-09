import {
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoGithub,
    IoCloudSharp,
    IoLogoBehance,
} from 'react-icons/io5'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { MouseEvent, useContext } from 'react'
import { LOCALSTORAGE_KEYS, UserLinks } from '../../models'
import Utils from '../../utils'
import { Title } from '../UI/Title'
import { UserContext } from '../../contexts/userContext'

export function Links() {
    const links = Utils.getFields<UserLinks>(LOCALSTORAGE_KEYS.LINK)

    const { isModeChanged } = useContext(UserContext)

    async function getMetadataAndCopyToClipboard(
        e: MouseEvent<HTMLButtonElement>
    ) {
        const target = e.target as HTMLButtonElement

        const linkbtn = target.closest('button')
        const metadata = linkbtn?.getAttribute('data-link') as string

        try {
            await navigator.clipboard.writeText(metadata)

            console.log('Text copied to clipboard')
        } catch (error) {
            console.log(error)
        }
    }

    const iconsMap: any = {
        linkedin: <IoLogoLinkedin />,
        twitter: <IoLogoTwitter />,
        portfolio: <PiSuitcaseSimple />,
        resume: <IoCloudSharp />,
        github: <IoLogoGithub />,
        behance: <IoLogoBehance />,
    }

    return (
        <section>
            <Title text="Links" />
            <ul className="flex">
                {Object.entries(links).map(([value, link]) => {
                    return (
                        <li
                            key={`link-${value}`}
                            className={`text-2xl mr-1 md:mr-3 border-2 p-1 rounded-md flex ${
                                isModeChanged
                                    ? 'border-aqua-100'
                                    : 'border-aqua-50'
                            } `}
                        >
                            <button
                                data-link={link}
                                onClick={getMetadataAndCopyToClipboard}
                            >
                                {iconsMap[value]}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
