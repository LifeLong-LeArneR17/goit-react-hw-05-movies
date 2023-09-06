import axios from "axios";
const LOCAL_KEY = '1deae1a36202e3ac8c29219a3d453e0f';
const BASE_URL = 'https://api.themoviedb.org/3';
export const trendingMovieFetch = async (movie) => {
   const {data} = await axios.get(`${BASE_URL}`, {
    params: {
        api_key: LOCAL_KEY,
    }
   });
   return data
}