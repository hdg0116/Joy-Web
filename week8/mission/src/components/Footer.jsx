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
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    text-align: center;
    
    width: 100%;
    height: 1.3rem;
    z-index: 100;

    font-family: Nanumsquare;
`;

const FooterTitle = styled.div`
    color: white;
    font-size: 0.95rem;
    justify-content: raw;
`;

const GithubUrl = styled(Link)`
    color: #E6DEDD;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;

    &:hover {
        transform: scale(1.05);
    }
`;