// src/components/common/LoadingScreen.jsx
import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <span className="brand-text">Strategi</span>
          <span className="brand-highlight">Konseil</span>
        </div>
        <div className="loading-spinner"></div>
        <p>Chargement de votre espace collaboratif...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;