import React from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentUser, users } from '../../utils/user';
import UserCategoryPage from '../user-category/user-category-page';
import { TemplateCategory } from './components/category-template';
import './index.css';

export const DetailUser = () => {
  const location = useLocation();
  const user = users.filter((usr) => location.pathname.includes(usr?.name))[0];
  const currentUser = getCurrentUser();

  const commonGenre = user?.category?.filter((genre) =>
    currentUser?.category?.includes(genre)
  );

  return (
    <div className="wrapper-container">
      <h2 className="detail-user-title">
        Forslag for {currentUser?.name} og {user.name}
      </h2>
      <div className="detail-user-container">
        <div>
          <TemplateCategory
            title={'Catch up!'}
            key={'category-catch-up'}
            filter={{
              user: user.watch,
              currentUser: currentUser.watch,
            }}
          />
        </div>
        <div>
          <TemplateCategory
            title={'Go safe!'}
            key={'category-go-safe'}
            filter={{
              user: user.favorite,
              currentUser: currentUser.favorite,
            }}
          />
        </div>
        <div>
          <TemplateCategory
            key={'category-utforsk'}
            title={'Utforsk!'}
            categories={commonGenre}
            description={
              'Dere liker begge disse sjangere, sjekk hvike filmer som finnes a velge mellom:'
            }
          />
        </div>
      </div>
      <UserCategoryPage />
    </div>
  );
};
