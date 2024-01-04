import React from "react";
import dollar from "../assets/icons/dollar-sign.svg";

//

const SaldoCard = () => {
  //

  //
  return (
    <>
      <div className="total-balance-card-container">
        <h4 className="total-balance-title">Saldo</h4>
        <section className="total-balance-card">
          <div className="refill">
            <div className="wrapper-balance-card">
              <ul>
                <li>
                  <h4>Ingresos</h4>{" "}
                  <h4
                    className="balance-card-number"
                    style={{ color: "#3b9a5f" }}
                  >
                    <img src={dollar} alt="" />
                    960
                  </h4>
                </li>
                <li>
                  <h4>Gastos</h4>{" "}
                  <h4 className="balance-card-number" style={{ color: "red" }}>
                    <img src={dollar} alt="" />
                    350
                  </h4>
                </li>
                <hr />
                <li>
                  <h4 style={{ color: "black" }}>Saldo Actual</h4>{" "}
                  <h4
                    className="balance-card-number"
                    style={{ color: "black" }}
                  >
                    <img src={dollar} alt="" />
                    610
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default SaldoCard;
