import { BASE_ENDPOINT, AWS } from "../../config/base.ts"

export const ovoPost = async (uri: string, data:{}, headers: {}) => {
    const response = await fetch(`${BASE_ENDPOINT}${uri}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data, null, 2)
    }) 
    return response.json()
}