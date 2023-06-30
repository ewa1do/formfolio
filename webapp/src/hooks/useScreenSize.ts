import { useState, useEffect } from 'react'

interface ScreenSize {
    width: number
    height: number
}

interface Breakpoints {
    mobile: number
    tablet: number
    desktop: number
}

function breakpoints(): Breakpoints {
    return {
        mobile: 425,
        tablet: 768,
        desktop: 1020,
    }
}

function getScreenDimensions() {
    const { innerHeight: height, innerWidth: width } = window

    return { width, height }
}

type Hook = {
    screenSize: ScreenSize
    breakpoints: () => Breakpoints
}

function useScreenSize(): Hook {
    const [screenSize, setScreenSize] = useState<ScreenSize>({
        height: 0,
        width: 0,
    })

    useEffect(() => {
        setScreenSize(getScreenDimensions())
    }, [])

    useEffect(() => {
        const updateSize = () => {
            setScreenSize(getScreenDimensions())
        }

        window.addEventListener('resize', updateSize)

        return () => {
            window.removeEventListener('resize', updateSize)
        }
    }, [screenSize])

    return {
        screenSize,
        breakpoints,
    }
}

export default useScreenSize
