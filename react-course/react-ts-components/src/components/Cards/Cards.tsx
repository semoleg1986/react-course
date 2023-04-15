import { useGetPopularMoviesQuery } from '../../store/services/movieApi';
import { IMovie, IMovieResult } from '../Card/Card.props';

const Cards = () => {
  const { data: movieResult = {}, isFetching } = useGetPopularMoviesQuery(1);
  const { results: movies = [] } = movieResult as IMovieResult;

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {movies.map((movie: IMovie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cards;
