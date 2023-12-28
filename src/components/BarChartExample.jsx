import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const BarChartExample = () => {
  const [Label, setLabel] = React.useState([]);
  // Datos
  // const data = [
  //   { name: "Octubre", ingresos: 1200, gastos: 800 },
  //   { name: "Noviembre", ingresos: 1800, gastos: 1200 },
  //   { name: "Diciembre", ingresos: 1700, gastos: 312 },
  //   // ... más datos
  // ];
  //

  //  este es el dato que va
  // supongamos que viene data de la base de datos
  const db = [
    { name: "Vivienda", monto: 290 },
    { name: "Entretenimiento", monto: 60 },
    { name: "Transporte", monto: 55 },
    { name: "Alimentación", monto: 210 },
    { name: "Educación", monto: 75 },
    { name: "Salud", monto: 150 },
    { name: "Otros", monto: 15 },
  ];
  const data2 = [...db];
  //////

  const orderedData = [...data2].sort((a, b) => b.monto - a.monto);

  const countWordsLength = (str) => {
    let abreviated = str.map((item) => {
      if (item.name.length > 5) {
        item.name = item.name.slice(0, 6) + ".";
      }
      return item;
    });
    setLabel(abreviated);
  };

  useEffect(() => {
    // countWordsLength(data2);
    countWordsLength(orderedData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={2}>
      <BarChart
        data={Label}
        // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        margin={{ top: 5, right: 30, left: 20, bottom: 6 }}
        width={500}
        height={300}
      >
        <CartesianGrid strokeDasharray="3 8" />
        <XAxis dataKey="name" />
        {/* <XAxis dataKey="name" /> */}
        {/* <XAxis dataKey="name" angle={-45} interval={0} textAnchor="end" /> */}
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Bar dataKey="ingresos" fill="#82ca9d" name="Ingresos" />
        <Bar dataKey="gastos" fill="#8884d8" name="Gastos" /> */}
        <Bar dataKey="monto" fill="#ff725e" name="Monto" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartExample;
