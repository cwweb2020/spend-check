import React from "react";
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
  // Datos de ejemplo (puedes reemplazarlos con tus propios datos)
  const data = [
    { name: "Octubre", ingresos: 1200, gastos: 800 },
    { name: "Noviembre", ingresos: 1800, gastos: 1200 },
    { name: "Diciembre", ingresos: 1700, gastos: 312 },
    // ... más datos
  ];

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={2}>
      <BarChart
        data={data}
        // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        width={500}
        height={300}
      >
        <CartesianGrid strokeDasharray="4 1 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ingresos" fill="#82ca9d" name="Ingresos" />
        <Bar dataKey="gastos" fill="#8884d8" name="Gastos" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartExample;
