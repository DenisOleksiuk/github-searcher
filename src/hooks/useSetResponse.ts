import { useEffect } from 'react';
import { fetchWithHeaders } from '../utils/fetchWithHeaders';

export const useSetResponse = <T>(
  url: string,
  callback: React.Dispatch<React.SetStateAction<T>>
) => {
  useEffect(() => {
    (async () => {
      const data = await fetchWithHeaders(url);
      callback(data);
    })();
  }, [url, callback]);
};
