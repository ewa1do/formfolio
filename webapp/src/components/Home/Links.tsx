import { MouseEvent, useContext } from 'react'
import { PiSuitcaseSimple } from 'react-icons/pi'
import {
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoGithub,
    IoLogoBehance,
    IoDocumentOutline,
} from 'react-icons/io5'
import { UserContext } from '../../contexts/userContext'
import { Title } from '../UI/Title'
import { Notification } from '../UI/Notification'
import { useNotification } from '../../hooks/useNotification'
import { LOCALSTORAGE_KEYS, UserLinks } from '../../models'
import utils from '../../utils'

export function Links() {
    const links = utils.getFields<UserLinks>(LOCALSTORAGE_KEYS.LINK)
    const { isModeChanged, selectedLang } = useContext(UserContext)
    const { showNotification, triggerNotification } = useNotification()
    const { notification } = utils.getAppTexts()

    async function getMetadataAndCopyToClipboard(
        e: MouseEvent<HTMLButtonElement>
    ) {
        const target = e.target as HTMLButtonElement

        const linkbtn = target.closest('button') as HTMLButtonElement
        const metadata = linkbtn?.getAttribute('data-link') as string

        try {
            await navigator.clipboard.writeText(metadata)
            triggerNotification()
        } catch (error) {
            console.log(error)
        }
    }

    const iconsMap: any = {
        linkedin: <IoLogoLinkedin />,
        twitter: <IoLogoTwitter />,
        portfolio: <PiSuitcaseSimple />,
        resume: <IoDocumentOutline />,
        github: <IoLogoGithub />,
        behance: <IoLogoBehance />,
    }

    return (
        <>
            <section>
                <Title text="Social" />
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
                                {showNotification && (
                                    <Notification
                                        message={notification[selectedLang]}
                                    />
                                )}
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}
