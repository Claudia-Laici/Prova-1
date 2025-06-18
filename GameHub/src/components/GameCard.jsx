import React, { useState } from 'react';
import './GameCard.css';

const GameCard = ({ gioco }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  const getRatingColor = (rating) => {
    if (rating >= 9) return 'excellent';
    if (rating >= 8) return 'good';
    if (rating >= 7) return 'decent';
    return 'poor';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completato':
        return 'completed';
      case 'in corso':
        return 'playing';
      case 'non iniziato':
        return 'not-started';
      default:
        return 'default';
    }
  };

  const formatStatus = (status) => {
    switch (status) {
      case 'completato':
        return 'Completato';
      case 'in corso':
        return 'In Corso';
      case 'non iniziato':
        return 'Non Iniziato';
      default:
        return status;
    }
  };

  return (
    <div className="game-card" onClick={toggleDetails}>
      <img src={gioco.cover} alt={gioco.title} />
      <div className="card-content">
        <h3>{gioco.title}</h3>

        {showDetails && (
          <div className="card-p">
            <p className="genre">Genere: {gioco.genre}</p>
            <p>Platform: {gioco.platform}</p>
            <p>Year: {gioco.year}</p>
            <p>Price: {gioco.price} €</p>
            <p>Hours played: {gioco.hoursPlayed}</p>
            <p>Difficulty: {gioco.difficulty}</p>
          </div>
        )}

        <div className="card-meta">
          <span className={`rating ${getRatingColor(gioco.rating)}`}>
            {gioco.rating}/10
          </span>
          <span className={`status-badge ${getStatusColor(gioco.status)}`}>
            {formatStatus(gioco.status)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
