import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetResponse } from '../../hooks/useSetResponse';
import './user.scss';

interface User {
  user: { login: string; avatar_url: string };
}

const UserItem: React.FC<User> = ({ user }) => {
  const [userData, setUserData] = useState({ public_repos: '' });
  useSetResponse('https://api.github.com/users/' + user.login, setUserData);

  return (
    <Link to={`/user/${user.login}`} className="user">
      <img className="img" src={user.avatar_url} alt="" />
      <div>{user.login}</div> <div>Repo: {userData?.public_repos}</div>
    </Link>
  );
};

export default UserItem;
