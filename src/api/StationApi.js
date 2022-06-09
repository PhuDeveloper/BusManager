import AxiosClient from "./AxiosClient";
export const getStationApi = () => {
    const url = "/get-list-station"
    return AxiosClient.get(url)
}
export const addStationApi = (data) => {
    const url = "/insert-station"
    return AxiosClient.post(url, JSON.stringify(data))
}
export const updateStationApi = (data) => {
    const url = "/update-station"
    return AxiosClient.put(url, JSON.stringify(data))
}