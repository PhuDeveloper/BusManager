import AxiosClient from "./AxiosClient";
export const SelectGetApi = (url) => {
    return AxiosClient.get(url)
}
export const SelectPostApi = (url, data) => {
    return AxiosClient.post(url, JSON.stringify(data))
}