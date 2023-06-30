import {
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoGithub,
    IoCloudSharp,
    IoLogoBehance,
} from 'react-icons/io5'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { MouseEvent } from 'react'
import { LOCALSTORAGE_KEYS, UserLinks } from '../../models'
import Utils from '../../utils'

export function Links() {
    const links = Utils.getFields<UserLinks>(LOCALSTORAGE_KEYS.LINK)

    console.log(links)

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
            <h3 className="font-montserrat">Links</h3>
            <ul className="flex">
                {Object.entries(links).map(([value, link]) => {
                    return (
                        <li key={`link-${value}`}>
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
