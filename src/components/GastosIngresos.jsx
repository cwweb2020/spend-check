import React from "react";
import MedioCirculo from "./MedioCirculo";

const GastosIngresos = () => {
  const porcentajes = [40, 10, 50];
  const colores = ["red", "#36A2EB", "green", "#0099cc"];

  //

  return (
    <>
      <section className="total-gastos-ingresos">
        <div className="gastos-ingresos-wrapper">
          <div className="gastos-gastos">
            <h4 className="gastos-ingresos-titulo">Gastos por catergoría</h4>
            <div className="contenedor-gastos">
              <div className="topcontainer">
                <div className="left-box">
                  <MedioCirculo porcentajes={porcentajes} colores={colores} />
                </div>
                <div className="right-box">
                  <h2>$ 950</h2>
                  <ul>
                    <li>
                      <span style={{ backgroundColor: "red" }}></span> red
                    </li>
                    <li>
                      <span style={{ backgroundColor: "#36a2eb" }}></span> blue
                    </li>
                    <li>
                      <span style={{ backgroundColor: "green" }}></span> green
                    </li>
                    <li>
                      <span style={{ backgroundColor: "yellow" }}></span> yellow
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottomcointainer">
                <a href="#">Ver mas</a>
              </div>
            </div>
          </div>
          <div className="ingresos-ingresos">
            <h4 className="gastos-ingresos-titulo">Ingresos por catergoría</h4>
            <div className="contenedor-ingresos">
              <div className="topcontainer">
                <div className="left-box">
                  <MedioCirculo porcentajes={porcentajes} colores={colores} />
                </div>
                <div className="right-box">
                  <h2>$ 950</h2>
                  <ul>
                    <li>
                      <span style={{ backgroundColor: "red" }}></span> red
                    </li>
                    <li>
                      <span style={{ backgroundColor: "#36a2eb" }}></span> blue
                    </li>
                    <li>
                      <span style={{ backgroundColor: "green" }}></span> green
                    </li>
                    <li>
                      <span style={{ backgroundColor: "yellow" }}></span> yellow
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottomcointainer">
                <a href="#">Ver mas</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GastosIngresos;
