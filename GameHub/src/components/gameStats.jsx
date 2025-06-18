import React from "react";
import "./gameStats.css";

const GameStats = ({ giochi }) => {
  const oreTotali = giochi
    .filter(g => g.status === "Completati" || g.status === "In Corso")
    .reduce((total, g) => total + (g.hoursPlayed || 0), 0);

  const numeroPerStato = giochi.reduce((acc, g) => {
    acc[g.status] = (acc[g.status] || 0) + 1;
    return acc;
  }, {});

  const votoMedio =
    giochi.length > 0
      ? (giochi.reduce((sum, g) => sum + g.rating, 0) / giochi.length).toFixed(1)
      : "N/A";

  const piattaforme = giochi.reduce((acc, g) => {
    acc[g.platform] = (acc[g.platform] || 0) + 1;
    return acc;
  }, {});

  const piattaformaTop = Object.keys(piattaforme).reduce((a, b) =>
    piattaforme[a] > piattaforme[b] ? a : b
  );

  return (
    <div className="game-stats">
      <h2>Statistiche</h2>
      <p><strong>Ore Totali Giocate:</strong> {oreTotali}</p>
      <p><strong>Giochi per Stato:</strong></p>
      <ul>
        {Object.entries(numeroPerStato).map(([stato, count]) => (
          <li key={stato}>
            {stato}: {count}
          </li>
        ))}
      </ul>
      <p><strong>Voto Medio:</strong> {votoMedio}/10</p>
      <p><strong>Piattaforma più usata:</strong> {piattaformaTop}</p>
    </div>
  );
};

export default GameStats;
