import React, { useEffect, useState } from 'react';
import ApiService from '../../services/ApiServ';
import Card from '../Card/Card';
import './Cards.css';
import { IMovie } from '../Card/Card.props';
import Modal from '../Modal/Modal';
import Overlay from '../Overlay/Overlay';

type CardsProps = {
  searchQuery: string | null;
};

const Cards = ({ searchQuery }: CardsProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchQuery) {
        const { data } = await ApiService.get(`search/tv?query=${searchQuery}`);
        setMovies(data.results);
      } else {
        const { data } = await ApiService.get('tv/popular');
        setMovies(data.results);
      }
    };
    fetchMovies();
  }, [searchQuery]);

  const handleCardClick = (movie: IMovie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  return (
    <div className="post-container">
      {movies.map((item) => (
        <Card key={item.id} movie={item} onClick={() => handleCardClick(item)} />
      ))}
      {showModal && selectedMovie && (
        <Overlay onClick={handleCloseModal}>
          <Modal movie={selectedMovie} onClose={handleCloseModal} />
        </Overlay>
      )}
    </div>
  );
};

export default Cards;
