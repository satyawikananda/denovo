import { BASE_ENDPOINT, AWS } from "../../config/base.ts"

export const ovoPost = async (uri: string, data:{}, headers: {}) => {
    const response = await fetch(`${BASE_ENDPOINT}${uri}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data, null, 2)
    }) 
    return response.json()
}

export const ovoGet = async (uri: string, qs: any, headers: {}) => {
    const url = new URL(`${BASE_ENDPOINT}${uri}`),
        params = qs
    Object.keys(params)
     .forEach((key) => url.searchParams.append(key, params[key]))
    const response = await fetch(url, {
        method: "GET",
        headers: headers
    })
    return response.json()
}