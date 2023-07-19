import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'
import { useRegister } from '../../hooks/useRegister'
import { Education, InputData, SkillsArea, WorkExperience } from './index'
import utils from '../../utils'

export function RegisterForm() {
    const { selectedLang, isModeChanged } = useContext(UserContext)
    const { decreaseOption, handleRegister, increaseOption, option } =
        useRegister()

    const renderList = [
        <InputData
            onClick={{ increase: increaseOption }}
            data={utils.getUserInfo()}
            validField="profile"
        />,
        <WorkExperience
            onClick={{
                increase: increaseOption,
                decrease: decreaseOption,
            }}
        />,
        <Education
            onClick={{
                increase: increaseOption,
                decrease: decreaseOption,
            }}
        />,
        <InputData
            data={utils.getUserLinks()}
            onClick={{
                increase: increaseOption,
                decrease: decreaseOption,
            }}
            validField="link"
            icons
        />,
        <SkillsArea
            fieldName="formfolio-skills"
            onClick={{ decrease: decreaseOption, save: handleRegister }}
        />,
    ]

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
            }}
            className={`md:p-4 md:border-2 rounded-md md:shadow-lg ${
                !isModeChanged
                    ? 'text-light border-aqua-50 md:shadow-aqua-100'
                    : 'text-dark border-aqua-100 md:shadow-aqua-50'
            } md:w-3/4 md:ml-[12.5%] lg:w-3/5 lg:ml-[20%]`}
        >
            <h2 className="mt-6">
                {utils.getAppTexts().appMessages[option][selectedLang]}
            </h2>
            <hr
                className={`my-3 border-1 ${
                    !isModeChanged ? 'border-light' : 'border-dark'
                }`}
            />

            {renderList[option]}
        </form>
    )
}
