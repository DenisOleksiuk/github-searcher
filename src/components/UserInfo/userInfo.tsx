import React from 'react';
import { DEFAULT_USER_STATE } from '../../pages/userProfile';

import './userInfo.scss';

interface IUserInfo {
  user: typeof DEFAULT_USER_STATE;
}

export const UserInfo: React.FC<IUserInfo> = ({ user }) => {
  return (
    <div className="userInfo">
      <div className="userInfo_container">
        <img className="userInfo_avatar" src={user.avatar_url} alt="user avatar" />
        <div className="userInfo_info">
          <div className="userInfo_info-row">{user.name}</div>
          <div className="userInfo_info-row">{user.email}</div>
          <div className="userInfo_info-row">{user.location}</div>
          <div className="userInfo_info-row">{user.created_at}</div>
          <div className="userInfo_info-row">{user.followers} Followers</div>
          <div className="userInfo_info-row">{user.following} Following</div>
        </div>
      </div>
    </div>
  );
};
