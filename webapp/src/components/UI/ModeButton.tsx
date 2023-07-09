import { useContext } from 'react'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { UserContext } from '../../contexts/userContext'
import classes from './modebutton.module.css'

export function ModeButton() {
    const { isModeChanged, setIsModeChanged } = useContext(UserContext)

    function toggleDarkLightMode(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        setIsModeChanged((prevState) => !prevState)

        const button = (e.target as HTMLButtonElement).closest('button')

        if (!isModeChanged) {
            button?.classList.remove(classes.moveToLeft)
            button?.classList.add(classes.moveToRight)
        } else {
            button?.classList.remove(classes.moveToRight)
            button?.classList.add(classes.moveToLeft)
        }
    }

    return (
        <div className={`${classes.div} mx-4`}>
            <button className={classes.button}>
                <i
                    className={`text-xs ${
                        !isModeChanged ? 'text-aqua-100' : 'text-orange-700'
                    }`}
                    onClick={toggleDarkLightMode}
                >
                    {!isModeChanged ? (
                        <BsFillMoonStarsFill />
                    ) : (
                        <BsFillSunFill />
                    )}
                </i>
            </button>
        </div>
    )
}
