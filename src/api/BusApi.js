import AxiosClient from "./AxiosClient";

export const getBusApi = () => {
    const url = "/get-list-bus"
    return AxiosClient.get(url)
}
export const getByDateBusApi = (data) => {
    const url = "/get-list-unassigned-bus-in-semester-by-date"
    return AxiosClient.post(url, JSON.stringify(data))
}
export const getBySemesterBusApi = (data) => {
    const url = "/get-list-unassigned-bus-in-semester"
    return AxiosClient.post(url, JSON.stringify(data))
}
