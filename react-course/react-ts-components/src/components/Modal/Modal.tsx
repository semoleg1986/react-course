import React from 'react';
import './Modal.css';
import { IMovie } from '../Card/Card.props';

interface IModal {
  movie: IMovie;
  onClose: () => void;
}

const getPosterURL = (poster_path: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
};

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
        <img src={getPosterURL(movie.poster_path)} alt={movie.name} width="200" />
        <h2>{movie.name}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Modal;
