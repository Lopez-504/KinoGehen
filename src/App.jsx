import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import LandingPage from "./pages/LandingPage";
import MoviesCatalogue from "./pages/MoviesCatalogue"
import MoviePage from "./pages/MoviePage";
import QuotesPage from "./pages/QuotesPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>

        {/* Landing */}
        <Route
          path="/KinoGehen"
          element={<LandingPage />}
        />

        {/* Movies catalogue */}
        <Route
          path="/movies"
          element={<MoviesCatalogue type='movies' />}
        />

        {/* Individual movie */}
        <Route
          path="/movies/:movieId"
          element={<MoviePage />}
        />

        {/* Other sections */}
        <Route
          path="/directors"
          element={<MoviesCatalogue type='directors' />}
        />

        <Route
          path="/actors"
          element={<MoviesCatalogue type='actors' />}    
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