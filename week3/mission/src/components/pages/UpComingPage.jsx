import MovieList from '../movie/MovieBox';
import {useState, useEffect} from 'react';
import Spinner from './LoadingPage';
import {KEY} from '../../apikey';

const URL = "https://api.themoviedb.org/3/movie/"

function NowPalyingPage () {
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState([true]);

    const getMovies = async () => {
        const json = await (
            await fetch(`${URL}upcoming?api_key=${KEY}&language=ko`)
        ).json();
        setMovieData(json.results);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <>
            {loading ? <Spinner /> : <MovieList movieData={movieData} /> }
        </>
    );
}

export default NowPalyingPage;