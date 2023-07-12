import { Dispatch, SetStateAction, useContext } from 'react'
import { IoMdClose } from 'react-icons/io'
import { ICoverLetter, UserInformation } from '../../models'
import { UserContext } from '../../contexts/userContext'
import utils from '../../utils'
import classes from './modal.module.css'

interface Props {
    content: ICoverLetter
    handler: Dispatch<
        SetStateAction<{ isOpen: boolean; content: ICoverLetter }>
    >
}

export function Modal({ content, handler }: Props) {
    const { job_title: jobTitle } = utils.getFields<UserInformation>('profile')

    function closeModal() {
        handler({ isOpen: false, content: {} as ICoverLetter })
    }

    const { isModeChanged } = useContext(UserContext)

    return (
        <section
            className={classes.overlay}
            onClick={(e) => {
                const target = e.target as HTMLSelectElement
                const [targetClass] = [...target.classList]

                if (targetClass?.includes('overlay')) {
                    closeModal()
                }
            }}
        >
            <div
                className={`${classes.modal} ${
                    !isModeChanged ? 'bg-dark' : 'bg-light'
                }`}
            >
                <button onClick={closeModal} className="ml-[95%]">
                    <i>
                        <IoMdClose />
                    </i>
                </button>

                <div>
                    <h3 className="capitalize">
                        {content.charge || jobTitle} @{' '}
                        {content.company || 'Default'}
                    </h3>
                    <p className="my-2">{content.letter}</p>
                </div>
            </div>
        </section>
    )
}
