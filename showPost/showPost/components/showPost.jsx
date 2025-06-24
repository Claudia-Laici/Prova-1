import { useState, useEffect } from "react";
import "./showPost.css";

export default function ShowPost() {
  const [dogImage, setDogImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDogs = async () => {
    try {
  setLoading(true);
  setError(null);

  const response = await fetch("https://dog.ceo/api/breeds/image/random");

  if (!response.ok) {
    throw new Error(`Error HTTP  ${response.status}`);
  }


  const data = await response.json();
  setDogImage(data.message);
} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);
}
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div>
       
        <h2>Image Dog</h2>
      <img src={dogImage} alt="Dog Image" />

       <button onClick={fetchDogs}>🐾 Change Dog</button>
    </div>
  );

}       

