import { useEffect, useState } from 'react'

import Utils from '../utils'

export function useOpenAIRequest(prompt: string) {
    const [response, setResponse] = useState<{
        loading: boolean
        data: string
    }>({ data: '', loading: true })

    useEffect(() => {
        setResponse({ data: '', loading: true })

        async function send() {
            await sendRequest()
        }
        send()
    }, [])

    async function sendRequest() {
        const letterResponse = await Utils.sendOpenAIRequest(prompt)

        setResponse({ data: letterResponse, loading: false })
    }

    return { sendRequest, response }
}
