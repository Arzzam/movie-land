import React from 'react';

const MovieCard = (props) => {
    return (
        <div className="movie">
            <div>
                <p>{}</p>
            </div>
            <div>
                <img src={} alt="" />
            </div>
            <div>
                <span>{}</span>
                <h3>{}</h3>
            </div>
        </div>
    );
}

export default MovieCard;

