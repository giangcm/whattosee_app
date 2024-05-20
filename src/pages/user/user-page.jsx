// import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../utils/user';
import './user.css';

export const UserPage = () => {
  let navigate = useNavigate();

  const user = [
    { id: 1, name: 'Ulrikke', hobby: '' },
    { id: 2, name: 'Marius', hobby: '' },
    { id: 3, name: 'Egil', hobby: '' },
  ];
  const handleClick = (user) => {
    setCurrentUser(user);
    navigate('/home');
  };
  useEffect(() => {
    let checkToken = localStorage.getItem('home');
    checkToken ? navigate('/home') : navigate('/');
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
          {user.map((value) => (
            <span
              className="user"
              key={`user-${value.name}`}
              onClick={() => handleClick(value)}
            >
              {value.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
