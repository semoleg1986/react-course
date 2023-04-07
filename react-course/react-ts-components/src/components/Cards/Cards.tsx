import React, { useEffect, useState } from 'react';
import ApiService from '../../services/ApiServ';
import Card from '../Card/Card';
import './Cards.css';
import axios from 'axios';
import { IMovie } from '../Card/Card.props';

const Cards = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/tv/popular?api_key=a5f9c29429f3ee32204af9b3691e7d08')
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const fetchMovies = async () => {
  //   const { data } = await ApiService.get('tv/popular');
  //   setMovies(data.results);
  // };
  // fetchMovies();

  return (
    <div className="post-container">
      {movies.map((item) => (
        <Card key={item.id} movie={item} />
      ))}
    </div>
  );
};

export default Cards;
