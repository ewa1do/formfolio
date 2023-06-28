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

    return (
        <ul>
            {Object.entries(links).map(([value, link]) => {
                return (
                    <li key={`link-${value}`}>
                        <button
                            data-link={link}
                            onClick={getMetadataAndCopyToClipboard}
                        >
                            {value}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
