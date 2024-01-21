import React from 'react';
import CardsContainer from '../components/CardsContainer';
import GastosIngresos from '../components/GastosIngresos';
import SaldoCard from '../components/SaldoCard';
import ScrollToTopButton from '../components/ScrollToTopButton';
import BudgetSummary from '../components/BudgetSummary';
import SaldoCard2 from '../components/SaldoCard2';

const Dashboard = () => {
  return (
    <>
      <section className="total-home">
        <div className="home-wrapper">
          <CardsContainer />
          <GastosIngresos />
          <BudgetSummary />
          <SaldoCard2 />
          {/* <SaldoCard /> */}
          <ScrollToTopButton />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
