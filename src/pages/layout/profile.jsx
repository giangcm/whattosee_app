import React, { useCallback } from 'react';
import { CiUser } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, removeCurrentUser } from '../../utils/user';

const UserProfile = () => {
  let navigate = useNavigate();

  const handleLogout = useCallback(() => {
    removeCurrentUser();
    navigate('/');
  });
  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={handleLogout}
    >
      <CiUser />
      <span>{getCurrentUser()}</span>
    </div>
  );
};

export default UserProfile;
