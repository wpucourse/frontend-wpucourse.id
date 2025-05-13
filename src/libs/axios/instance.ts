import environment from "@/config/environment";
import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
  Expires: "0",
};

const instance = axios.create({
  baseURL: environment.WPU_AI_SERVICE,
  headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  (request) => request,
  (error) => {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
    const message = typeof error === "string" ? error : JSON.stringify(error);
    return Promise.reject(new Error(message));
  },
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error instanceof Error) {
      return Promise.reject(error);
    }

    const message = typeof error === "string" ? error : JSON.stringify(error);
    return Promise.reject(new Error(message));
  },
);

export default instance;
