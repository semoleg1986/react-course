import React, { useEffect, useState } from 'react';
import ApiService from '../../services/ApiServ';
import Card from '../Card/Card';
import './Cards.css';
import { IMovie } from '../Card/Card.props';
import Modal from '../Modal/Modal';
import Overlay from '../Overlay/Overlay';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';

type CardsProps = {
  searchQuery: string | null;
};

const Cards = ({ searchQuery }: CardsProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        if (searchQuery) {
          const { data } = await ApiService.get(`search/tv?query=${searchQuery}`);
          setMovies(data.results);
        } else {
          const { data } = await ApiService.get('tv/popular');
          setMovies(data.results);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
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
      {isLoading ? (
        <ProgressIndicator />
      ) : (
        movies.map((item) => (
          <Card key={item.id} movie={item} onClick={() => handleCardClick(item)} />
        ))
      )}
      {showModal && selectedMovie && (
        <Overlay onClick={handleCloseModal}>
          <Modal movie={selectedMovie} onClose={handleCloseModal} />
        </Overlay>
      )}
    </div>
  );
};

export default Cards;
