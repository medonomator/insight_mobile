import axios from 'axios';
// import { getBaseUrl } from './'

export const API = (method, url, data, headers) => {
  return axios({
    method,
    url: `http://83.166.242.213/v1/${url}`,
    // url: `${getBaseUrl()}/${url}`,
    headers,
    data,
  });
};
