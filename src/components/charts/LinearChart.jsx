import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Monto",
    },
  },
  scales: {
    // x: {
    //   title: {
    //     display: true,
    //     text: "Meses",
    //   },
    // },
    y: {
      title: {
        display: true,
        text: "Monto",
      },
    },
  },
};
//  ejemplo de manejo de objeto para graficar
const arrObjGastos = [
  {
    month: "Setiembre",
    amount: 1250,
  },
  {
    month: "Octubre",
    amount: 1450,
  },
  {
    month: "Noviembre",
    amount: 1600,
  },
  {
    month: "Diciembre",
    amount: 1900,
  },
];
const arrMeses = arrObjGastos.map((obj) => obj.month);

//

const dataMonths = ["Setiembre", "Octubre", "Noviembre", "Diciembre"];
const labels = [...dataMonths];
// Datos de ingresos mensuales fijos
// const ingresosMensuales = [2500, 2520, 2750, 3100];
const egresosMensuales = [1250, 1450, 1600, 1900];

export const data = {
  labels,
  datasets: [
    // {
    //   fill: true,
    //   label: "Ingresos",
    //   data: ingresosMensuales,
    //   // borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    //   pointRadius: 10,
    //   borderColor: "rgba(75,192,192,1)",
    // },
    {
      fill: true,
      label: "Gastos",
      data: egresosMensuales,
      backgroundColor: "#607d8b78", // Puedes cambiar el color
      pointRadius: 10,
      borderColor: "rgba(255,99,132,1)", // Puedes cambiar el color
    },
  ],
};

export function LinearChart() {
  return <Line options={options} data={data} />;
}
