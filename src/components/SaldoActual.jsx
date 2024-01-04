import React from "react";
import { LinearChart } from "./charts/LinearChart";
import BarChartExample from "./BarChartExample";
import PieComponent from "./charts/PieComponent";
import income from "../assets/icons/incomes.svg";
import outcome from "../assets//icons/outcomes.svg";
import dollar from "../assets/icons/dollar-sign.svg";
import Divider from "@mui/material/Divider";
import saldo from "../assets/icons/rest-saldo.svg";
import { DataContext } from "../context/provider/DataUserProvider";

//
//

const SaldoActual = () => {
  const { firstFours } = React.useContext(DataContext);

  //
  //
  //

  return (
    <>
      <section className="total-saldo-actual">
        <br />
        <br />
        <div className="total-saldo-big-container">
          <h2 className="total-saldo-title">Saldo actual</h2>

          <div className="total-saldo-wrapper">
            <h4 className="total-saldo-subtitle">analisis de gastos</h4>
            <div className="top-saldo-linear-aside-container">
              <div className="saldo-linear-contaienr">
                <LinearChart />
              </div>
              <div className="aside-saldo-actual-container">
                <div className="ingresos">
                  <div className="box1">
                    <img src={income} alt="" />
                    <h3>Ingresos</h3>
                  </div>
                  <p style={{ color: "green" }}>
                    <img src={dollar} alt="" />
                    1500
                  </p>
                </div>
                <div className="gastos">
                  <div className="box1">
                    <img src={outcome} alt="" />
                    <h3>gastos</h3>
                  </div>
                  <p style={{ color: "red" }}>
                    <img src={dollar} alt="" />
                    600
                  </p>
                </div>
                <div className="gastos">
                  <div className="box1">
                    <img src={saldo} alt="" />
                    <h3>saldo</h3>
                  </div>
                  <p>
                    <img src={dollar} alt="" />
                    500
                  </p>
                </div>
              </div>
            </div>
            <Divider />
            <div className="saldo-bar-container">
              <h3>Gastos por categoria</h3>

              <div className="saldo-bar-icons-most-expenses">
                <div className="saldo-bar-chart-wrapper">
                  <BarChartExample />
                </div>
                <div className="saldo-bar-chart-imgs">
                  <h4>Categorias con mas gastos:</h4>

                  <div className="img-icons-container">
                    {firstFours.map((item, index) => {
                      return (
                        <div className="saldo-bar-chart-img" key={index}>
                          <img src={item.img} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

export default SaldoActual;
