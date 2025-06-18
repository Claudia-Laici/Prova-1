import { useState } from "react";
import "./App.css";
import { getAllGames } from "./data/mockData.js";
import Header from "./components/header.jsx";
import GameList from "./components/GameList.jsx";
import Navigation from "./components/nav.jsx";

function App() {
  const giochi = getAllGames();
  const gamerTag = "Chandra";

  const [activeTab, setActiveTab] = useState("Tutti");

  // Funzione per filtrare i giochi in base al tab
  const getFilteredGames =
    activeTab === "Tutti" ? giochi: giochi.filter((gioco) => gioco.status === activeTab);

  return (
    <div className="Card">
      <Header gamerTag={gamerTag} totalGames={giochi.length} />

      <header className="Card-header">
        <h1>La Mia Libreria Videogiochi</h1>
      </header>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <GameList giochi={getFilteredGames} />

    </div>
  );
}


export default App;
