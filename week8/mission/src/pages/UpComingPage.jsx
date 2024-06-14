import MovieBox from '../movie/MovieList';
import {useState, useEffect} from 'react';
import Spinner from './LoadingPage';
import {KEY} from '../apikey.jsx';
import styled from 'styled-components';

const URL = "https://api.themoviedb.org/3/movie/"

function UpComingPage () {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState([true]);

    const getMovies = async () => {
        const json = await (
            await fetch(`${URL}upcoming?api_key=${KEY}&language=ko`)
        ).json();
        setMovies(json.results);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <ScrollContainer>
            {loading ? <Spinner /> : <MovieBox movieData={movies} /> }
        </ScrollContainer>
    );
}

export default UpComingPage;

const ScrollContainer = styled.div`
    overflow-y: auto;
    max-height: 100vh;
    padding-right: 0.5rem;

    &::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.5rem;
        border-radius: 0.3rem;
        background: rgba(255, 255, 255, 0.0);
    }

    &::-webkit-scrollbar-thumb {
        background: #FF2626;
        border-radius: 0.5rem;
    }
`;