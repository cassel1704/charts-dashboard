import axios from "axios";

const BASE_API_URL = "";

function createInstance(baseURL: string) {
  const instance = axios.create({
    validateStatus: (status) => status >= 200 && status < 400,
    baseURL,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return instance;
}

export const axiosInstance = createInstance(BASE_API_URL);
