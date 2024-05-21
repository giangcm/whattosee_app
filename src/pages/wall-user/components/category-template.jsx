import React from 'react';
import { imageUrlFor } from '../../../utils/image';
import './index.css';
export const TemplateCategory = ({
  title,
  description,
  movies,
  categories,
}) => {
  return (
    <div>
      <h2 className="template-title">{title}</h2>
      <p className="template-description"> {description}</p>
      <div>
        {movies?.map((movie) => (
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
