import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NowPalyingPage from "./pages/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage";
import PopularPage from "./pages/PopularPage";
import UpComingPage from "./pages/UpComingPage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetailPage from './pages/MovieDetailPage';
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/nowplaying" element={<NowPalyingPage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpComingPage />} />

        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;