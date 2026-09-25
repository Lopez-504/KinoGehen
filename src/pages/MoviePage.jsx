import { useParams } from "react-router-dom";
import { movies } from "../data/movies";

function MoviePage() {

  const { movieId } = useParams();

  const movie = movies.find(
    (movie) => movie.id === movieId
  );

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <main>
      <h1>{movie.title}</h1>
    </main>
  );
}

export default MoviePage;