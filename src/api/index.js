import axios from "axios";
import { config } from "../config";

export const getCities = () => new Promise((resolve, reject) => {
  axios.get(`${config.apiUrl}/property/cityList`)
    .then((response) => resolve(response.data.data))
    .catch((response) => reject(response))
});

export const getLocalities = () => new Promise((resolve, reject) => {
  axios.get(`${config.apiUrl}/property/locationlist`)
    .then((response) => resolve(response.data.data))
    .catch((response) => reject(response))
});