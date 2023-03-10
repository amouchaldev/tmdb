import axios from "axios";
export const tmdbApi = axios.create({
    baseURL: `https://api.themoviedb.org/3/`
})
export const api_key = import.meta.env.VITE_APP_TMDB_API_KEY;
 


export const backEndApi = axios.create({
    baseURL: import.meta.env.VITE_APP_BACK_END_URL,
    withCredentials: true
})
 
export const csrf = () => backEndApi.get('/sanctum/csrf-cookie')
