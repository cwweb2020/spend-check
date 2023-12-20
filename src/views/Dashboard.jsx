import React from "react";
import CardsContainer from "../components/CardsContainer";
import GastosIngresos from "../components/GastosIngresos";
import Balance from "../components/Balance";
import SaldoCard from "../components/SaldoCard";

const Dashboard = () => {
  return (
    <>
      <section className="total-home">
        <div className="home-wrapper">
          <CardsContainer />
          <GastosIngresos />
          <Balance />
          <SaldoCard />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
