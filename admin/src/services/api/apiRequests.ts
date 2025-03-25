import { axiosInstance } from "./axiosDefault";

export const apiRequest = (method: any, url: any, data = {}, token: any) => {
  const response = axiosInstance(token)({
    method,
    url,
    data,
    token,
  });
  return response;
};
