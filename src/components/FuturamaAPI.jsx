import axios from "axios";
import { useEffect, useState } from "react";

export const Futurama = () => {
  const [futuramaCharacter, setFuturamaCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/futurama/characters"
        );
        setFuturamaCharacters(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error al recuperar los datos de la API", error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="container-fluid p-0">
      <div className="carousel-container vh-100">
        <div id="coffeeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {futuramaCharacter.map((character, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={character.images.main} className="d-block m-auto" alt={character.title} />
                <div className="carousel-caption d-none d-md-block ">
                  <h3> {character.name.first} {character.name.middle} {character.name.last}</h3>
                  <h5> {character.occupation}</h5>
                  <p>{character.sayings[0]}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#coffeeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#coffeeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};