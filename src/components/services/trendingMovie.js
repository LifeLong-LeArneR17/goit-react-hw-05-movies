import axios from "axios";
const LOCAL_KEY = 'dbd314dafc757a97deb6caae78df9adf';
const BASE_URL = 'https://api.themoviedb.org/3';
export const trendingMovieFetch = async () => {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/week`, {
    params: {
        api_key: LOCAL_KEY,
        page: 1,
    }
   });
   
   return data.results
}

export const movieDetailsFetch = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
        api_key: LOCAL_KEY,
    }
   });
   return [data]
}

export const CatsFetch = async(id) => {
    const {data} = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
        params: {
            api_key: LOCAL_KEY,  
        }
    });
    return [data]
}

