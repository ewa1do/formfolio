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
}

export default new Utilities()
