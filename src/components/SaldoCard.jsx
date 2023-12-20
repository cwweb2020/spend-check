import React from "react";

const SaldoCard = () => {
  return (
    <>
      <div className="total-balance-card-container">
        <section className="total-balance-card">
          <div className="refill">
            <div className="wrapper-balance-card">
              <ul>
                <li>
                  <h4>Ingresos</h4> <h4 style={{ color: "#388e3c" }}>$960</h4>
                </li>
                <li>
                  <h4>Gastos</h4> <h4 style={{ color: "red" }}>$350</h4>
                </li>
                <hr />
                <li>
                  <h4 style={{ color: "black", fontStyle: "italic" }}>SALDO</h4>{" "}
                  <h4 style={{ color: "black", fontStyle: "italic" }}>$610</h4>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
    </>
  );
};

export default SaldoCard;
