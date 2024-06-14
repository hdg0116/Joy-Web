import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage () {
    const navigate = useNavigate();

    return (
        <Container>
            <Text0>"Not Found"</Text0>
            <Text1>해당 페이지를 찾을 수 없습니다!</Text1>
            <Text2>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</Text2>
            <Text3 onClick={() => navigate('/')}>Return to Main Page</Text3>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;

    text-align: center;

    font-family: Nanumsquare;
    color: white;
`;

const Text0 = styled.div`
    font-size: 3.1rem;
    margin-bottom: 1.3rem;
    font-weight: bold;
    color: #FF2626;
`;

const Text1 = styled.div`
    margin-bottom: 0.6rem;
    font-size: 2.5rem;
`;

const Text2 = styled.div`
    font-size: 1rem;
    line-height: 1.6;
`;

const Text3 = styled.div`
    margin-top: 3.4rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    border: 2px solid #FFE6E6;

    font-size: 1.6rem;
    line-height: 1.6;
    color: #FFE6E6;

    cursor: pointer;
    font-weight: bold;


    &:hover {
        transform: scale(1.03);
    }
`;