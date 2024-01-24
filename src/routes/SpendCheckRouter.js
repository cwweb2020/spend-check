import Dashboard from '../views/Dashboard';
import React from 'react';
import { Route, Routes } from 'react-router';
import Incomings from '../views/Incomings';
import Expenses from '../views/Expenses';
import Header from '../components/Header';
import SaldoActual from '../components/SaldoActual';
import Budget from '../views/Budget';
import BuiltBudget from '../components/BuiltBudget';
import ScrollToTopOnMount from '../utils/ScrollToTopOnMount';
import NotFound from '../views/NotFound';

const SpendCheckRouter = () => {
  return (
    <>
      <Header />
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ingresos" element={<Incomings />} />
        <Route path="/gastos" element={<Expenses />} />
        <Route path="/saldo" element={<SaldoActual />} />
        <Route path="/presupuesto" element={<Budget />} />
        <Route path="/meta" element={<BuiltBudget />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default SpendCheckRouter;
