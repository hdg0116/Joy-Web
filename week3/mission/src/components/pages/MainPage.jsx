import styled from 'styled-components';
import backgroundImg from '../../assets/background.jpg';
import searchIcon from '../../assets/searchicon.png';

function MainPage () {
    return (
        <MainWrapper>
            <MainTitle>
                <TitleText>환영합니다!</TitleText>
            </MainTitle>
            <SubWrapper>
                <SubTitle>Search Your Movies</SubTitle>
                <InputWrapper>
                    <InputBox placeholder='제목, 사람, 장르'></InputBox>
                    <Button></Button>
                </InputWrapper>
            </SubWrapper>
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

const MainTitle = styled.div`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const TitleText = styled.div`
    color: white;
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.6);
    background-color: rgba(0, 0, 0, 0.4);

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    font-family: Nanumsquare;
    font-size: 50px;
    font-weight: 800;
`;

const SubTitle = styled.div`
    padding-bottom: 30px;

    color: white;
    font-family: Nanumsquare;
    font-size: 30px;
    font-weight: 800;
`;

const SubWrapper = styled.div`
    width: 450px;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const InputWrapper = styled.div`
    width: 450px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    border-bottom: 2px solid white;
`;

const InputBox = styled.input`
    color: white;
    background-color: transparent;

    border: none;

    width: 100%;
    height: 35px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #EEEBDD;
    }

    font-family: Nanumsquare;
`;

const Button = styled.button`
    background-color: #1B1717;
    border: none;
    width: 35px;
    height: 35px;

    background-image: url(${searchIcon});
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;