import { useState } from "react";
import "./App.css";
import { getAllGames } from "./data/mockData.js";
import  Header from "./components/header.jsx";
import GameCard from "./components/GameCard.jsx";

function App() {
  const giochi = getAllGames();
  const gamerTag = "Chandra"

    return (
    <Header totalGames={giochi.length} gamerTag={gamerTag}/>
    )

    return (
    <div className="Card">
      <header className="Card-header">
        <h1>La Mia Libreria Videogiochi</h1>
      </header>
      
      <main className="games-container">
        {games.map(game => (
          <GameCard
            key={game.id}
            cover={game.cover}
            title={game.title}
            genre={game.genre}
            rating={game.rating}
            status={game.status}
          />
        ))}
      </main>
    </div>
  );

  }




  

export default App;
