import axios from "axios";
import { config } from "../config";

export const loginAction = () => new Promise((resolve, reject) => {
  axios.post(`${config.apiUrl}/user/login`, { phoneNumber: 9711890104 })
    .then((response) => {
      if (response.status === 200) {
        const { data } = response.data;

        resolve(data);
      } else {
        reject(response?.data.errors || response?.data.msg || new Error('Internal server error.'));
      }
    })
    .catch((error) => {
      reject(error?.response?.data.errors || error?.response?.data.msg || new Error('Internal server error'));
    });
});