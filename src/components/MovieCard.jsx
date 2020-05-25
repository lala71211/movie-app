/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function MovieCard({ movie, size = "normal" }) {
  return (
    <div className={`card ${size === "lg" ? "card--big" : null}`}>
      <div className="card__cover">
        <img src={movie.poster} alt="" />
        <Link to={{
          pathname: `movie/${movie.id}`
        }} className="card__play">
          <i className="icon ion-ios-play"></i>
        </Link>
      </div>
      <div className="card__content">
        <h3 className="card__title">
          <Link to={`movie/${movie.id}`}>{movie.title}</Link>
        </h3>
        <span className="card__category">
          {movie.genres.map((genre) => {
            return (
              // <Link to = {`genre/${genre.name}/1`}>{genre.name}</Link>
              <Link
                to={{
                  pathname: `genre/${genre.name}/1`,
                  // search: "?sort=name",
                  state: { genre: genre }
                }}
              >{genre.name}</Link>
            );
          })}
        </span>
        <span className="card__rate" >
          <i className="icon ion-ios-star"></i>
          {movie.imdb}
        </span>
      </div>
    </div>
  );
}

MovieCard.prototype = {
  movie: PropTypes.object.isRequired,
  size: PropTypes.string,
};

// MovieCard.defaultProps = {};

export default MovieCard;
