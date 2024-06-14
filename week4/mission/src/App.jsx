import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import NowPalyingPage from "./components/pages/NowPlayingPage";
import TopRatedPage from "./components/pages/TopRatedPage";
import PopularPage from "./components/pages/PopularPage";
import UpComingPage from "./components/pages/UpComingPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import MovieDetailPage from './components/pages/MovieDetailPage';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import './App.css';

function App () {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/popular" element={<PopularPage />}></Route>
        <Route path="/nowplaying" element={<NowPalyingPage />}></Route>
        <Route path="/toprated" element={<TopRatedPage />}></Route>
        <Route path="/upcoming" element={<UpComingPage />}></Route>

        <Route path="/popular/:title" element={<MovieDetailPage />}></Route>
        <Route path="/nowplaying/:title" element={<MovieDetailPage />}></Route>
        <Route path="/toprated/:title" element={<MovieDetailPage />}></Route>
        <Route path="/upcoming/:title" element={<MovieDetailPage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;