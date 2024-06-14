import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/"

export default function MovieList({movieData}) {

    const navigate = useNavigate();

    const onClickMovieItem = (movie) => {
        navigate(`/movie/${movie.id}`, {
            state: movie
        });
    }

    return (
        <MovieContainer>
            {movieData && movieData.map((movie, index) => (
                <MovieBox key={`${movie.id}-${index}`} onClick={() => onClickMovieItem(movie)}>
                    <MovieImg src={IMG_BASE_URL + movie.poster_path} alt="영화포스터" />
                    <MovieInfo>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <MovieGrade>⭐{movie.vote_average}</MovieGrade>
                    </MovieInfo>
                </MovieBox>
            ))}
        </MovieContainer>
    );
}


const MovieContainer = styled.div`
    padding : 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content : center;
    align-items: center;
`;

const MovieBox = styled.div`
    width: 15rem;
    height: auto;
    margin: 1.25rem;

    border-radius: 0.2rem;

    background-color: #810000;
    color: white;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.4);

    font-size: 1rem;
    font-family: Nanumsquare;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.1s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const MovieImg = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: contain;

    border-top-left-radius: 0.2rem 0.2rem;
    border-top-right-radius: 0.2rem 0.2rem;
`;

const MovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    gap: 5%;
`;

const MovieTitle = styled.div`
    margin: 0;
`;

const MovieGrade = styled.div`
    margin-left: 0.2rem;
`;