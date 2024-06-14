import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_BASE_URL } from "../movie/MovieList";
import styled from 'styled-components';
import BackButton from "../components/BackButton";
import {KEY} from '../apikey';

export default function MovieDetailPage() {
    const { id } = useParams();
    const [ movie, setMovie ] = useState(null);
    const [ cast, setCast ] = useState([]);
    const [ crew, setCrew ] = useState([]);
    const { state } = useLocation();

    const NO_IMG_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s';

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=ko`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie:', error);
            } 
        };

        const fetchCastCrew = async () => {
            try {
                const [castResponse, crewResponse] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=ko`),
                    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=ko`)
                ]);
                const [castData, crewData] = await Promise.all([
                    castResponse.json(),
                    crewResponse.json()
                ]);
                setCast(castData.cast);
                setCrew(crewData.crew);
            } catch (error) {
                console.error('Error fetching cast and crew:', error);
            } 
        };
        fetchMovie();
        fetchCastCrew();
    }, [id]);

    const {title: movieTitle, vote_average, poster_path, overview, release_date, backdrop_path} = state || {};
    
    const stars = "⭐️".repeat(Math.floor(vote_average));

    console.log(id);
    console.log(state);

    return (
        <DetailWrapper>
            <DetailContainer>
                <DetailContainer1>
                    <BackButton />
                    <Background>
                        <BackgroundPoster src={backdrop_path ? IMG_BASE_URL + backdrop_path : ''} alt="배경포스터" />
                        <Overlay />
                    </Background>
                    <MoviePoster src={poster_path ? IMG_BASE_URL + poster_path : NO_IMG_URL} alt="영화포스터"></MoviePoster>
                    <MovieLayout>
                        <MovieTitle>{movieTitle}</MovieTitle>
                        <MovieVoteAverage><VoteAverageText>평점</VoteAverageText>{stars}</MovieVoteAverage>
                        <MovieReleaseDate><ReleaseDateText>개봉일</ReleaseDateText>{release_date}</MovieReleaseDate>
                        <OverviewText>줄거리</OverviewText>
                        {overview ? (
                            <MovieOverview>{overview}</MovieOverview>
                        ) : (
                            <NoOverviewMessage>TMDB에서 제공하는 API에 줄거리 정보가 존재하지 않습니다.</NoOverviewMessage>
                        )}
                    </MovieLayout>
                </DetailContainer1>
                <DetailContainer2>
                    <Section>
                        <CastCrewTitle>출연진</CastCrewTitle>
                        <MemberList>
                            {cast.map((actor, index) => (
                                <Member key={`cast-${index}`}>
                                    <ImageWrapper>
                                        <CastCrewImg src = {actor.profile_path ? IMG_BASE_URL + actor.profile_path : NO_IMG_URL} alt = "cast" />
                                    </ImageWrapper>
                                    <MemberInfo>
                                        <MemberName>{actor.name}</MemberName>
                                        <MemberRole>{actor.character}</MemberRole>
                                    </MemberInfo>
                                </Member>
                            ))}
                        </MemberList>
                    </Section>
                    <Section>
                        <CastCrewTitle>제작진</CastCrewTitle>
                        <MemberList>
                            {crew.map((member, index) => (
                                <Member key={`member-${index}`}>
                                    <ImageWrapper>
                                        <CastCrewImg src={member.profile_path ? IMG_BASE_URL + member.profile_path : NO_IMG_URL} alt = "crew"/>
                                    </ImageWrapper>
                                    <MemberInfo>
                                        <MemberName>{member.name}</MemberName>
                                        <MemberRole>{member.job}</MemberRole>
                                    </MemberInfo>
                                </Member>
                            ))}
                        </MemberList>
                    </Section>
                </DetailContainer2>
            </DetailContainer>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    font-family: NanumSquare;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

const DetailContainer = styled.div`
    padding-top: 7rem;

    width: 100%;
    height: 100%;

    overflow-y: auto;
    overflow-x: hidden; 

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

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
`;

const BackgroundPoster = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.78);
`;

const MovieLayout = styled.div`
    position: relative;
    width: 30rem;
    margin: 2.5rem;

    position: relative;
`;

const MoviePoster = styled.img`
    width: 22rem;
    margin: 2.5rem;
`;

const MovieTitle = styled.div`
    font-size: 2.8rem;
    font-weight: 1000;
    margin-bottom: 2.5rem;
`;

const VoteAverageText = styled.div`
    font-weight: 800;
    font-size: 1.2rem;
`;

const MovieVoteAverage = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 2.2rem;

    font-size: 1rem;
`;

const ReleaseDateText = styled.div`
    font-size: 1.2rem;
    font-weight: 800;
`;

const MovieReleaseDate = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 2.2rem;

    font-size: 1rem;
`;

const OverviewText = styled.div`
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 2.2rem;
`;

const MovieOverview = styled.div`
    font-size: 1rem;
    line-height: 1.5;
`;

const NoOverviewMessage = styled.div``;

const DetailContainer1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DetailContainer2 = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;

    width: 100%;
    height: auto;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 3rem;
    width: 100%;
    height: auto;
`;

const CastCrewTitle = styled.div`
    text-align: center;
    font-size: 2rem;
    font-weight: 800;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

const MemberList = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Member = styled.div`
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 6rem;
    height: auto;
`;

const ImageWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1rem;
`;

const CastCrewImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const MemberInfo = styled.div`
    text-align: center;
`;

const MemberName = styled.div`
    font-size: 0.95rem;
    font-weight: bold;
`;

const MemberRole = styled.div`
    padding-top: 0.5rem;
    font-size: 0.8rem;
`;