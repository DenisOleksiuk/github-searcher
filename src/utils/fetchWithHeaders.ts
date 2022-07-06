// import { fetch } from './fetch';

export const fetchWithHeaders = async (url: string) => {
  return fetch(url, {
    headers: { Authorization: `Token ${process.env.REACT_APP_API_KEY}` },
  }).then((result) => result.json());
};
