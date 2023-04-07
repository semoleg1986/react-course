import { useEffect, useState } from 'react';
import ApiService from '../../services/ApiServ';
import Card from '../Card/Card';
import './Cards.css';

const Cards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await ApiService.get('tv/popular');
    };
  });

  return (
    <div className="post-container">
      {dataCard.products.map((i) => (
        <Card key={i.id} product={i} />
      ))}
    </div>
  );
};

export default Cards;
