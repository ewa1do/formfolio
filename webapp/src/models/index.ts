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
