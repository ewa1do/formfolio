import { ReactElement, useContext } from 'react'
import { IoMdClose } from 'react-icons/io'
import { UserContext } from '../../contexts/userContext'
import classes from './modal.module.css'

interface Props {
    children: ReactElement
}

export function Modal({ children }: Props) {
    function closeModal() {
        setIsModalOpen(false)
    }

    const { isModeChanged, setIsModalOpen } = useContext(UserContext)

    return (
        <section
            className={`${classes.overlay}`}
            onClick={(e) => {
                const target = e.target as HTMLSelectElement

                const [targetClass] = [...target.classList]

                if (targetClass?.includes('overlay')) {
                    closeModal()
                }
            }}
        >
            <div
                className={`${classes.modal} ${classes.slide_right} ${
                    !isModeChanged ? 'bg-dark' : 'bg-light'
                }`}
            >
                <button onClick={closeModal} className="ml-[95%]">
                    <i>
                        <IoMdClose />
                    </i>
                </button>

                {children}
            </div>
        </section>
    )
}
