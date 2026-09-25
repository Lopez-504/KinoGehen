// src/components/MovieCover.jsx

import { useRef, useState } from "react";
import "./movieCover.css";

function MovieCover({ movie }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="movie-cover">

      <img
        src={movie.cover}
        alt={`${movie.title} cover`}
      />

      {movie.theme && (
        <>
          <audio
            ref={audioRef}
            src={movie.theme}
            onEnded={handleEnded}
          />

          <button
            className={`sound-button ${
              isPlaying ? "playing" : ""
            }`}
            onClick={toggleAudio}
            aria-label={
              isPlaying
                ? `Pause ${movie.title} theme`
                : `Play ${movie.title} theme`
            }
          >
            {isPlaying ? "◼" : "♪"}
          </button>
        </>
      )}

    </div>
  );
}

export default MovieCover;