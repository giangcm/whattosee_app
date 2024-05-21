import React from 'react';
import { useLocation } from 'react-router-dom';
import { useMovie } from '../../hooks/useMovie';
import { getCurrentUser, users } from '../../utils/user';
import { TemplateCategory } from './components/category-template';
import './index.css';

export const DetailUser = () => {
  const location = useLocation();
  const user = users.filter((usr) => location.pathname.includes(usr?.name))[0];
  const currentUser = getCurrentUser();
  const { movies } = useMovie();
  console.log(user);

  return (
    <div>
      <h2 className="detail-user-title">
        Forslag for {currentUser?.name} og {user.name}
      </h2>
      <div className="detail-user-container">
        <div>
          <TemplateCategory
            title={'Catch up!'}
            description={'Dere har 2 filmer felles i onskelistene deres'}
            movies={movies}
            d
          />
        </div>
        <div>
          <TemplateCategory
            title={'Go safe!'}
            description={'Dere har 1 filmer felles i onskelistene deres'}
            movies={movies}
          />
        </div>
        <div>
          <TemplateCategory
            title={'Go safe!'}
            description={'Dere har 1 filmer felles i onskelistene deres'}
            categories={['Action', 'Adventure']}
          />
        </div>
      </div>
    </div>
  );
};
