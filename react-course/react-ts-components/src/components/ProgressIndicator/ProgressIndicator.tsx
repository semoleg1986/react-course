import React from 'react';
import './ProgressIndicator.css';

const ProgressIndicator = () => {
  return (
    <div className="progress-indicator">
      <div className="progress-indicator-bar"></div>
      <div className="progress-indicator-text">Loading...</div>
    </div>
  );
};

export default ProgressIndicator;
