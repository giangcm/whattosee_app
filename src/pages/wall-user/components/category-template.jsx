import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovie } from '../../../hooks/useMovie';
import { imageUrlFor } from '../../../utils/image';
import './index.css';
export const TemplateCategory = ({
  title,
  categories,
  filter,
  description,
}) => {
  const navigate = useNavigate();
  const { movies, findCommonMovies } = useMovie({ watch: filter?.user });
  const { movies: currentUserMovies } = useMovie({
    watch: filter?.currentUser,
  });
  const catchUpMovies = findCommonMovies(currentUserMovies, movies);

  return (
    <div>
      <h2 className="template-title">{title}</h2>
      {!description ? (
        <p className="template-description">
          Dere har {catchUpMovies?.length} filmer felles i onskelistene deres
        </p>
      ) : (
        <p className="template-description">{description}</p>
      )}
      <div className="template-container-film">
        {catchUpMovies?.map((movie) => (
          <div
            key={`category-${title}-${movie.id}`}
            className="template-container"
            onClick={() =>
              window.open(
                `https://www.imdb.com/title/${movie.imdb}/`,
                '_blank',
                'rel=noopener noreferrer'
              )
            }
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
        <div className="template-category">
          {categories?.map((ctg) => (
            <li
              key={`category-same-${ctg}`}
              className="template-category-item"
              onClick={() => navigate(`/category/${ctg}`)}
            >
              {ctg}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
