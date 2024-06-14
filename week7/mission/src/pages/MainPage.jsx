import styled from 'styled-components';
import {useState, useCallback, useEffect} from 'react';
import backgroundImg from '../assets/background.jpg';
import searchIcon from '../assets/searchicon.png';
import MovieBox from '../movie/MovieList';
import {KEY} from '../apikey.jsx';
import debounce from 'lodash/debounce';
import axios from 'axios';
import Spinner from './LoadingPage.jsx';

const URL = "https://api.themoviedb.org/3/search/movie"

function MainPage () {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [bannerLoading, setBannerLoading] = useState(false);
    const [header, setHeader] = useState('Welcome!')
    const [id, setID] = useState('');

    const searchMovie = async (keyword) => {
        try {
            setIsLoading(true);
            await getMovies(keyword);
        } catch (error) {
            console.error('Error fetching data: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    const debounceSearchMovie = useCallback(debounce(searchMovie, 500), []);

    const handleChange = (event) => {
        const keyword = event.target.value;
        setSearch(keyword);
        debounceSearchMovie(keyword);
    };

    const getMovies = async (keyword) => {
        try {
            const response = await fetch(`${URL}?api_key=${KEY}&include_adult=false&query=${keyword}&language=ko`);
            const data = await response.json();
            setMovies(data.results);
            console.log(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            getMovies(search);
        }
    };

    const getID = async (token) => {
        try {
            const response = await axios.get('http://localhost:8080/auth/me',{
                headers: {Authorization: `Bearer ${token}`},
            });
            console.log(response);
            setBannerLoading(false);
            setID(response.data.name);
            } catch (error) {
                console.error(error);
            }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            getID(token);
            setIsLogin(true);
        } else {
            console.log('Token Not Exist');
            setBannerLoading(true);
        }
    });

    useEffect (() => {
        if (isLogin) {
            setHeader(bannerLoading ? <Spinner /> : `${id}님, 환영합니다!`);
        } else {
            setHeader('환영합니다!');
        }
    }, [isLogin, bannerLoading, id]);

    return (
        <MainWrapper>
            <BackgroundImg>
                <MainContainer>
                    <TitleWrapper><MainTitle>{header}</MainTitle></TitleWrapper>
                    <SubWrapper>
                        <SearchBox>
                            <InputWrapper>
                                <InputBox 
                                type='search' 
                                onChange={handleChange} 
                                value={search} 
                                placeholder='제목, 사람, 장르'
                                onKeyPress={handleKeyPress}
                                ></InputBox>
                                <Button type='button' onClick={() => getMovies(search)}></Button>
                            </InputWrapper>
                            {search && (
                            <MovieContainer>
                                {isLoading ? (
                                    <LoadingMessage>데이터를 받아오는 중입니다...</LoadingMessage>
                                ) : (
                                    <MovieBoxWrapper>
                                        <MovieBox movieData={movies} />
                                    </MovieBoxWrapper>
                                )}
                            </MovieContainer>)}
                        </SearchBox>
                    </SubWrapper>
                </MainContainer>
            </BackgroundImg>
        </MainWrapper>
    );
}

export default MainPage;

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const MainContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    background-color: rgba(0, 0, 0, 0.6);
`;

const BackgroundImg = styled.div`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;

    width: 50%;
    height: 25%;

    border-radius: 0.3rem;
`;

const MainTitle = styled.div`
    color: #FFFFFF;
    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.7);
    
    border-radius: 0.3rem;

    top: 8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 100%;
    height: 30%;

    font-family: Nanumsquare;
    font-size: 3rem;
    font-weight: 1000;
`;

const SubWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 75%;
    align-items: center;
    flex-direction: column;
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
   
    flex-direction: column;
    margin: 1.3rem;

    width: 90%;
    height: auto;

    overflow: scroll;
    overflow-x : hidden;

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

const InputWrapper = styled.div`
    width: 30rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    border: 0.1rem solid white;
`;

const InputBox = styled.input`
    color: white;
    background-color: transparent;

    border: none;

    padding: 0.4rem;

    width: 100%;
    height: 2rem;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #FFE6E6;
    }

    font-family: Nanumsquare;
`;

const Button = styled.button`
    background-color: transparent;  
    border: none;
    width: 2rem;
    height: 2rem;

    background-image: url(${searchIcon});
    background-size: cover;
    cursor: pointer;
`;

const MovieContainer = styled.div`
    width: 90%;
    height: 79%;
    background-color: #1B1717;
    padding: 1rem;
    display: flex;
    justify-content: center;

    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.4);

    border-radius: 0.3rem;
    border: 0.15rem solid #950101;
`;

const MovieBoxWrapper = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 0.2rem;

    overflow: scroll;
    overflow-x : hidden;

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

const LoadingMessage = styled.div`
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 25rem;
`;