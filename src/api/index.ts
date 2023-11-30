import axios from 'axios';

const baseURL = 'https://api.punkapi.com/v2';

const createAxios = (
  originUrl: any,
  url: any,
  contentType = 'application/json; charset=utf-8',
) => {
  return axios.create({
    baseURL: `${originUrl}${url}`,
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': contentType,
      'X-Frame-Options': 'sameorigin',
    },
  });
};

export const commonApi = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  },
});
