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
    console.log('data', data);
    const url = "/update-station"
    return AxiosClient.post(url, JSON.stringify(data))
}