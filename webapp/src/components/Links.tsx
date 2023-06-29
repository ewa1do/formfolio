import {
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoGithub,
    IoCloudSharp,
    IoLogoBehance,
} from 'react-icons/io5'
import { PiSuitcaseSimple } from 'react-icons/pi'
import { MouseEvent } from 'react'
import { UserLinks } from '../models/ProfileData'
import Utils from '../utils'

export function Links() {
    const links = Utils.getFields<UserLinks>('formfolio-link')

    async function getMetadataAndCopyToClipboard(
        e: MouseEvent<HTMLButtonElement>
    ) {
        const target = e.target as HTMLButtonElement
        const metadata = target.getAttribute('data-link') as string

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
            <h3>Links</h3>
            <ul>
                {Object.entries(links).map(([value, link]) => {
                    return (
                        <li key={`link-${value}`}>
                            <i
                                data-link={link}
                                onClick={getMetadataAndCopyToClipboard}
                            >
                                {iconsMap[value]}
                            </i>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
