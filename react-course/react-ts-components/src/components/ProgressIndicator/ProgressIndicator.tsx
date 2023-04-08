import React from 'react';
import './ProgressIndicator.css';
import { FaSpinner } from 'react-icons/fa';

const ProgressIndicator = () => {
  return (
    <div className="progress-indicator">
      <div className="progress-indicator-bar"></div>
      <div className="progress-indicator-text">Loading...</div>
      <div className="progress-indicator-icon">
        <FaSpinner className="spinner" />
      </div>
    </div>
  );
};

export default ProgressIndicator;
