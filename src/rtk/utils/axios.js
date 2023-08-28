import axios from "axios";
// import { toast } from "react-toastify";
// import { store } from "../store";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {

    // const token = JSON.parse(getter("user"))?.access_token;
    // if (token) {
    //   config.headers.Authorization = `${token}`;
    // }
    // config.headers["Cache-Control"] = "no-cache";
    // config.headers["Pragma"] = "no-cache";
    // config.headers["Expires"] = "0";
    // config.headers["If-Modified-Since"] = "0";
    if (config?.body) {
      config.data = config.body;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  // async (error) => {
  //   const originalRequest = error.config;
  //   if (
  //     error.response.status === 411 &&
  //     !originalRequest._retry &&
  //     JSON.parse(getter("user"))?.refresh_token
  //   ) {
  //     originalRequest._retry = true;
  //     try {
  //       const response = await axios.post(process.env.REACT_APP_BASE_URL + "user/actions/refresh-token", {
  //         refresh_token: JSON.parse(getter("user"))?.refresh_token,
  //       }, {  });
  //       // store.dispatch(setUser(response?.data));
  //       // console.log(response,"")
  //       // store.dispatch(
  //       //   setUser((prevState) => {
  //       //     return {
  //       //       ...prevState,
  //       //       access_token: response?.data?.access_token,
  //       //       refresh_token: response?.data?.refresh_token
  //       //     }
  //       //   })
  //       // );
  //       setter("user", JSON.stringify(response?.data));
  //       return instance(originalRequest);
  //     } catch (err) {
  //       if (err?.response?.status === 404) {
  //         store.dispatch(clearAuth());
  //         store.dispatch(sign_Out());
  //         window.location.href = "/";
  //       }
  //       // store.dispatch(clearAuth());
  //       // store.dispatch(sign_Out());
  //       // window.location.href = "/";
  //       return Promise.reject(error);
  //     }
  //   }
  //   else if (error?.response?.status === 404) {
  //     store.dispatch(clearAuth());
  //     store.dispatch(sign_Out());
  //     window.location.href = "/";
  //   } else {
  //     toast.error(error?.response?.data?.error || "something went wrong");
  //     return Promise.reject(error);
  //   }
  // }
);

export default instance;