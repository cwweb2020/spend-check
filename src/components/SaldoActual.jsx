import React from "react";
import { LinearChart } from "./charts/LinearChart";
import BarChartExample from "./BarChartExample";
import income from "../assets/icons/incomes.svg";
import outcome from "../assets//icons/outcomes.svg";
import dollar from "../assets/icons/dollar-sign.svg";
import Divider from "@mui/material/Divider";
import saldo from "../assets/icons/rest-saldo.svg";
import { DataContext } from "../context/provider/DataUserProvider";
import GastosChart from "./charts/GastosChart";
import { getPorcentageExpenses } from "../utils/calculations/getPorcentageExpenses";
import { LuAsterisk } from "react-icons/lu";
import { AiOutlinePercentage } from "react-icons/ai";
import { Card, CardContent } from "@mui/material";

//
//

const SaldoActual = () => {
  const { firstFours } = React.useContext(DataContext);

  //
  //
  //

  const gastosData = [
    { label: "setiembre", amount: 500 },
    { label: "octubre", amount: 750 },
    { label: "noviembre", amount: 450 },
    { label: "diciembre", amount: 800 },
  ];

  //
  const totalIncomes = 1050;
  const porcentageArray = [];

  const porcentageFunc = () => {
    gastosData.map((gasto) => {
      const percent = getPorcentageExpenses(gasto.amount, totalIncomes);
      porcentageArray.push({ label: gasto.label, percent });
    });
    return porcentageArray;
  };

  const porcentage = porcentageFunc();

  React.useEffect(() => {
    porcentageFunc();
  }, []);

  return (
    <>
      <section className="total-saldo-actual">
        <br />
        <br />
        <div className="total-saldo-big-container">
          <h2 className="total-saldo-title">Saldo actual</h2>

          <div className="total-saldo-wrapper">
            <h4 className="total-saldo-subtitle">analisis de gastos</h4>
            <div className="top-saldo-linear-aside-container">
              <div className="saldo-linear-contaienr">
                <LinearChart />
              </div>

              <div className="aside-saldo-actual-container">
                <div className="ingresos">
                  <div className="box1">
                    <img src={income} alt="" />
                    <h3>Ingresos</h3>
                  </div>
                  <p style={{ color: "green" }}>
                    <img src={dollar} alt="" />
                    1500
                  </p>
                </div>

                <div className="gastos">
                  <div className="box1">
                    <img src={outcome} alt="" />
                    <h3>gastos</h3>
                  </div>
                  <p style={{ color: "red" }}>
                    <img src={dollar} alt="" />
                    600
                  </p>
                </div>

                <div className="saldo">
                  <div className="box1">
                    <img src={saldo} alt="" />
                    <h3>saldo</h3>
                  </div>
                  <p>
                    <img src={dollar} alt="" />
                    900
                  </p>
                </div>
              </div>
            </div>
            <Divider />
            <div className="saldo-bar-container">
              <h3>Gastos por categoría</h3>

              <div className="saldo-bar-icons-most-expenses">
                <div className="saldo-bar-chart-wrapper">
                  <BarChartExample />
                </div>
                <div className="saldo-bar-chart-imgs">
                  <h4>Categoría con mas gastos:</h4>

                  <div className="img-icons-container">
                    {firstFours.map((item, index) => {
                      return (
                        <div className="saldo-bar-chart-img" key={index}>
                          <img src={item.img} alt="" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div className="bottom-compare-categories saldo-bar-container">
              <h4 className="comparative-title">progresión de gastos</h4>

              <div className="gasto-chart-compare" style={{ width: "67%" }}>
                <GastosChart data={porcentage} />
                <p
                  style={{
                    padding: "1.25em 0 1.25em 0.93em",
                    fontSize: "1em",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LuAsterisk /> Este grafico muestra la relación entre tus
                  gastos y tus ingresos en{" "}
                  <span style={{ opacity: "0" }}>.</span>{" "}
                  <AiOutlinePercentage />
                </p>
              </div>
              <h5 className="recomendations-compare-title">
                Analítica en base a los datos
              </h5>

              <div className="card-saldo-actual-wrapper">
                <Card>
                  <CardContent>
                    <p className="card-p-content">
                      <b>Gasto Promedio Mensual:</b> Calcula el promedio mensual
                      de gastos sumando los gastos de los cuatro meses y
                      dividiéndolo entre el número de meses. Promedio Mensual =
                      Gasto de Setiembre + Gasto de Octubre + Gasto de Noviembre
                      + Gasto de Diciembre 4 Promedio Mensual= 4 Gasto de
                      Setiembre+Gasto de Octubre+Gasto de Noviembre+Gasto de
                      Diciembre
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <p>
                      <b> Tendencia de Gastos: </b>Observa la tendencia general
                      de los gastos. ¿Están aumentando, disminuyendo o
                      manteniéndose estables? Esto puede ayudarte a tomar
                      decisiones sobre el manejo de tus finanzas.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <p>
                      <b> Mes con Mayor/Menor Gasto:</b> Identifica el mes en el
                      que gastaste más y el mes en el que gastaste menos. Esto
                      puede ayudarte a entender patrones estacionales o
                      identificar meses en los que podrías necesitar ajustar tus
                      gastos.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <p>
                      <b> Análisis de Proporciones:</b> Examina la proporción de
                      gastos en cada mes en relación con el total de los cuatro
                      meses. ¿Hubo un mes en el que gastaste más en comparación
                      con los otros meses?
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

export default SaldoActual;
