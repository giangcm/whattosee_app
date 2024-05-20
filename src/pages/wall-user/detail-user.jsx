import React from 'react';
import { useLocation } from 'react-router-dom';
import { users } from '../../utils/user';
import './index.css';

export const DetailUser = () => {
  const location = useLocation();
  const currentUser = users.filter((usr) => (usr.name = location.pathname));
  console.log(currentUser);
  return (
    <div>
      <h2></h2>
      <div className="detail-user-container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};
