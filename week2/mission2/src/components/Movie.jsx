import React, { useState } from 'react';
import MovieDetails from './MovieDetails';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function MovieCard({ title, poster_path, vote_average, overview }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='movie-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={IMG_BASE_URL + poster_path} alt="영화 포스터" />
            <div className='movie-info'>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
            {isHovered && <MovieDetails title={title} overview={overview} />}
        </div>
    )
}

export default MovieCard;