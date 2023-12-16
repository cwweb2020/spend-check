import React from "react";
import CardsContainer from "../components/CardsContainer";
import GastosIngresos from "../components/GastosIngresos";
import Header from "../components/Header";
import Table from "../components/Table";

const Home = () => {
  return (
    <>
      <section className="total-home">
        <div className="home-wrapper">
          <Header />
          <CardsContainer />
          <GastosIngresos />
          <Table />
        </div>
      </section>
    </>
  );
};

export default Home;
