import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import BackButtonImg from '../assets/buttonicon.png';

export default function BackButton () {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return <BackButtonContainer onClick={handleGoBack}>
        <BackButtonIcon src={BackButtonImg} alt="뒤로가기 버튼" />
    </BackButtonContainer>
};

const BackButtonContainer = styled.div`
    cursor: pointer;
`;

const BackButtonIcon = styled.img`
    position: fixed;
    top: 5.5rem;
    left: 3rem;
    z-index: 1000;
    width: 2.5rem;
    height: auto;
`;