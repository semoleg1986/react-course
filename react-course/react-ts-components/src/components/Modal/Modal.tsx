import React from 'react';
import './Modal.css';
import { IMovie } from '../Card/Card.props';
import image from '../../assets/no-image.png';

interface IModal {
  movie: IMovie;
  onClose: () => void;
}

const getPosterURL = (poster_path: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
};
const defaultPosterURL = image;
const Modal = ({ movie, onClose }: IModal) => {
  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img
          src={movie.poster_path ? getPosterURL(movie.poster_path) : defaultPosterURL}
          alt={movie.name}
          width="200"
        />
        <h2>{movie.name}</h2>
        <div className="info">
          <div className="raiting">
            <span>IMBd</span>
            {movie.vote_average}
          </div>
          <div className="date">{movie.first_air_date.slice(0, -6)}</div>
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Modal;
