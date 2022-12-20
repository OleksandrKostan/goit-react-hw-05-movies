import axios from 'axios';

export const getMovieDetailsById = async movieId => {
  const config = {
    url: `/movie/${movieId}`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '3a42e00052134f7762239baa2e36d5a3',
    },
  };

  const response = await axios(config);

  return response.data;
};
