import React from "react";
import CardsContainer from "../components/CardsContainer";
import GastosIngresos from "../components/GastosIngresos";
import Balance from "../components/Balance";

const Dashboard = () => {
  return (
    <>
      <section className="total-home">
        <div className="home-wrapper">
          <CardsContainer />
          <GastosIngresos />
          <Balance />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
