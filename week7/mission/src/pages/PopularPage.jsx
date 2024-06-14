import MovieBox from '../movie/MovieList';
import {useState, useEffect} from 'react';
import Spinner from './LoadingPage';
import {KEY} from '../apikey.jsx';
import styled from 'styled-components';

const URL = "https://api.themoviedb.org/3/movie/"

function PopularPage () {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [page, setPage] = useState(1);

    const getMovies = async () => {
        setLoading(true);
        const json = await (
            await fetch(`${URL}popular?api_key=${KEY}&language=ko&page=${page}`)
        ).json();
        setMovies(json.results);
        setLoading(false);
    };

    useEffect(() => {
        getMovies(page);
    }, [page]);

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <ScrollContainer>
                    <MovieBox movieData={movies} />
                    <PaginationWrapper>
                        <Pagination>
                            <PageButton onClick={handlePreviousPage} disabled={page === 1}>
                                &lt;
                            </PageButton>
                            <CurrentPage>{page}</CurrentPage>
                            <PageButton onClick={handleNextPage}>
                                &gt;
                            </PageButton>
                        </Pagination>
                    </PaginationWrapper>
                </ScrollContainer>
            )}
        </div>
    );
}

export default PopularPage;

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

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Pagination = styled.div`
    padding-top: 0.5rem;
    height: 6.5rem;
`;

const PageButton = styled.button`
    color: ${props => (props.disabled ? 'grey' : '#FFFFFF')};
    background-color: transparent;

    font-size: 1.2rem;

    border: none;
    border-radius: 5px;
    
    cursor: ${props => (props.disabled ? '' : 'pointer')};

    height: 2rem;

    &:hover {
        color: ${props => (props.disabled ? '' : '#810000')};
    }
`;

const CurrentPage = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: #FFFFFF;

    padding-left: 5rem;
    padding-right: 5rem;
`;