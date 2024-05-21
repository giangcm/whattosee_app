import React from 'react';
import { useNavigate } from 'react-router-dom';
import { imageUrlFor } from '../../utils/image';
import './index.css';
import { useMovieCategory } from './useCategory';

const SjangerPage = () => {
  const navigate = useNavigate();
  const { categories, category } = useMovieCategory();
  return (
    <div className="sjanger-container">
      <h2 className="sjanger-title">
        Sjanger: {category} ({categories?.length} filmer)
      </h2>
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

export default SjangerPage;
