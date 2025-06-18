import { useState } from "react";
import "./App.css";
import { getAllGames } from "./data/mockData.js";
import Header from "./components/header.jsx";
import GameList from "./components/GameList.jsx";


function App() {
  const giochi = getAllGames();
  const gamerTag = "Chandra";

  return (
    <div className="Card">
      <Header totalGames={giochi.length} gamerTag={gamerTag} />
      
      <header className="Card-header">
        <h1>La Mia Libreria Videogiochi</h1>
      </header>
      
     <main className="games-container">
        <GameList giochi={giochi} />
      </main>
    </div>
  );
}


export default App;
