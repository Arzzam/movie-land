import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import SearchIcon from "./search.svg";

// Api key - 72fe687e
const API_URL = "http://www.omdbapi.com?apikey=72fe687e&";

const App = () => {
  const [movies, setmovies] = useState([]);

  const [search, setsearch] = useState("");

  // Fetch and Async the api data
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={search}
          onChange={(event) => {
            setsearch(event.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          onClick={() => {
            searchMovies(search);
          }}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
