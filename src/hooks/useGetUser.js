import { useEffect, useState } from 'react';
import data from '../data.json';

const useGetUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => setUser(data.user), 1000);
  }, []);

  return user;
};

export default useGetUser;
