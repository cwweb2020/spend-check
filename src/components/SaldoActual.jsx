import React from "react";
import { LinearChart } from "./charts/LinearChart";
import BarChartExample from "./BarChartExample";
import PieComponent from "./charts/PieComponent";

//
//

const SaldoActual = () => {
  //
  //
  //

  return (
    <>
      <section className="total-saldo-actual">
        <div className="total-saldo-big-container">
          <h2 style={title1}>Saldo actual</h2>

          <div style={container} className="total-saldo-wrapper">
            <div className="saldo-linear-contaienr" style={{ width: "900px" }}>
              <LinearChart />
            </div>
            <div className="saldo-bar-container" style={container2}>
              <h3>Gastos por categoria</h3>
              <BarChartExample />
            </div>
          </div>
        </div>
        {/* <h3>Analitica de gastos por categorias</h3>
        <PieComponent /> */}
      </section>
      <br />
      <br />
    </>
  );
};

const container = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "4.3125em",
};
const container2 = {
  width: "700px",
  // height: "100%",
  marginTop: "4.3125em",
};

const title1 = {
  fontSize: "1.6em",
  fontWeight: "500",
  letterSpacing: "-0.5px;",
};

export default SaldoActual;
