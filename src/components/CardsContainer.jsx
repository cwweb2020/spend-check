import React from "react";
import Card from "./Card";
import vision from "../assets/img/vision.svg";

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
            <div className="left-box">
              <div className="imgcontainer">
                <img src={vision} alt="" />
              </div>
            </div>
            <div className="right-box">
              {cardsIcons.map((cardIcon) => (
                <Card
                  key={cardIcon.id}
                  icon={cardIcon.icon}
                  title={cardIcon.title}
                  total={cardIcon.total}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsContainer;
