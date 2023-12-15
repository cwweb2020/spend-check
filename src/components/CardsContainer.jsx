import React from "react";
import Card from "./Card";

import { cardsIcons } from "../utils/cardsIcons";

const CardsContainer = () => {
  return (
    <>
      <br />
      <br />
      <section className="total-card-container">
        <div className="card-card-container">
          <h3>Vision General </h3>
          <div className="wrapper-card-container">
            {cardsIcons.map((cardIcon) => (
              <Card
                key={cardIcon.id}
                icon={cardIcon.icon}
                title={cardIcon.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsContainer;
