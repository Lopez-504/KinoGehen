import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import LandingPage from "./pages/LandingPage";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./pages/MoviePage";
import DirectorsPage from "./pages/DirectorsPage";
import ActorsPage from "./pages/ActorsPage";
import QuotesPage from "./pages/QuotesPage";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Landing */}
        <Route
          path="/KinoGehen"
          element={<LandingPage />}
        />

        {/* Movies */}
        <Route
          path="/movies"
          element={<MoviesPage movieId='life-is-beautiful'/>}
        />

        <Route
          path="/movies/:movieId"
          element={<MoviePage />}
        />

        {/* Other sections */}
        <Route
          path="/directors"
          element={<DirectorsPage />}
        />

        <Route
          path="/actors"
          element={<ActorsPage />}
        />

        <Route
          path="/quotes"
          element={<QuotesPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;