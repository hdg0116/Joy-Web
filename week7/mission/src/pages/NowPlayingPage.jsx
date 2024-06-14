import MovieBox from '../movie/MovieList';
import {useState, useEffect, useCallback, useRef} from 'react';
import Spinner from './LoadingPage';
import {KEY} from '../apikey.jsx';
import styled from 'styled-components';

const URL = "https://api.themoviedb.org/3/movie/"

function NowPlayingPage () {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true); // 마지막 페이지 여부 추적
    const isFirstRender = useRef(true); // 첫 번째 렌더링을 추적

    const getMovies = async (page) => {
        if (!hasMore) return; // 더 이상 데이터가 없는 경우 요청 중지
        setLoading(true);
        const response = await fetch(`${URL}now_playing?api_key=${KEY}&language=ko&page=${page}`);
        const json = await response.json();
        if (json.results.length === 0) {
            setHasMore(false);  // 더 이상 데이터가 없는 경우
        } else {
            setMovies((prevMovies) => [...prevMovies, ...json.results]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        getMovies(page);
    }, [page]);

    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 1 && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [loading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <ScrollContainer>
            <MovieBox movieData={movies} />
            {loading && <Spinner />}
        </ScrollContainer>
    );
}

export default NowPlayingPage;


const ScrollContainer = styled.div`
    overflow-y: auto;
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