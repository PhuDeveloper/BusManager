import AxiosClient from "./AxiosClient";
export const getRouteApi = () => {
    const url = "/get-list-route"
    return AxiosClient.get(url)
}
export const addRouteApi = (data) => {
    const url = "/insert-route"
    return AxiosClient.post(url, JSON.stringify(data))
}
export const addBusRouteApi = (data) => {
    const url = "/insert-bus-route"
    return AxiosClient.post(url, JSON.stringify(data))

}
export const updateRouteApi = (data) => {
    const url = "/update-route"
    return AxiosClient.post(url, JSON.stringify(data))
}
export const getCharJs = (data) => {
    const url = "/count-student-by-route-in-semester"
    return AxiosClient.post(url, JSON.stringify(data))

}
export const getListBusRouteBySemesterApi = (data) => {
    const url = "/get-list-bus-route-by-semester"
    return AxiosClient.post(url, JSON.stringify(data))

}
