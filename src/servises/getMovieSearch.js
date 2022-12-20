import axios from 'axios';

export const getMovieSearch = async params => {
  const config = {
    url: `/search/movie`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '3a42e00052134f7762239baa2e36d5a3',
      query: params,
    },
  };

  const response = await axios(config);
  return response.data.results;
};
