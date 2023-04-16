import React from 'react';
import './Card.css';
import { IMovie } from './Card.props';
import image from '../../assets/no-image.png';

interface ICardProps {
  movie: IMovie;
  onClick: () => void;
}
const defaultPosterURL = image;

const getPosterURL = (poster_path: string | null | undefined) => {
  if (!poster_path) {
    return defaultPosterURL;
  }
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
};

export default function Card({ movie, onClick }: ICardProps) {
  return (
    <div className="post" data-testid="post" onClick={onClick}>
      <img src={getPosterURL(movie.poster_path)} alt={movie.name} width="200" />
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
}
