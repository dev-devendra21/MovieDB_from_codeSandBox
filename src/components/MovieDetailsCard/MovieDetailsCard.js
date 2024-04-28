import React from "react";
import "./MovieDetailsCard.css";

function MovieDetailsCard({ description }) {
  const backdropSrc = `https://image.tmdb.org/t/p/original${description.backdrop_path}`;
  const posterSrc = `https://image.tmdb.org/t/p/w200${description.poster_path}`;
  const date = new Date(description.release_date);
  return (
    <>
      <div className="movie-details-card">
        <section className="movie-details-card-description">
          <div className="movie-description">
            <div>
              <img src={posterSrc} className="poster" alt={description.title} />
            </div>
            <div>
              <h1 className="description-title">{description.title}</h1>
              <h1 className="movie-rating">
                Rating: {description.vote_average?.toFixed(1)}
              </h1>
              <div className="runtime-and-genre">
                <p className="runtime">{description.runtime} runtime </p>
                <ul className="genre">
                  {" "}
                  {description?.genres?.map((genre) => (
                    <li>{genre.name}</li>
                  ))}
                </ul>
              </div>
              <p className="release-date">
                Release Date: {date.toDateString()}
              </p>
            </div>
          </div>
          <div>
            <h1 className="overview">Overview</h1>
            <p className="overview-description">{description.overview}</p>
          </div>
        </section>
        <section className="backdrop-container">
          <img
            src={backdropSrc}
            className="backdrop-img"
            alt={description.title}
          />
        </section>
      </div>
    </>
  );
}

export default MovieDetailsCard;
