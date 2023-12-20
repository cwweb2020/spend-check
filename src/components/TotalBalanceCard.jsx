import React from "react";

const TotalBalanceCard = () => {
  return (
    <>
      <div style={cointainer}>
        <ul style={ul}>
          <li style={li}>
            <h4>Ingresos</h4> <span style={{ color: "#4caf50" }}>$ 1700</span>
          </li>
          <li style={li}>
            <h4>Gastos</h4> <span style={{ color: "red" }}>$ 312</span>
          </li>
          <hr />
          <li style={li}>
            <h4>Balance</h4> <span>$ 1388</span>
          </li>
        </ul>
      </div>
    </>
  );
};

const cointainer = {
  background: "#fff",
  borderRadius: "31px",
  minHeight: "14em",
  width: "300px",
  boxShadow:
    "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);",
};

const ul = {
  listStyle: "none",
  width: "80%",
};

const li = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1em 0",
  marginBottom: "1.125em",
};
export default TotalBalanceCard;
