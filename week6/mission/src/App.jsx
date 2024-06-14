import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NowPalyingPage from "./pages/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage";
import PopularPage from "./pages/PopularPage";
import UpComingPage from "./pages/UpComingPage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetailPage from './pages/MovieDetailPage';
import SignUpPage from "./pages/SignUpPage";
import NavBar from './components//NavBar';
import Footer from './components//Footer';
import './App.css';

function App () {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/popular" element={<PopularPage />}></Route>
        <Route path="/nowplaying" element={<NowPalyingPage />}></Route>
        <Route path="/toprated" element={<TopRatedPage />}></Route>
        <Route path="/upcoming" element={<UpComingPage />}></Route>

        <Route path="/movie/:id" element={<MovieDetailPage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;