import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

function NavBar () {
    const [isSignin, setIsSignin] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleSigninClick = () => {
        setIsSignin(prevState => !prevState);
        console.log('회원가입 클릭');
    }

    const handleLogin = () => {
        if (isLogin) {
            localStorage.clear();
            setIsLogin(false);
            window.location.reload();
        } else {
            navigate('/login');
            console.log('로그아웃된 상태입니다.');
        }
    }

    useEffect (() => {
        if (localStorage.getItem('token')) {
            setIsLogin(true);
            console.log('로그인된 상태입니다.');
        }
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return (
        <>
            <NavWrapper>
                <NavTitle to="/">UMC Movies</NavTitle>
                <NavListWrap>
                    <NavList onClick={() => handleLogin()} to="/login">{isLogin ? '로그아웃' : '로그인'}</NavList>
                    {!isLogin && <NavList onClick={handleSigninClick} to="/signup">회원가입</NavList>}
                    <NavList to="/popular">Popular</NavList>
                    <NavList to="/nowplaying">Now Palying</NavList>
                    <NavList to="/toprated">Top Rated</NavList>
                    <NavList to="/upcoming">Up Coming</NavList>
                </NavListWrap>
                <MenuIcon onClick={toggleSidebar}><FiMenu size={24} /></MenuIcon>
            </NavWrapper>
            <Sidebar $isOpen={isSidebarOpen}>
                <SidebarContent>
                    <NavList onClick={() => {closeSidebar(); handleLogin();}} to='/login'>{isLogin ? '로그아웃': '로그인'}</NavList>
                    {!isLogin && <NavList onClick={() => { closeSidebar(); handleSigninClick(); }} to="/signup">회원가입</NavList>}
                    <NavList onClick={closeSidebar} to="/popular">Popular</NavList>
                    <NavList onClick={closeSidebar} to="/nowplaying">Now Playing</NavList>
                    <NavList onClick={closeSidebar} to="/toprated">Top Rated</NavList>
                    <NavList onClick={closeSidebar} to="/upcoming">Up Coming</NavList>
                </SidebarContent>
            </Sidebar>
        </>
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
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: Nanumsquare;
    font-weight: 600;
    font-size: 0.87rem;
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
    padding-right: 0.6rem;
    color: white;
    display: flex;
    gap: 1.25rem;

    @media (max-width: 768px) {
        display: none; /* 태블릿 및 모바일 환경에서는 숨기기 */
    }
`;

const NavList = styled(Link)`
    text-decoration: none;
    color: white;

    &:hover {
        color: #FFDBC5;
        transform: scale(1.05);
    }
`;

const MenuIcon = styled.div`
    display: none;
    color: white;
    padding-right: 0.6rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block; /* 태블릿 및 모바일 환경에서만 보이기 */
    }
`;

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: 0;

    height: 100%;
    width: 15.6rem;

    background-color: #292725;

    z-index: 2;

    display: flex;
    
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;

    @media (min-width: 769px) {
        display: none; /* PC 환경에서는 숨기기 */
    }
`;

const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.25rem;

    padding-left: 1rem;
    padding-top: 3.5rem;

    font-size: 0.87rem;
    font-weight: bold;
`;
