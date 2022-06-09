import AxiosClient from "./AxiosClient";
export const getRouterApi = () => {
    const url = "/get-list-router"
    return AxiosClient.get(url)
}
export const addRouterApi = (data) => {
    const url = "/insert-router"
    return AxiosClient.post(url, JSON.stringify(data))
}
export const updateRouterApi = (data) => {
    const url = "/update-router"
    return AxiosClient.put(url, JSON.stringify(data))
}