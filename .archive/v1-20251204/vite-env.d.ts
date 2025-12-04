/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly API_KEY: string
    readonly CAL_API_KEY?: string
    readonly CAL_USERNAME?: string
    readonly CAL_EVENT_TYPE?: string
    readonly CAL_BOOKING_LINK?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
