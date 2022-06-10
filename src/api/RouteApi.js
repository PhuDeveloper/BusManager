import AxiosClient from "./AxiosClient";
export const getRouteApi = () => {
    const url = "/get-list-route"
    return AxiosClient.get(url)
}
export const addRouteApi = (data) => {
    const url = "/insert-route"
    return AxiosClient.post(url, JSON.stringify(data))
}
export const updateRouteApi = (data) => {
    const url = "/update-route"
    return AxiosClient.put(url, JSON.stringify(data))
}