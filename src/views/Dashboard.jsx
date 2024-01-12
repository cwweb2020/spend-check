import React from "react";
import CardsContainer from "../components/CardsContainer";
import GastosIngresos from "../components/GastosIngresos";
import Balance from "../components/Balance";
import SaldoCard from "../components/SaldoCard";
import ScrollToTopButton from "../components/ScrollToTopButton";
import BudgetSummary from "../components/BudgetSummary";

const Dashboard = () => {
  return (
    <>
      <section className="total-home">
        <div className="home-wrapper">
          <CardsContainer />
          <GastosIngresos />
          <Balance />
          <BudgetSummary />
          <SaldoCard />
          <ScrollToTopButton />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
