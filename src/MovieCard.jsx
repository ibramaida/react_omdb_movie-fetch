import React from "react";

import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={`${movie.Title}`}
        />
      </div>
      <div className="card-text">
        <h2 className="movie-title">{movie.Title}</h2>
        <p className="movie-type">{movie.Type}</p>
        <p className="movie-year">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
