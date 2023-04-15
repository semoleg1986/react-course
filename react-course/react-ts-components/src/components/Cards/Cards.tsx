import { useGetPopularMoviesQuery } from '../../store/services/movieApi';
import { IMovie, IMovieResult } from '../Card/Card.props';
import Card from '../Card/Card';
import './Cards.css';

export default function Cards() {
  const { data: movieResult = {}, isFetching } = useGetPopularMoviesQuery(1);
  const { results: movies = [] } = movieResult as IMovieResult;

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-container">
      {movies.map((movie: IMovie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
