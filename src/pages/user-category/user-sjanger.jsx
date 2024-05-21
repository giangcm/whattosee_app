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
            onClick={() =>
              window.open(
                `https://www.imdb.com/title/${movie.imdb}/`,
                '_blank',
                'rel=noopener noreferrer'
              )
            }
            className="sjanger-category-item"
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
              className="sjanger-movie-title"
              onClick={() =>
                window.open(
                  `https://www.imdb.com/title/${movie.imdb}/`,
                  '_blank',
                  'rel=noopener noreferrer'
                )
              }
            >
              {movie.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SjangerPage;
