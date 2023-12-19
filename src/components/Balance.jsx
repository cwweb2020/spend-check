import React from "react";
import BarChartExample from "./BarChartExample";

const Balance = () => {
  return (
    <>
      <section className="total-balance">
        <div className="wrapper-balance">
          <h3>Balance</h3>
          <br />
          <div className="balance-chart-container">
            <div className="balance-container">
              <ul>
                <li>
                  <h4>Ingresos</h4>{" "}
                  <span style={{ color: "#4caf50" }}>$ 1700</span>
                </li>
                <li>
                  <h4>Gastos</h4> <span style={{ color: "red" }}>$ 312</span>
                </li>
                <hr />
                <li>
                  <h4>Balance</h4> <span>$ 1388</span>
                </li>
              </ul>
            </div>
            <div className="balance-chart">
              <BarChartExample />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

export default Balance;
