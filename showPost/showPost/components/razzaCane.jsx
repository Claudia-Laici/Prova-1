import React, { useState, useEffect } from 'react';
import "./razzaCane.css";

const DogBreedsApp = () => {
  // Stati per gestire i dati e l'interfaccia
  const [breedImage, setBreedImage] = useState(''); // URL dell'immagine del labrador
  const [loading, setLoading] = useState(false); // Stato di caricamento
  const [error, setError] = useState(null); // Stato di errore

  // Funzione per ottenere l'immagine del labrador
  const fetchLabrador = async () => {
    setLoading(true);
    try {
      // Chiamata diretta per ottenere un'immagine casuale di Labrador
      const imgResponse = await fetch('https://dog.ceo/api/breed/labrador/images/random');
      
      if (imgResponse.ok) {
        const imgData = await imgResponse.json();
        setBreedImage(imgData.message);
        setError(null); // Reset dell'errore in caso di successo
      } else {
        throw new Error('Immagine del Labrador non trovata');
      }
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Carica l'immagine al mount del componente
  useEffect(() => {
    fetchLabrador();
  }, []);

  // Rendering condizionale per lo stato di caricamento
  if (loading) return <div>Caricamento...</div>;

  // Rendering condizionale per lo stato di errore
  if (error) return <div>Errore: {error}</div>;

  return (
    <div>
      <h2>Labrador</h2>
     
      
      {/* Mostra l'immagine del labrador */}
      {breedImage && (
        <div>
          <h3>Labrador</h3>
          <img 
            src={breedImage} 
            alt="Labrador"
            
          />
           <button onClick={fetchLabrador}>🐕 Nuova Immagine</button>
        </div>
        
      )}
    </div>
  );
};

export default DogBreedsApp;