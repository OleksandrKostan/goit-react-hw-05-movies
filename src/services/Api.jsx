import axios from 'axios';

const KEY = "3a42e00052134f7762239baa2e36d5a3"

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

export async function FetchTrending (page) {
    const response = await axios('trending/movie/week',{
        params:
        {
           api_key: KEY,
            perPage: 12,
            page,
        }    
    })
    return response.data.results;
}

export async function FetchSerch(query, page) {
    const response = await axios('search/movie', {
        params:
        {
          api_key: KEY,
            perPage: 20,
            page: 1,
            query:`${query}`,
        }
    })
    return response.data.results;
}

export async function FetchMovieshId(movie_id) {
  const response = await axios(`movie/${movie_id}`, {
    params:
    {
      api_key: KEY,
    }
  })
  return response.data;
}