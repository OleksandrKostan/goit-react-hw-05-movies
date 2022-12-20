import axios from 'axios';

export const getMovieReviews = async movieId => {
  const config = {
    url: `/movie/${movieId}/reviews`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '3a42e00052134f7762239baa2e36d5a3',
    },
  };

  const response = await axios(config);
  return response.data.results;
};
