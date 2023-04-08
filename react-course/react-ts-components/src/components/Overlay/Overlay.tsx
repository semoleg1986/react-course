import React from 'react';
import './Overlay.css';

interface IOverlay {
  children: React.ReactNode;
  onClick?: () => void;
}

const Overlay = ({ children, onClick }: IOverlay) => {
  return (
    <div className="overlay" onClick={onClick}>
      <div className="overlay-content">{children}</div>
    </div>
  );
};

export default Overlay;
