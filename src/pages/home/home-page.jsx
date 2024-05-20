import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Sanity } from '../../../sanity';
import '../../styles/list.css';
import { imageUrlFor } from '../../utils/image';
import { getCurrentUser } from '../../utils/user';
import './index.css';

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
  const user = getCurrentUser();
  return (
    <>
      <div
        style={{
          margin: '30px 20px',
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        Hei, {user?.name}{' '}
      </div>
      <div className="movies-container">
        <div className="">
          <h2
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              margin: '10px 10px',
              paddingBottom: 10,
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            <FaStar /> Flimer jeg skal se!
          </h2>
          <div className="movies">
            {movies.map((movie) => (
              <div key={movie._id} className="list__item">
                {movie.poster && (
                  <img
                    style={{
                      width: '100%',
                    }}
                    src={imageUrlFor(movie.poster)
                      .ignoreImageParams()
                      .width(200)}
                  />
                )}
                <h2 className="movie-title">
                  {movie.title} ({movie.releaseDate.substr(0, 4)})
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className="right-container">righ</div>
      </div>
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
