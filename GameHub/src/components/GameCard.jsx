/* - Componente `GameCard.js` con props base
- Cover image (300x400), titolo, genere
- Voto numerico colorato (verde >8, giallo 6-8, rosso <6)
- Badge colorato per stato (completato=verde, in-corso=giallo, wishlist=blu, abbandonato=grigio) */

const GameCard = ({ cover, title, genre, rating, status }) => {
    return (
        <div className="game-card">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
            <p>Genere: {genre}</p>
            <p>Voto: {rating}</p>
            <p>Stato: {status}</p>
        </div>
    );
};

export default GameCard;