import React from 'react';
import '../App.css';

function MovieDetails({ title, overview }) {
    return (
        <div className='movie-details'>
            <div className='title'>{title}</div>
            <div className='detail'>{overview}</div>
        </div>
    );
}

export default MovieDetails;