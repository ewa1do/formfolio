import {
    LOCALSTORAGE_KEYS,
    ValidInfo,
    WorkExperience,
    Elements,
    Langs,
    FormFolioTexts,
    InfoView,
} from '../models'

class Utilities {
    protected languages: Langs[] = ['ES', 'EN']
    protected defaultWorkExpLength = 3

    protected userInfo: InfoView[] = [
        {
            name: 'name',
            label: {
                ES: 'Nombre',
                EN: 'Name',
            },
        },
        {
            name: 'lastname',
            label: {
                ES: 'Apellido',
                EN: 'Lastname',
            },
        },
        {
            name: 'job_title',
            label: {
                ES: 'Título Profesional',
                EN: 'Job Title',
            },
        },
        {
            name: 'email',
            type: 'email',
            label: {
                EN: 'e-mail',
                ES: 'e-mail',
            },
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
        {
            name: 'behance',
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

    protected formfolioTexts: FormFolioTexts = {
        appMessages: [
            {
                EN: 'Welcome to FormFolio, the only app you will need to fill job forms,\nlets begin adding your personal information',
                ES: 'Bienvenid@ a FormFolio, la única app que necesitarás para llenar formularios de empleo,\n empecemos por agregar tu infomación personal',
            },
            {
                EN: "Add your work experience if you have, if not don't worry I'm sure you're going to find it soon",

                ES: 'Agrega tu experiencia laboral, si no posees no te preocupes, estoy seguro que pronto encontrarás algo',
            },
            {
                EN: 'Add your last educational background, can be College, Courses, Bootcamps...',
                ES: 'Agrega la última educacion formal que recibiste, puede ser Universidad, Cursos, Bootcamps...',
            },
            {
                EN: 'Add links to your sites, this way it will easier for you to fill forms, just copy and paste',
                ES: 'Agrega enlaces a tus sitios, así será más facil para ti llenar formularios, solo copia y pega',
            },
            {
                EN: 'Finally add some skills you have',
                ES: 'Finalmente agrega algunas habilidades que sepas',
            },
        ],
        workExperience: {
            title: {
                EN: 'Work Experience',
                ES: 'Experiencia Laboral',
            },
            placeholders: {
                charge: {
                    EN: 'Backend Developer',
                    ES: 'Desarrollador Backend',
                },
                company: {
                    EN: 'Microsoft',
                    ES: 'Mercado Libre',
                },
                description: {
                    EN: 'What were your job responsibilities?',
                    ES: 'Cuáles fueron tus responsabilidades?',
                },
            },
            noContent: {
                EN: 'Add some experience, remember that everything counts. Bootcamps, freelancing...',
                ES: 'Agrega alguna experiencia que poseas, recuerda que todo suma. Bootcamps, freelancing...',
            },
        },
        coverLetter: {
            generate: {
                EN: 'Generate Cover Letter',
                ES: 'Generar Carta de presentación',
            },
            history: {
                EN: 'Last Cover Letters',
                ES: 'Últimas Cartas',
            },
            placeholders: {
                charge: {
                    EN: 'Charge you are applying',
                    ES: 'Cargo al que aplicas',
                },
                company: {
                    EN: 'Company name',
                    ES: 'Nombre de la empresa',
                },
            },
            button: {
                EN: 'Generate!',
                ES: 'Generar!',
            },
        },
        education: {
            title: {
                EN: 'Education',
                ES: 'Educación',
            },
            placeholders: {
                institution: {
                    EN: 'Educational Center',
                    ES: 'Centro Educativo',
                },
                title: {
                    EN: 'Title Obtained',
                    ES: 'Título Conseguido',
                },
            },
        },
        skills: {
            title: {
                EN: 'Technical Skills',
                ES: 'Habilidades Técnicas',
            },
            placeholder: {
                EN: 'Separate your skills by Commas',
                ES: 'Separa tus skills por Comas',
            },
        },
        notification: {
            EN: 'Text copied to Clipboard!',
            ES: 'Texto copiado al Portapapeles!',
        },
    }

    public getAppTexts() {
        return this.formfolioTexts
    }

    public getColors() {
        return this.colors
    }

    public getLanguages() {
        return this.languages
    }

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
    public generateInitialWorkExperienceData(
        length = this.defaultWorkExpLength
    ): WorkExperience[] {
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

    generateCoverLetter(info: any) {
        return `I am excited to apply for the [Job Title] position at [Company Name]. With a proven track record in [Your Field of Expertise] and a deep passion for [Industry/Domain], 
        I believe I can bring valuable contributions to your esteemed organization. Throughout my career, I have honed my skills in [Key Skill 1], [Key Skill 2], and [Key Skill 3], which I believe align perfectly with the requirements for the [Job Title] role. My experience includes successfully [Briefly mention your relevant experience or achievements, e.g., leading projects, driving process improvements, or achieving business goals]. Additionally, I am adept at [Another skill or quality that makes you a great fit for the position, e.g., collaborating with cross-functional teams or adapting to dynamic challenges].
        I have had the privilege of working at [Previous Company/Organization], where I had the opportunity to [Briefly describe your responsibilities and accomplishments at your previous role]. My tenure at [Previous Company/Organization] further nurtured my ability to [mention a key strength or quality, e.g., communicate effectively, solve complex problems, or handle high-pressure situations], which I believe will be an asset in contributing to [Company Name]'s continued success.
        I have been following [Company Name]'s trajectory closely and am highly impressed by your commitment to [Company's Mission/Vision] and the transformative solutions you provide in the [Industry/Domain]. Your recent [Project/Product/Initiative] has captured my attention, and I am eager to contribute my expertise to support your mission and contribute to the growth of [Company Name].
        As a highly motivated and proactive professional, I am confident that my dedication and skills make me a strong candidate for the [Job Title] position. I am excited about the opportunity to join a talented team of professionals and collaborate on meaningful projects that positively impact the industry.
        Thank you for considering my application. I am eager to discuss how my qualifications and enthusiasm align with [Company Name]'s needs. Please find my resume attached for your review. I look forward to the possibility of meeting with you to further discuss my candidacy and learn more about the exciting opportunities at [Company Name].
        You can reach me at [Email Address] or [Phone Number] to schedule a call or interview at your convenience. Thank you for your time and consideration.
        Sincerely,
        [Your Name]
        `
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

    /**
     * gets the preferred language of the device and set it within the LocalStorage
     */
    public setFormFolioLanguage() {
        const preferredClientLanguage = navigator.language

        if (
            preferredClientLanguage.includes('ES') ||
            preferredClientLanguage.includes('es')
        ) {
            localStorage.setItem(LOCALSTORAGE_KEYS.LANG, 'ES')
        } else {
            localStorage.setItem(LOCALSTORAGE_KEYS.LANG, 'EN')
        }
    }

    /**
     *
     * @param state boolean variable to check which color return. Often used with the context
     * @param element tailwind element to apply the change (text, decoration, backgroud, etc...)
     * @returns A tailwind classname with a color based on the state
     */
    public changeColorDependingOfMode(state: boolean, element: Elements) {
        return !state ? element + '-aqua-50' : element + '-aqua-100'
    }

    /**
     *
     * @param paragraph string to be sliced
     * @returns an sliced string
     */
    public sliceParagraph(paragraph: string) {
        return paragraph.slice(0, paragraph.length / 6)
    }
}

export default new Utilities()
