import AxiosClient from "./AxiosClient";

export const loginStaff = (data) => {
    const url = "/login-staff"
    return AxiosClient.post(url, JSON.stringify(data))
}

export const loginParent = (data) => {
    const url = "/login-parent"
    return AxiosClient.post(url, JSON.stringify(data))
}
export const changePasswordStaff = (data) => {
    const url = "/change-password-staff"
    return AxiosClient.post(url, JSON.stringify(data))
}
