import React from 'react';
import { useNavigate } from 'react-router-dom';
import { imageUrlFor } from '../../utils/image';
import './index.css';
import { useMovieCategory } from './useCategory';

const UserCategoryPage = () => {
  const navigate = useNavigate();
  const { categories } = useMovieCategory();
  console.log(categories);
  return (
    <div className="category-container">
      <h2 className="category-title">onskelister og favoritter</h2>
      <p className="category-description">
        Dere har noen filmer som er pa onskelisten til en av dere og
        favorittlisten til den andre! Kanskje kan en av dere fa innfore den
        andre i en ny filmopplevels...?!
      </p>
      <div className="category-movie-container">
        {' '}
        {categories?.map((movie) => (
          <div
            key={`category-genre-${movie.id}`}
            onClick={() => navigate(`/movie/${movie._id}`)}
            style={{
              cursor: 'pointer',
            }}
          >
            {movie.poster && (
              <img
                style={{
                  width: '100%',
                }}
                src={imageUrlFor(movie.poster).ignoreImageParams().width(200)}
              />
            )}
            <h2
              className="movie-title"
              onClick={() => navigate(`/movie/${movie._id}`)}
            >
              {movie.title} ({movie.releaseDate.substr(0, 4)})
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCategoryPage;
