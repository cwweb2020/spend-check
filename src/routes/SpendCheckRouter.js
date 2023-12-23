import Dashboard from "../views/Dashboard";
import React from "react";
import { Route, Routes } from "react-router";
import Incomings from "../views/Incomings";
import Expenses from "../views/Expenses";
import Header from "../components/Header";
import SaldoActual from "../components/SaldoActual";

const SpendCheckRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ingresos" element={<Incomings />} />
        <Route path="/gastos" element={<Expenses />} />
        <Route path="/saldo" element={<SaldoActual />} />
      </Routes>
    </>
  );
};

export default SpendCheckRouter;
