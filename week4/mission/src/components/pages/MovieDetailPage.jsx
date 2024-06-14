import { useParams, useLocation } from "react-router-dom";
import { IMG_BASE_URL } from "../movie/MovieBox";
import styled from 'styled-components';
import BackButton from "../layout/BackButton";

export default function MovieDetailPage() {
    const {title} = useParams();
    const {state} = useLocation();

    const {title: movieTitle, vote_average, poster_path, overview, release_date, backdrop_path} = state || {};
    
    const stars = state ? Math.floor(vote_average) : 0;

    console.log(title);
    console.log(state);

    const renderStars = () => {
        const starIcons = []; //빈 배열 생성
        for (let i = 0; i < stars; i++) {
            starIcons.push('⭐'); //stars 변수가 가리키는 값 만큼 별 이모지 starIcons 배열에 추가
        }
        return starIcons.join(''); //별 이모지 연속된 문자열로 결합(공백 없게)
    };

    return (
        <DetailContainer>
            <BackButton />
            <Background>
                <BackgroundPoster src={backdrop_path ? IMG_BASE_URL + backdrop_path : ''} alt="영화포스터" />
                <Overlay />
            </Background>
            <MoviePoster src={poster_path ? IMG_BASE_URL + poster_path : ''} alt="영화포스터"></MoviePoster>
            <MovieLayout>
                <MovieTitle>{movieTitle}</MovieTitle>
                <MovieVoteAverage><VoteAverageText>평점</VoteAverageText>{renderStars()}</MovieVoteAverage>
                <MovieReleaseDate><ReleaseDateText>개봉일</ReleaseDateText>{release_date}</MovieReleaseDate>
                <OverviewText>줄거리</OverviewText>
                {overview ? (
                    <MovieOverview>{overview}</MovieOverview>
                ) : (
                    <NoOverviewMessage>TMDB에서 제공하는 API에 줄거리 정보가 존재하지 않습니다.</NoOverviewMessage>
                )}
            </MovieLayout>
        </DetailContainer>
    );
}

const DetailContainer = styled.div`
    font-family: NanumSquare;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    
    height: 100vh;
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
    width: 500px;
    margin: 30px;
`;

const MoviePoster = styled.img`
    width: 350px;
    margin: 60px;
`;

const MovieTitle = styled.div`
    font-size: 45px;
    font-weight: 1000;
    margin-bottom: 40px;
`;

const VoteAverageText = styled.div`
    font-weight: 800;
    font-size: 20px;
`;

const MovieVoteAverage = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 35px;

    font-size: 16px;
`;

const ReleaseDateText = styled.div`
    font-size: 20px;
    font-weight: 800;
`;

const MovieReleaseDate = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 35px;

    font-size: 16px;
`;

const OverviewText = styled.div`
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 35px;
`;

const MovieOverview = styled.div`
    font-size: 16px;
    line-height: 1.5;
`;

const NoOverviewMessage = styled.div`

`;