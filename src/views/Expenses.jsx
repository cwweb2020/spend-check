import React from "react";
import Table from "../components/Table";

const Expenses = () => {
  return (
    <>
      <Table
        titulo={"Gastos"}
        button={"Nuevo Gasto"}
        bg={"#d32f2f"}
        iconMoney={"iconMoney"}
      />
    </>
  );
};

export default Expenses;
