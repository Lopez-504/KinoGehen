import { movies } from "../data/movies"
import { actors } from "../data/actors"
import { directors } from "../data/directors"
import MovieCard from "../components/MovieCard";
import "./moviesCatalogue.css";

function MoviesPage({ type }) {

  const data = type === 'movies' ? movies : (type === 'actors' ? actors : directors)

  return (
    <main className="movies-page">
      <header className="movies-page-header">
        <p className="section-label">
          THE FILM ARCHIVE
        </p>
        <h1>{type === 'movies' ? 'Movies' : (type === 'actors' ? 'Actors' : "Directors")}</h1>
        <p>
          {type === 'movies' ? 'Explore films, their stories, performances, memorable scenes and the music that accompanies them.' : (type === 'actors' ? 'Explore actors, their stories, performances, memorable scenes and the character that marked them forever.' : "Explore directors, their films, stories, memorable scenes and the actors they made shine.")}
        </p>
      </header>
      <section className="movies-grid">

        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            type={type}
          />
        ))}

      </section>

    </main>
  );
}

export default MoviesPage;