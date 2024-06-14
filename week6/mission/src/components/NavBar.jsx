import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function NavBar () {
    const [isSignin, setIsSignin] = useState(true);

    const handleSigninClick = () => {
        setIsSignin(prevState => !prevState);
        console.log('회원가입 클릭');
    }

    return (
        <NavWrapper>
            <NavTitle to="/">UMC Movies</NavTitle>
            <NavListWrap>
                <NavList onClick={handleSigninClick} to="/signup">회원가입</NavList>
                <NavList to="/popular">Popular</NavList>
                <NavList to="/nowplaying">Now Palying</NavList>
                <NavList to="/toprated">Top Rated</NavList>
                <NavList to="/upcoming">Up Coming</NavList>
            </NavListWrap>
        </NavWrapper>
    );
}

export default NavBar;

const NavWrapper = styled.div`
    background-color: #000000;
        
    width: 100%;
    height: 1.3rem;

    position: fixed;
    top: 0;
    left: 0;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: Nanumsquare;
    font-weight: 600;
    font-size: 14px;
`;

const NavTitle = styled(Link)`
    padding-left: 0.6rem;

    color: #FF2626;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
        transform: scale(1.05);
    }
`;

const NavListWrap = styled.div`
    padding-right: 10px;

    color: white;
    display: flex;
    gap: 20px;
`;

const NavList = styled(Link)`
    text-decoration: none;
    color: white;

    &:hover {
        color: #E6DEDD;
        transform: scale(1.05);
    }
`;