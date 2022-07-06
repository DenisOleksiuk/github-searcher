import React from 'react';
import UserItem from './user';

import './userList.scss';

interface IUserList {
  users: Array<any>;
}

export const UserList: React.FC<IUserList> = ({ users }) => (
  <div className="userList">
    {users.map((user) => (
      <UserItem key={user.id} user={user} />
    ))}
  </div>
);
