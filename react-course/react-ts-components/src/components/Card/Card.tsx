import React from 'react';
import './Card.css';
import { IMovie } from './Card.props';

interface ICard {
  key: string;
  movie: IMovie;
}

const getPosterURL = (poster_path: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
};
const Card = ({ movie }: ICard) => {
  return (
    <div className="post" data-testid="post">
      <img src={getPosterURL(movie.poster_path)} alt={movie.name} width="200" />
      <h2>{movie.name}</h2>
      <p>{movie.first_air_date}</p>
    </div>
  );
};

export default Card;
