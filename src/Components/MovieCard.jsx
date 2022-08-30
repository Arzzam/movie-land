import React from "react";

// Props can be also passed by the same name in the other components by { props_name }

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        {/* Here when there is no image it displays from the api data if it is not the then temp image as 400 * 400 placeholder image 
      is used and then the alternatively the image title will be displayed for the reference */}
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
