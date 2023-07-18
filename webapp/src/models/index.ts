export enum LOCALSTORAGE_KEYS {
    ISREGISTERED = 'isRegistered',
    LINK = 'formfolio-link',
    PROFILE = 'formfolio-profile',
    SKILLS = 'formfolio-skills',
    WORK_EXP = 'formfolio-work-experience',
    COVER_LETTERS = 'formfolio-cover-letters',
    EDUCATION = 'formfolio-education',
    LANG = 'formfolio-preferred-language',
}

export enum Mode {
    LIGHT = '#EEE',
    DARK = '#212121',
}

export interface Choices {
    EN: string
    ES: string
}
export interface FormFolioTexts {
    appMessages: Choices[]
    workExperience: {
        title: Choices
        placeholders: {
            charge: Choices
            company: Choices
            description: Choices
        }
    }
    coverLetter: {
        generate: Choices
        history: Choices
        placeholders: {
            company: Choices
            charge: Choices
        }
        button: Choices
    }
    education: {
        title: Choices
        placeholders: {
            title: Choices
            institution: Choices
        }
    }
    skills: Choices
}

export interface InfoView {
    name: string
    type?: string
    label: Choices
}

export interface UserInformation {
    email: string
    job_title: string
    lastname: string
    name: string
    phone_number: string
}

export interface UserLinks {
    linkedin: string
    portfolio: string
    resume: string
    twitter: string
}

export interface ValidInfo {
    name: string
    type?: string
    icon?: string
}

export interface WorkExperience {
    charge: string
    company: string
    description: string
}

export type Elements = 'border' | 'decoration' | 'text'

export type Langs = 'ES' | 'EN'
export const DEFAULT_LANG = 'EN'

export interface ICoverLetter {
    charge: string
    company: string
    letter: string
}
