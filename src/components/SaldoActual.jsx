import React from "react";
import { LinearChart } from "./charts/LinearChart";
import BarChartExample from "./BarChartExample";
//

//

//

const SaldoActual = () => {
  //

  //
  return (
    <>
      <div style={container} className="total-saldo-actual">
        <h1>Saldo actual</h1>
        <div className="saldo-linear-contaienr" style={{ width: "900px" }}>
          <LinearChart />
        </div>
        <div className="saldo-bar-container" style={container2}>
          <BarChartExample />
        </div>
      </div>
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

export default SaldoActual;
