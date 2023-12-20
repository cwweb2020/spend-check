import React from "react";
import BarChartExample from "./BarChartExample";
import balance from "../assets/img/balance.svg";

const Balance = () => {
  return (
    <>
      <section className="total-balance">
        <div className="wrapper-balance">
          <h3>Balance</h3>
          <br />
          <div className="balance-chart-container">
            <div className="balance-container">
              <img src={balance} alt="" width={400} />
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
