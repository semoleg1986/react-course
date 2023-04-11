import React from 'react';
import './Card.css';
import { IMovie } from './Card.props';
import image from '../../assets/no-image.png';

interface ICard {
  movie: IMovie;
  onClick: () => void;
}

const getPosterURL = (poster_path: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
};
const defaultPosterURL = image;
const Card = ({ movie, onClick }: ICard) => {
  return (
    <div className="post" data-testid="post" onClick={onClick}>
      <img
        src={movie.poster_path ? getPosterURL(movie.poster_path) : defaultPosterURL}
        alt={movie.name}
        width="200"
      />
      <h5>{movie.name}</h5>

      <div className="info">
        <div className="raiting">
          <span>IMBd</span>
          {movie.vote_average}
        </div>
        <div className="date">{movie.first_air_date.slice(0, -6)}</div>
      </div>
    </div>
  );
};

export default Card;
