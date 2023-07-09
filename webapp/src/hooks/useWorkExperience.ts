import { useEffect, useState, ChangeEvent } from 'react'
import { LOCALSTORAGE_KEYS, WorkExperience } from '../models'
import Utils from '../utils'

export function useWorkExperience() {
    const [workExp, setWorkExp] = useState<WorkExperience[]>(
        JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.WORK_EXP))
    )

    if (!workExp) {
        setWorkExp(Utils.generateInitialWorkExperienceData())

        localStorage.setItem(
            LOCALSTORAGE_KEYS.WORK_EXP,
            JSON.stringify(Utils.generateInitialWorkExperienceData())
        )
    }

    function handleStateIndex(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) {
        setWorkExp((prev) => {
            const { name, value } = event.target

            const updatedItems = [...prev]

            const workExpSavedInLocalStorage = localStorage.getItem(
                LOCALSTORAGE_KEYS.WORK_EXP
            )

            updatedItems[index] = {
                ...updatedItems[index],
                [name]: value,
            }

            if (workExpSavedInLocalStorage) {
                const parsedData: WorkExperience[] = JSON.parse(
                    workExpSavedInLocalStorage
                )

                parsedData[index][name] = value

                localStorage.setItem(
                    LOCALSTORAGE_KEYS.WORK_EXP,
                    JSON.stringify(parsedData)
                )
            }

            return updatedItems
        })
    }

    return { workExp, handleStateIndex }
}
