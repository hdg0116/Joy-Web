import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function NavBar () {
    const [isLogin, setIsLogin] = useState(false);

    const handleLoginClick = () => {
        setIsLogin(prevState => !prevState);
        console.log('로그인 클릭');
    }

    return (
        <NavWrapper>
            <NavTitle to="/">UMC Movies</NavTitle>
            <NavListWrap>
                <NavList onClick={handleLoginClick}>{isLogin ? '로그아웃' : '로그인'}</NavList>
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
    height: 20px;

    position: fixed;
    top: 0;
    left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: Nanumsquare;
    font-weight: 600;
    font-size: 14px;
`;

const NavTitle = styled(Link)`
    padding-left: 10px;

    color: #FF2626;
    text-decoration: none;
    font-size: 18px;

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