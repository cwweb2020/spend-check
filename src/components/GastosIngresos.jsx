import React, { useEffect, useRef, useState } from "react";
import MedioCirculo from "./MedioCirculo";
import LiGastosIngresos from "./LiGastosIngresos";

const GastosIngresos = () => {
  const porcentage = [20, 10, 50, 20];
  const colors = ["#9933cc", "#36A2EB", "#ff725e", "green"];

  ///
  ///
  // gastos
  const category = [
    {
      name: "Alquiler",
      color: "#ff725e",
      porcentaje: 50,
    },
    {
      name: "Comestibles",
      color: "#9933cc",
      porcentaje: 20,
    },
    {
      name: "Salud",
      color: "#0099cc",
      porcentaje: 10,
    },
    {
      name: "Entretenimiento",
      color: "#b8860b",
      porcentaje: 5,
    },
    {
      name: "CC",
      color: "#8fbc8f",
      porcentaje: 15,
    },
  ];

  // Ordena el array en base a los porcentajes de manera decreciente
  // const orderedCategory = category.sort((a, b) => b.porcentaje - a.porcentaje);
  const porcentage1 = category.map((category) => category.porcentaje);
  console.log("porcentaje1 ", porcentage1);
  const colors1 = category.map((category) => category.color);
  console.log("colors1 ", colors1);

  // Extrae los colores después de ordenar el array
  // const orderedColors = orderedCategory.map((category) => category.color);

  // ingresos
  const category2 = [
    {
      name: "Sueldo",
      color: "#0099cc",
      porcentaje: 50,
    },
    {
      name: "Intereses/banc",
      color: "#ff725e",
      porcentaje: 10,
    },
    {
      name: "Prestamos",
      color: "green",
      porcentaje: 20,
    },
    {
      name: "Adicionales",
      color: "yellow",
      porcentaje: 20,
    },
  ];
  //
  // obtengo los porcentajes y ordeno las categorias por porcentaje
  const porcentage2 = category2.map((category) => category.porcentaje);
  const colors2 = category2.map((category) => category.color);
  const orderedCategory = category.sort((a, b) => b.porcentaje - a.porcentaje);

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
                  <MedioCirculo porcentage={porcentage1} colors={colors1} />
                  <h2>$950</h2>
                </div>
                <div className="right-box">
                  <ul>
                    {orderedCategory.map((category, index) => {
                      return (
                        <LiGastosIngresos
                          key={index}
                          category={category.name}
                          color={category.color}
                        />
                      );
                    })}
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
                  <MedioCirculo porcentage={porcentage2} colors={colors2} />
                  <h2>$950</h2>
                </div>
                <div className="right-box">
                  <ul>
                    {category2.map((category, index) => {
                      return (
                        <LiGastosIngresos
                          key={index}
                          category={category.name}
                          color={category.color}
                        />
                      );
                    })}
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
