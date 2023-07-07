import { ValidInfo, WorkExperience } from '../models'

class Utilities {
    protected defaultWorkExpLength = 3

    protected userInfo = [
        {
            name: 'name',
        },
        {
            name: 'lastname',
        },
        {
            name: 'job_title',
        },
        {
            name: 'email',
            type: 'email',
        },
        {
            name: 'phone_number',
            type: 'number',
        },
    ]

    protected userLinks = [
        {
            name: 'twitter',
        },
        {
            name: 'linkedin',
        },
        {
            name: 'portfolio',
        },
        {
            name: 'resume',
        },
    ]

    protected colors = [
        'rgb(185 28 28)',
        'rgb(15 118 110)',
        'rgb(21 128 61)',
        'rgb(194 65 12)',
        'rgb(161 98 7)',
        'rgb(109 40 217)',
    ]

    /**
     * @param name the name to be formatted MUST HAVE PATTERN word-word-...
     * @param view optional param to check if the function will be rendered as a view
     * @returns a string with a name sanitized
     */
    public sanitizeInput(name: string, view = false) {
        let nameSatinized: string | string[] = name.split('-')
        nameSatinized = nameSatinized[nameSatinized.length - 1]

        if (view && nameSatinized.includes('_')) {
            nameSatinized = nameSatinized.split('_').join(' ')
        }
        return nameSatinized
    }

    /**
     * @param delimiter: string to be use to split the matches
     * @returns An object from the localStorage with all the data corresponding to the delimeter
     */
    public getFields<T>(delimiter: string): T {
        const data = Object.entries(localStorage)
            .filter((arr) => arr[0].includes(delimiter))
            .map((arr) => [this.sanitizeInput(arr[0]), arr[1]])

        return Object.fromEntries(data)
    }

    private getInfo(arr: ValidInfo[]) {
        return arr
    }

    public getUserInfo() {
        return this.getInfo(this.userInfo)
    }

    public getUserLinks() {
        return this.getInfo(this.userLinks)
    }

    getDefaultWorkExpLength() {
        return this.defaultWorkExpLength
    }

    /**
     * @param length number of initial objects inside the aray
     * @returns an arary of type WorkExperience depending of the length provided
     */
    generateInitialData(length = this.defaultWorkExpLength): WorkExperience[] {
        return Array.from({ length }, () => ({
            charge: '',
            company: '',
            description: '',
        }))
    }

    /**
     * @param prompt string to be sent to OpenAI which generates a response
     * @returns A server response generated by AI
     */
    async sendOpenAIRequest(prompt: string) {
        const APIKEY = import.meta.env.VITE_APIKEY
        const URL = import.meta.env.VITE_REQUEST_URL

        try {
            const res = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json',
                    Authorization: `Bearer ${APIKEY}`,
                },
                body: JSON.stringify({
                    model: 'text-davinci-003',
                    prompt,
                    max_tokens: 400,
                    temperature: 0.7,
                }),
            })

            const data = await res.json()

            return data.choices[0].text
        } catch (error) {
            console.error('ERROR', error)
        }
    }

    /**
     * @param skill string containig the skill the user have Ex: javascript, php...
     * @returns A capitalized skill string
     */
    public capitalizeSkill(skill: string) {
        const wordCapitalized = (word: string) =>
            word[0].toUpperCase() + word.slice(1)

        if (skill.split(' ').length > 1) {
            return skill
                .split(' ')
                .map((word) => wordCapitalized(word))
                .join(' ')
        }

        if (skill.toLowerCase() === 'php') return skill.toUpperCase()

        if (skill.includes('script')) {
            const scriptSubstrStartsAt = skill.indexOf('script')

            return (
                wordCapitalized(skill.slice(0, scriptSubstrStartsAt)) +
                wordCapitalized(skill.slice(scriptSubstrStartsAt))
            )
        }

        return wordCapitalized(skill)
    }

    public getColors() {
        return this.colors
    }
}

export default new Utilities()
