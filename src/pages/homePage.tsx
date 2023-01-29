import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { UserList } from '../components/UserList';

interface IHomePage {
    users: Array<any>;
    setValue: (str: string) => void;
}

const HomePage: React.FC<IHomePage> = ({ users, setValue }) => {
    return (
        <React.Fragment>
            <SearchBar placeholder="Search for Users" searchHandler={setValue} />
            <UserList users={users} />
            test-1 test-2 test-3 test-4
        </React.Fragment>
    );
};

export default HomePage;
