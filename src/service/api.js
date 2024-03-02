import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN } from './index.js';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        accept: "application / json"
    },
    params: {
        language: "en-US"
    }
});


export default async function favoritesMovieList() {

    const responce = await instance.get("trending/movie/day")
    console.log("responce >>>", responce)
    return responce;
}

