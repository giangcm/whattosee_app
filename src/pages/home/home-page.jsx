import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sanity } from '../../../sanity';
import '../../styles/list.css';
import { imageUrlFor } from '../../utils/image';
import { getCurrentUser } from '../../utils/user';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getCurrentUser();
    navigate(`${user ? '/home' : '/'}`);
  }, []);

  const getStaticPaths = async () => {
    // Get the paths we want to pre-render based on persons
    const query = `*[_type == "movie"] {
            _id,
            title,
            releaseDate,
            poster,
            "posterAspect": poster.asset->.metadata.dimensions.aspectRatio,
            "director": crewMembers[job == "Director"][0].person->name
          }[0...3]
          `;
    const movies = await Sanity.fetch(query);
    setMovies(movies);
  };
  useEffect(() => {
    getStaticPaths();
  }, []);
  console.log('movies', movies);
  return (
    <>
      <div className="movies">
        <ul className="list">
          {movies.map((movie) => (
            <li key={movie._id} className="list__item">
              <Link to={`/movie/${movie._id}`}>
                <a>
                  {movie.poster && (
                    <img
                      src={imageUrlFor(movie.poster)
                        .ignoreImageParams()
                        .width(300)}
                      width="100"
                      height={100 / movie.posterAspect}
                    />
                  )}
                  <div style={{ paddingTop: '0.2em' }}>
                    {movie.releaseDate.substr(0, 4)}
                  </div>
                  <h3>{movie.title}</h3>
                  {movie.director && (
                    <span className="movies-list__directed-by">
                      Directed by {movie.director}
                    </span>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .movies {
          padding: 1rem;
        }
        .movies-list__directed-by {
          display: block;
          font-size: 1rem;
        }
      `}</style>
      {/* <style jsx>{listStyles}</style> */}
    </>
  );
};

// const query = `*[_type == "movie"] {
//     _id,
//     title,
//     releaseDate,
//     poster,
//     "posterAspect": poster.asset->.metadata.dimensions.aspectRatio,
//     "director": crewMembers[job == "Director"][0].person->name
//   }[0...50]
//   `;
// const movies = await Sanity.fetch(query);
// const paths = movies.map(movie => ({
//     params: { id: movie._id }
// }));

// // We'll pre-render only these paths at build time.
// // { fallback: false } means other routes should 404.
// console.log("movies", movies)
