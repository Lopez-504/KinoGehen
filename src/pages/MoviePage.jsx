import { useParams } from "react-router-dom";
import { movies } from "../data/movies"
import "./moviePage.css"

import Scene from "../components/Scene";
import MovieCover from "../components/MovieCover";

export default function MoviePage() {
  const { movieId } = useParams();

  const movie = movies.find(
    (movie) => movie.id === movieId
  );

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <main className="movie-page">
      <header className="movie-header">
        <MovieCover movie={movie} />

        <div>
          <h1>{movie.title}</h1>
          <h2>{movie.director} - {movie.year}</h2>
          <p>{movie.description}</p>

          <h3>- Cast -</h3>
          <ul>
            {movie.cast.map((actor) => (
              <li key={actor}>{actor}</li>
            ))}
          </ul>
        </div>
      </header>

      <section className="movie-scenes">
        {movie.scenes.map((scene, index) => (
          <Scene
            key={scene.id}
            scene={scene}
            sceneNumber={index + 1}
          />
        ))}
      </section>
    </main>
  );
}
