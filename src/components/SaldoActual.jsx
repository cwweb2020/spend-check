import React from "react";
import { LinearChart } from "./charts/LinearChart";
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
        <div style={{ width: "900px" }}>
          <LinearChart />
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

export default SaldoActual;
