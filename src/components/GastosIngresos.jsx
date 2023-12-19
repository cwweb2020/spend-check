import React from "react";
import MedioCirculo from "./MedioCirculo";

const GastosIngresos = () => {
  const porcentajes = [20, 10, 50, 20];
  const colores = ["red", "#36A2EB", "yellow", "green"];

  //

  return (
    <>
      <section className="total-gastos-ingresos">
        <div className="expenses-incomes-wrapperr">
          <div className="expenses-expenses">
            <h4 className="expenses-incomes-title">Gastos por catergoría</h4>
            <div className="expenses-container">
              <div className="topcontainer">
                <div className="left-box">
                  <MedioCirculo porcentajes={porcentajes} colores={colores} />
                </div>
                <div className="right-box">
                  <h2>$ 950</h2>
                  <ul>
                    <li>
                      <span style={{ backgroundColor: "red" }}></span>{" "}
                      Comestibles
                    </li>
                    <li>
                      <span style={{ backgroundColor: "#36a2eb" }}></span>{" "}
                      Medicamentos
                    </li>
                    <li>
                      <span style={{ backgroundColor: "green" }}></span>{" "}
                      Entretenimiento
                    </li>
                    <li>
                      <span style={{ backgroundColor: "yellow" }}></span>{" "}
                      Miscelaneos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="incomes-incomes">
            <h4 className="expenses-incomes-title">Ingresos por catergoría</h4>
            <div className="incomes-container">
              <div className="topcontainer">
                <div className="left-box">
                  <MedioCirculo porcentajes={porcentajes} colores={colores} />
                </div>
                <div className="right-box">
                  <h2>$ 950</h2>
                  <ul>
                    <li>
                      <span style={{ backgroundColor: "red" }}></span> Sueldo
                    </li>
                    <li>
                      <span style={{ backgroundColor: "#36a2eb" }}></span>{" "}
                      Intereses/banc
                    </li>
                    <li>
                      <span style={{ backgroundColor: "green" }}></span>{" "}
                      Prestamos
                    </li>
                    <li>
                      <span style={{ backgroundColor: "yellow" }}></span> Otros
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GastosIngresos;
