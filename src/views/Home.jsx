import React from "react";
import CardsContainer from "../components/CardsContainer";
import GastosIngresos from "../components/GastosIngresos";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <section className="total-home">
        <div className="home-wrapper">
          <Header />
          <CardsContainer />
          <GastosIngresos />
        </div>
      </section>
    </>
  );
};

export default Home;
