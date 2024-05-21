import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sanity } from '../../../sanity';

export const useMovieCategory = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);

  const getCategoryMovieFn = async () => {
    // Get the paths we want to pre-render based on persons
    const action_ = `'${category}'`;

    const query = `*[_type == "movie" && slug.current match ${action_}] {
            _id,
            title,
            _type,
            releaseDate,
            poster,
            imdb_id,
            "category": category->title,
            "posterAspect": poster.asset->.metadata.dimensions.aspectRatio,
            "director": crewMembers[job == "Director"][0].person->name
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
