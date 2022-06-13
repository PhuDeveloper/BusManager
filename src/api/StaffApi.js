import AxiosClient from "./AxiosClient";

export const getStaffApi = () => {
  const url = "/get-list-staff";
  return AxiosClient.get(url);

};
export const getListStaffEmptyWorkTodayApi = (data) => {

  const url = "/get_list_staff_empty_work_today";
  return AxiosClient.post(url, JSON.stringify(data));
};
export const deleteStaffApi = (data) => {

  const url = "/delete-staff";
  return AxiosClient.post(url, JSON.stringify(data));
};
export const addStaffApi = (data) => {

  const url = "/insert-staff";
  return AxiosClient.post(url, JSON.stringify(data));
};
export const updateStaffApi = (data) => {
  const url = "/update-staff-info";
  return AxiosClient.post(url, JSON.stringify(data));
};
