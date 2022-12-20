import axios from 'axios';

const config = {
  url: '/trending/movie/week',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '3a42e00052134f7762239baa2e36d5a3',
  },
};

export const getTrandingApi = async () => {
  const response = await axios(config);
  return response.data.results;
};
