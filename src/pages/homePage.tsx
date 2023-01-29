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
        </React.Fragment>
    );
};

export default HomePage;
