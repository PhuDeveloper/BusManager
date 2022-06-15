import AxiosClient from "./AxiosClient";

export const getScheduleApi = () => {
    const url = "/get-list-driver-work-date"
    return AxiosClient.get(url)
}
export const getByDateScheduleApi = (data) => {
    const url = "/get_list_staff_empty_work_today"
    return AxiosClient.post(url, JSON.stringify(data))
}
export const addScheduleApi = (data) => {
    const url = "/insert-drive-schedule"
    return AxiosClient.post(url, JSON.stringify(data))
}