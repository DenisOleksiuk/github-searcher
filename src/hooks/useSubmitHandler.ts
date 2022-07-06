import { fetchWithHeaders } from '../utils/fetchWithHeaders';

type useSubmitHandlerType = (props: {
  setUsers: React.Dispatch<React.SetStateAction<never[]>>;
  value: string;
}) => { onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => Promise<void> };

const useSubmitHandler: useSubmitHandlerType = ({ setUsers, value }) => {
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetchWithHeaders(
      'https://api.github.com/search/users?q=' + value
    );
    setUsers(response.items);
  };

  return { onSubmitHandler };
};

export default useSubmitHandler;
