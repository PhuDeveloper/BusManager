import AxiosClient from "./AxiosClient";

export const getSemesterApi = () => {
    const url = "/get-list-driver-work-date"
    return AxiosClient.get(url)
}
export const getByDateSemesterApi = (data) => {
    const url = "/get_list_staff_empty_work_today"
    return AxiosClient.post(url, JSON.stringify(data))
}