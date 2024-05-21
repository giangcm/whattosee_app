import { useEffect, useState } from 'react';
import { Sanity } from '../../sanity';

export const useMovie = ({ watch }) => {
  const [movies, setMovies] = useState([]);

  const getMovieFn = async () => {
    // Get the paths we want to pre-render based on persons
    const watchTitles = watch.map((title) => `'${title}'`).join(',');

    const query = `*[_type == "movie" && title in [${watchTitles}] ] {
            _id,
            title,
            _type,
            imdb_id,
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

  const findCommonMovies = (list1, list2) => {
    const ids1 = new Set(list1.map((movie) => movie._id));
    const commonMovies = list2.filter((movie) => ids1.has(movie._id));
    return commonMovies;
  };
  return { movies, findCommonMovies };
};
