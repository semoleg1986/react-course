import React, { useEffect, useState } from 'react';
import ApiService from '../../services/ApiServ';
import Card from '../Card/Card';
import './Cards.css';
import { IMovie } from '../Card/Card.props';
import Modal from '../Modal/Modal';

const Cards = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await ApiService.get('tv/popular');
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  const handleCardClick = (movie: IMovie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <div className="post-container">
      {movies.map((item) => (
        <Card key={item.id} movie={item} onClick={() => handleCardClick(item)} />
      ))}
      {showModal && selectedMovie && (
        <Modal movie={selectedMovie} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Cards;
