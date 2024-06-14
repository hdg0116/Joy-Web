import MovieBox from '../movie/MovieList';
import { useState, useEffect } from 'react';
import Spinner from './LoadingPage';
import {KEY} from '../apikey.jsx';

const URL = "https://api.themoviedb.org/3/movie/"

function TopRatedPage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState([true]);

    const getMovies = async () => {
        const json = await (
            await fetch(`${URL}top_rated?api_key=${KEY}&language=ko`)
        ).json();
        setMovies(json.results);
        setLoading(false);
    }
    
    useEffect(() => {
        getMovies();
    }, [])

    return (
        <>
            {loading ? <Spinner /> : <MovieBox movieData={movies} /> }
        </>
    );
}

export default TopRatedPage;