export enum LOCALSTORAGE_KEYS {
    ISREGISTERED = 'isRegistered',
    LINK = 'formfolio-link',
    PROFILE = 'formfolio-profile',
    SKILLS = 'formfolio-skills',
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
