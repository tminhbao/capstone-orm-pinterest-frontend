import axios from "axios";
import { history } from "..";
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from "../constants";
import { notification } from "antd";
import { openNotificationWithIcon } from "./notification";

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

http.interceptors.request.use(
  (config: any) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem(USER_LOGIN) || "{}").accessToken
      }`,
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// export const httpb = axios.create({
//     baseURL:'https://shop2.cyberlearn.vn'
// })
//Cấu hình cho tất cả các response api
http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    //Bắt lỗi 400 hoặc 404
    if (err.response?.status === 400 || err.response?.status === 404) {
      //Lỗi do tham số => backend trả về 400 hoặc 404 mình sẽ xử lý

      //chuyển hướng về home
      // history.push("/");
      notification.open({
        message: "Error",
        description: "Tham số không hợp lệ",
      });
      openNotificationWithIcon("error", "Tham số không hợp lệ");
      history.push("/");
    }
    if (err?.response?.status === 401 || err.response?.status === 403) {
      // removeStore(ACCESS_TOKEN);
      // removeStore(USER_LOGIN);
      //Chuyển hướng trang dạng f5
      // window.location.href = "";
      // history.push("/");
    }
    openNotificationWithIcon("error", "Quyền truy cập không hợp lệ");
    history.push("/");
    return Promise.reject(err);
  }
);
export const catchErro = (erro: number) => {
  console.log(erro);
  if (erro === 400 || erro === 404) {
    //Lỗi do tham số => backend trả về 400 hoặc 404 mình sẽ xử lý
    alert("tham số không hợp lệ !");
    //chuyển hướng về home
    // history.push("/");
  }
  if (erro === 401 || erro === 403) {
    // removeStore(ACCESS_TOKEN);
    // removeStore(USER_LOGIN);
    //Chuyển hướng trang dạng f5
    // window.location.href = "";
    // history.push("/");
    alert("Không hợp lệ!");
  }
};
