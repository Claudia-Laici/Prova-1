import GameCard from "./GameCard.jsx";

function GameList({ giochi }) {
  return (
    <ul className="grid">
      {giochi.map((gioco) => (
        <GameCard key={gioco.id} gioco={gioco} />
      ))}
    </ul>
  );
}

export default GameList;