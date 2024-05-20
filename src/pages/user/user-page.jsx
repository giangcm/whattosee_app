// import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, setCurrentUser, users } from '../../utils/user';
import './user.css';

export const UserPage = () => {
  let navigate = useNavigate();

  const handleClick = (user) => {
    setCurrentUser(user);
    navigate('/home');
  };

  useEffect(() => {
    const user = getCurrentUser();
    navigate(`${user ? '/home' : '/'}`);
  }, []);

  return (
    <div className="root-container-user">
      <div className="user-container">
        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          Hvem skal se i dag
        </h2>
        <p>Velg bruker</p>
        <div className="list-user">
          {users.map((user) => (
            <span
              className="user"
              key={`user-${user.name}`}
              onClick={() => handleClick(user)}
            >
              {user.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
