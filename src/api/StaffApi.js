import AxiosClient from "./AxiosClient";

export const loadStaffApi = () => {
  const url = "/get-list-staff";
  return AxiosClient.get(url);
};
export const deleteStaffApi = (data) => {
  
  const url = "/delete-staff";
  return AxiosClient.post(url, JSON.stringify(data));
};
export const insertStaffApi = (data) => {

  const url = "/insert-staff";
  return AxiosClient.post(url, JSON.stringify(data));
};
export const updateStaffApi = (data) => {
  const url = "/update-staff-info";
  return AxiosClient.post(url, JSON.stringify(data));
};
