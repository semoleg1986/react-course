import React, { useEffect, useState } from 'react';
import ApiService from '../../services/ApiServ';
import Card from '../Card/Card';
import './Cards.css';
import axios from 'axios';

export interface IMovie {
  key: string;
  name: string;
  poster_path: string;
  first_air_date: string;
}

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
      {movies.map((i) => (
        <Card key={i.key} movie={i} />
      ))}
    </div>
  );
};

export default Cards;
