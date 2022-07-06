import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { UserInfo } from '../components/UserInfo';
import { fetchWithHeaders } from '../utils/fetchWithHeaders';

import './userProfile.scss';

// https://api.github.com/search/repositories?q=algorithms

export const DEFAULT_USER_STATE = {
  avatar_url: '',
  user_name: '',
  name: '',
  email: '',
  location: '',
  created_at: '',
  followers: '',
  following: '',
  bio: '',
  repos: [] as any[],
  loading: true,
};

const UserProfile = () => {
  const { login } = useParams();
  const [user, setUser] = useState(DEFAULT_USER_STATE);
  const [filteredRepos, setFilteredRepos] = useState(user.repos);
  const ref = useRef(user.repos);

  useEffect(() => {
    (async () => {
      const fetchedUser = await fetchWithHeaders(`https://api.github.com/users/${login}`);
      const userRepos = await fetchWithHeaders(fetchedUser.repos_url);
      ref.current = userRepos;
      setUser({ ...fetchedUser, repos: userRepos, loading: false });
      setFilteredRepos(userRepos);
    })();
  }, [login]);

  const searchValueHandler = (value: string) => {
    setFilteredRepos(ref.current.filter((repo) => repo.name.includes(value)));
  };

  if (user.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="userProfile">
      <UserInfo user={user} />
      <div className="userProfile_bio">{user.bio}</div>
      <SearchBar
        placeholder="Search for User's Repositories"
        searchHandler={searchValueHandler}
      />
      <ul className="repo__items">
        {filteredRepos.map((repo) => (
          <li className="repo__item" key={repo.id}>
            <a
              className="repo__link"
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="repo__name">{repo.name}</span>
              <div className="repo__forks-stars">
                <span>{repo.forks} Forks</span>
                <span>{repo.stargazers_count} Stars</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
