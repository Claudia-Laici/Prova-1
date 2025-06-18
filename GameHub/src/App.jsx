import { useState } from "react";
import "./App.css";
import { getAllGames } from "./data/mockData.js";
import Header from "./components/header.jsx";
import GameList from "./components/GameList.jsx";
import Navigation from "./components/nav.jsx";
import GameStats from "./components/gameStats.jsx";

function App() {
  const giochi = getAllGames();
  const gamerTag = "Chandra";

  const [activeTab, setActiveTab] = useState("Tutti");

  // Funzione per filtrare i giochi in base al tab
  const getFilteredGames =
    activeTab === "Tutti"
      ? giochi
      : giochi.filter((gioco) => gioco.status === activeTab);

  return (
    <div className="App">
      <Header gamerTag={gamerTag} totalGames={giochi.length} />
      
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <aside>
        <GameStats giochi={giochi} />
      </aside>

      <h2 className="Card-header">La Mia Libreria Videogiochi</h2>

      <GameList giochi={getFilteredGames} />
    </div>
  );
}

export default App;
