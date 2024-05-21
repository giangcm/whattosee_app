import React from 'react';
import { useMovie } from '../../../hooks/useMovie';
import { imageUrlFor } from '../../../utils/image';
import './index.css';
export const TemplateCategory = ({
  title,
  categories,
  filter,
  description,
}) => {
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
      <div>
        {catchUpMovies?.map((movie) => (
          <div
            key={`category-${title}-${movie.id}`}
            className="template-container"
          >
            {movie.poster && (
              <img
                style={{
                  width: '100%',
                }}
                src={imageUrlFor(movie.poster).ignoreImageParams().width(200)}
              />
            )}
            <h2 className="movie-title">
              {movie.title} ({movie.releaseDate.substr(0, 4)})
            </h2>
          </div>
        ))}
        <div className="template-category">
          {categories?.map((ctg) => (
            <li className="template-category-item">{ctg}</li>
          ))}
        </div>
      </div>
    </div>
  );
};
