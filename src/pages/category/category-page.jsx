import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../utils/user';
import './index.css'; // Import CSS file

const CategoryPage = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  return (
    <div className="container-category-page">
      {' '}
      {/* Apply CSS class */}
      <h2 className="heading">Sjangere</h2> {/* Apply CSS class */}
      <div className="category">
        {' '}
        {/* Apply CSS class */}
        {currentUser?.genres?.map((ctg) => (
          <div
            key={`category-user-ctg-${ctg}`}
            className="category-item"
            onClick={() => navigate(`/category/${ctg?.name}`)}
          >
            <span className="category-name">{ctg?.name}</span>{' '}
            {/* Apply CSS class */}
            {ctg?.isLike ? (
              <span className="favorite-info">
                {' '}
                {/* Apply CSS class */}
                <FaStar color="#d5d552" /> Favorittsjanger
              </span>
            ) : (
              <span className="favorite-info">
                {' '}
                {/* Apply CSS class */}
                <CiStar />
                Legg til i favoriteliste
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
