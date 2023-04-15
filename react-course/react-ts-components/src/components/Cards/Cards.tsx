import { useGetPopularMoviesQuery } from '../../store/services/movieApi';
import { IMovie, IMovieResult } from '../Card/Card.props';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import './Cards.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';

interface CardsProps {
  searchQuery: string;
}

const Cards = ({ searchQuery }: CardsProps) => {
  const { data: movieResult = {}, isFetching } = useGetPopularMoviesQuery(1);
  const { results: movies = [] } = movieResult as IMovieResult;
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const filteredMovies = useSelector((state: RootState) =>
    movies.filter((movie) => movie.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCardClick = (movie: IMovie) => {
    setSelectedMovie(movie);
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-container">
      {filteredMovies.map((movie: IMovie) => (
        <div key={movie.id}>
          <Card movie={movie} onClick={() => handleCardClick(movie)} />
        </div>
      ))}
      {selectedMovie && <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
};

export default Cards;
