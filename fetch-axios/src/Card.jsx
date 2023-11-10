import React, { useEffect, useState } from "react";

const CardComponent = () => {
  const [cardData, setCardData] = useState(null);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCardData(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="row p-5">
      {cardData?.map((card, index) => (
        <div className="col-md-3 p-3" key={index}>
          <div className="card h-100">
            <img className="card-img-top" src={card.image} alt={card.title} />
            <div className="card-body ">
              <h5 className="card-title">{card.name}</h5>
              <p className="card-text">{card.location?.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
