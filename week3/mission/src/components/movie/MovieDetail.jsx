import styled from 'styled-components';

function MovieDetail ({title, overview}) {
    return (
        <DetailWrapper>
            <DetailTitle>{title}</DetailTitle>
            <Detail>{overview}</Detail>
        </DetailWrapper>
    );
}

export default MovieDetail;

const DetailWrapper = styled.div`
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 16px;
    box-sizing: border-box;
`;

const DetailTitle = styled.div `
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
`;

const Detail = styled.div`
    font-size: 14px;
    line-height: 1.5;
`;