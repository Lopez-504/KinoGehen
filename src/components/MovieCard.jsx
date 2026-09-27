// src/components/MovieCard.jsx

import { useState } from "react";
import { Link } from "react-router-dom";

import MovieCover from "./MovieCover";

import "./movieCard.css";

function MovieCard({ movie, type }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <article
      className={`movie-card ${isFlipped ? "flipped" : ""}`}
    >
      <div className="movie-card-inner">

        {/* =========================
            FRONT
        ========================= */}

        <div className="movie-card-front">

          <MovieCover movie={movie} />

          <div className="movie-card-front-info">
            <h2>{movie.title}</h2>

            <span>
              {movie.year}
            </span>
          </div>

          <button
            className="movie-card-flip-area"
            onClick={flipCard}
            aria-label={`Show information about ${movie.title}`}
          >
          </button>

        </div>

        {/* =========================
            BACK
        ========================= */}

        <div 
          className="movie-card-back"
          style={{ background: `linear-gradient(to right,
                    rgba(240, 239, 239, 0.9),
                    rgba(239, 238, 237, 0.87),
                    rgba(236, 234, 234, 0.88)),
                    url(${movie.cover})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`}}
        >

          <span className="movie-card-year">
            {movie.year}
          </span>
          <h2>{movie.title}</h2>
          <p className="movie-card-director">
            Directed by {movie.director}
          </p>

          <p className="movie-card-description">
            {movie.description}
          </p>

          <div className="movie-card-cast">
            <h3>{(type === 'actor') ? "- Movies -" : "- Cast -"}</h3>
            <ul>
              {movie.cast.slice(0, 14).map((actor) => (
                <li key={actor}>
                  {actor}
                </li>
              ))}
            </ul>

          </div>

          <div className="movie-card-actions">

            {/* Flip */}
            {/*     OLD
            <button
              className="movie-card-button"
              onClick={flipCard}
            >
              Cover
            </button>*/}

            {/* Go to movie/actor */}
            <Link
              to={`/movies/${movie.id}`}
              className="movie-card-button" 
            >
              Explore {(type === 'actor') ? "actor" : "film!"}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;