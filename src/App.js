import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import "./App.css";

// f0065335
const API_URL = "https://www.omdbapi.com?apikey=f0065335";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
    setSearchTerm("");
  };

  useEffect(() => {
    fetchMovies("");
  }, []);

  return (
    <div className="app__container">
      <h1 className="movie-info">Movie Info</h1>
      <div className="app__search">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search your movie"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button
          onClick={() => {
            fetchMovies(searchTerm);
          }}
        >
          Search
        </button>
      </div>
      <div className="app__cards">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <div className="empty">movie not found</div>
        )}
      </div>
    </div>
  );
};

export default App;
