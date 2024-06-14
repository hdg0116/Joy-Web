import styled from 'styled-components';
import {Link} from 'react-router-dom';

const JoyGithub = "https://github.com/hdg0116"

function Footer () {
    return (
        <FooterWrapper>
            <FooterTitle>
                @ made by <GithubUrl to={JoyGithub} target="_blank">Joy</GithubUrl>
            </FooterTitle>
        </FooterWrapper>
    );
}

export default Footer;

const FooterWrapper = styled.div`
    background-color: #000000;

    position: fixed;
    bottom: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    
    width: 100%;
    height: 20px;

    font-family: Nanumsquare;
`;

const FooterTitle = styled.div`
    color: white;
    font-size: 15px;
    justify-content: raw;
`;

const GithubUrl = styled(Link)`
    color: #E6DEDD;
    text-decoration: none;
    font-weight: bold;
    font-size: 17px;

    &:hover {
        transform: scale(1.05);
    }
`;