import { movies } from "../data/movies"
import Scene from "../components/Scene";
import "./moviesPage.css"
import MovieCover from "../components/MovieCover";

export default function MoviePage({ movieId }) {
  const movie = movies.find((movie) => movie.id === movieId);

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <main className="movie-page">
      <header className="movie-header">
        {/*<img
          src={movie.cover}
          alt={`${movie.title} cover`}
        />*/}
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
