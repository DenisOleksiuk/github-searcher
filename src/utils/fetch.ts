import data from '../data.json';

type HeadersType = {
  headers: {
    Authorization: string;
  };
};

export type fetchType = (
  url: string,
  options: HeadersType
) => Promise<{ json: () => Promise<any> }>;

export const fetch: fetchType = (url) => {
  const isUserProfileUrl = /^https:\/\/api\.github\.com\/users\/[^/]+$/.test(url);

  return Promise.resolve({
    json() {
      return isUserProfileUrl ? Promise.resolve(data.user) : Promise.resolve(data.users);
    },
  });
};
