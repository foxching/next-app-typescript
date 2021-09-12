export const getAllTodos = async (apiUrl: string) => {
    const response = await fetch(apiUrl)
    const data = response.json()
    return data
}

export const getAllUsers = async (apiUrl: string) => {
    const response = await fetch(apiUrl)
    const data = response.json()
    return data
}

export const getUser = async (apiUrl: string) => {
    const response = await fetch(apiUrl)
    const data = response.json()
    return data
}