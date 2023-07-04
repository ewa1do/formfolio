/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APIKEY: string
    readonly VITE_REQUEST_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
