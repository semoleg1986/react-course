import React, { useEffect, useState } from 'react';
import ApiService from '../../services/ApiServ';
import Card from '../Card/Card';
import './Cards.css';
import { IMovie } from '../Card/Card.props';

const Cards = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await ApiService.get('tv/popular');
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="post-container">
      {movies.map((item) => (
        <Card key={item.id} movie={item} />
      ))}
    </div>
  );
};

export default Cards;
