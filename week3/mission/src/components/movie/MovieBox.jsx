import styled from 'styled-components';
import MovieDetail from './MovieDetail';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/"

function MovieList({movieData}) {
    return (
        <MovieListWrapper>
            {movieData && movieData.map(movie => (
                <MovieBox key={movie.id}>
                    <DisplayControl>
                        <MovieDetail title={movie.title} overview={movie.overview} />
                    </DisplayControl>
                    <MovieImg src={IMG_BASE_URL + movie.poster_path} />
                    <MovieInfo>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <MovieGrade>⭐{movie.vote_average}</MovieGrade>
                    </MovieInfo>
                </MovieBox>
            ))}
        </MovieListWrapper>
    );
}

export default MovieList;

const MovieListWrapper = styled.div`
    padding-top : 60px;
    padding-bottom: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content : center;
`;

const DisplayControl = styled.div`
    display : none;
`;

const MovieBox = styled.div`
    position: relative;

    color: white;
    background-color: #810000;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    
    width: 250px;
    height: 440px;
    margin: 16px;

    font-size: 16px;
    font-family: Nanumsquare;
    font-weight: 600;
    cursor: pointer;
    
    &:hover ${DisplayControl}{
        display:flex;
    }
`;

const MovieImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`;

const MovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    gap: 5%;
`;

const MovieTitle = styled.div`
    margin: 0;
`;

const MovieGrade = styled.div`
    margin-left: 3px: 
`;