import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : `https://afternoon-castle-79881.herokuapp.com/api`
})