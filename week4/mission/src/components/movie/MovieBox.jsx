import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/"

export default function MovieList({movieData}) {

    const navigate = useNavigate();

    const onClickMovieItem = (movie) => {
        navigate(`/popular/${movie.title}`, {
            state: movie
        });
    }

    return (
        <MovieContainer>
            {movieData && movieData.map(movie => (
                <MovieBox key={movie.id} onClick={() => onClickMovieItem(movie)}>
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
    padding : 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content : center;
    align-items: center;
`;

const MovieBox = styled.div`
    width: 250px;
    height: auto;
    margin: 20px;

    background-color: #810000;
    color: white;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);

    font-size: 16px;
    font-family: Nanumsquare;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.1s; //hover 효과 0.1초동안 발생

    &:hover {
        transform: scale(1.05); //커서 올리면 박스 크기 1.05만큼 커짐
    }
`;

const MovieImg = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: contain;
`;

const MovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px;
    gap: 5%;
`;

const MovieTitle = styled.div`
    margin: 0;
`;

const MovieGrade = styled.div`
    margin-left: 3px;
`;