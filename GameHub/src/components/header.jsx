import './Header.css'; 

function Header({gamerTag, totalGames}) {
  return (
    <header className="header-style">
      <div className="title-style">
        <h1>🎮 Top Players 🎮 <span className="gamer-tag">{gamerTag}</span></h1>
      </div>
      <div className="gamerTag-style">
        🎮 Total Games: <b>{totalGames}</b> 🎮
      </div>
    </header>
  );
}


export default Header;