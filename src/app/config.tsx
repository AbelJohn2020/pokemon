import axios from "axios";

export const pokeApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})