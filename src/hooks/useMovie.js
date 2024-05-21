import { useEffect, useState } from 'react';
import { Sanity } from '../../sanity';

export const useMovie = () => {
  const [movies, setMovies] = useState([]);

  const getMovieFn = async () => {
    // Get the paths we want to pre-render based on persons
    const query = `*[_type == "movie" ] {
            _id,
            title,
            _type,
            releaseDate,
            poster,
            "category": category->title,
            "posterAspect": poster.asset->.metadata.dimensions.aspectRatio,
            "director": crewMembers[job == "Director"][0].person->name
          }[0...3]
          `;
    const movies = await Sanity.fetch(query);
    setMovies(movies);
  };

  useEffect(() => {
    getMovieFn();
  }, []);

  return { movies };
};
