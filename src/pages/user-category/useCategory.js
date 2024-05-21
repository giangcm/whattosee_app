import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sanity } from '../../../sanity';

export const useMovieCategory = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);

  const getCategoryMovieFn = async () => {
    // Get the paths we want to pre-render based on persons
    const action_ = `'${category.toLocaleLowerCase()}'`;

    const query = `*[_type == "movies"  && genre == ${action_}] {
            _id,
            title,
            releaseDate,
            genre,
            poster,
            imdb,
          }[0...5]
          `;
    const response = await Sanity.fetch(query);
    setCategories(response);
  };

  useEffect(() => {
    getCategoryMovieFn();
  }, []);

  return { categories, category };
};
