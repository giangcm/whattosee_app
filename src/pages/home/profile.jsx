import React, { useCallback } from 'react';
import { CiUser } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const user = localStorage.getItem('name');
  let navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('name');
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
      <span>{user}</span>
    </div>
  );
};

export default UserProfile;
