import React from 'react';
import CardsContainer from '../components/CardsContainer';
import GastosIngresos from '../components/GastosIngresos';
import SaldoCard from '../components/SaldoCard';
import ScrollToTopButton from '../components/ScrollToTopButton';
import BudgetSummary from '../components/BudgetSummary';

const Dashboard = () => {
  return (
    <>
      <section className="total-home">
        <div className="home-wrapper">
          <CardsContainer />
          <GastosIngresos />
          <BudgetSummary />
          <SaldoCard />
          <ScrollToTopButton />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
