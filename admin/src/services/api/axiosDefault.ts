import axios from "axios";

export const axiosInstance = (token: any) => {
  const instance = axios.create({
    headers: {
      Accept: "application/json",
      ...(token && {
        authorization: "Bearer " + token,
      }),
    },
  });

  // maybe we can add an interceptor, which checks if token is expired and refreshes it.

  return instance;
};
