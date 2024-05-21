import BlockContent from '@sanity/block-content-to-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sanity } from '../../../sanity';
import { imageUrlFor } from '../../utils/image';
import './style.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getStaticProps = async () => {
    const singleMovieQuery = `*[_type == "movie" && _id == $id] {
            _id,
            title,
            overview,
            releaseDate,
            poster,
            imdb_id,
            "cast": castMembers[] {
              _key,
              characterName,
              "person": person-> {
                _id,
                name,
                image
              }
            }
          }[0]
          `;
    const movie = await Sanity.fetch(singleMovieQuery, { id: id });

    setMovie(movie);
  };

  useEffect(() => {
    getStaticProps();
  }, []);
  console.log('movie', movie);

  const serializers = {
    types: {
      summaries: (props) => {
        const { node } = props;
        if (!node) {
          return false;
        }
        const { summaries } = node;
        if (!summaries || summaries.length === 0) {
          return false;
        }
        return (
          <div className="summaries">
            <h2>{node.caption}</h2>
            <ul>
              {summaries.map((summary) => {
                return (
                  <li key={summary._key}>
                    <BlockContent
                      blocks={summary.summary}
                      serializers={serializers}
                    />
                    — <a href={summary.url}>{summary.author}</a>
                  </li>
                );
              })}
            </ul>
            <style jsx>{`
              .summaries {
                clear: both;
                padding: 2em 0 2em;
              }

              .summaries :global(ul) {
                margin: 0;
                padding: 0;
              }

              .summaries :global(li) {
                display: block;
                margin: 0 0 1em;
                padding: 1em 0 2em;
              }

              .summaries :global(li:not(:last-child)) {
                border-bottom: 1px solid #ccc;
              }

              .summaries {
                clear: both;
                padding: 2em 0 2em;
              }

              .summaries :global(li:not(:last-child)) {
                border-bottom: 1px solid #ccc;
              }
            `}</style>
          </div>
        );
      },
    },
  };
  return (
    <>
      <div className="movie">
        <div className="content">
          <div className="sidebar">
            <img
              className="poster"
              src={
                movie.poster &&
                imageUrlFor(movie.poster).ignoreImageParams().width(500)
              }
              alt={`Movie poster for ${movie.title}`}
            />
          </div>
          <div className="main-content">
            <div className="overview">
              <BlockContent
                blocks={movie.overview}
                serializers={serializers}
                dataset={Sanity?.clientConfig?.dataset}
                projectId={Sanity?.clientConfig?.projectId}
              />
            </div>
            <h2>Cast</h2>
            <ul className="cast-list">
              {movie?.cast?.map((cast) => (
                <li key={cast._key} className="cast-list-item">
                  <div>
                    <div className="cast-list-link">
                      <span>
                        {cast.person.image && (
                          <img src={imageUrlFor(cast.person.image).width(64)} />
                        )}
                      </span>
                      <span>
                        <span className="cast-person-name">
                          {cast.person.name}
                        </span>
                        <span className="cast-character-name">
                          {cast.characterName}
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
