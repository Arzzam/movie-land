import React, { useEffect } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import SearchIcon from "./search.svg";

// Api key - 72fe687e
const API_URL = "http://www.omdbapi.com?apikey=72fe687e&";

const App = () => {
  // Async the api data
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="Search Icon" onClick={() => {}} />
      </div>
      <div className="container">
        <MovieCard />
      </div>
    </div>
  );
};

export default App;
