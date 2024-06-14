import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import PopularPage from './components/pages/PopularPage';
import NowPlayingPage from './components/pages/NowPalyingPage';
import TopRatedPage from './components/pages/TopRatedPage';
import UpComingPage from './components/pages/UpComingPage';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import './App.css';

function App () {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" exact element={<MainPage />}></Route>
                <Route path="/popular" element={<PopularPage />}></Route>
                <Route path="/nowplaying" element={<NowPlayingPage />}></Route>
                <Route path="/toprated" element={<TopRatedPage />}></Route>
                <Route path="/upcoming" element={<UpComingPage />}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
}

export default App;