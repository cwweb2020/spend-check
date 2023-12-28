import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const PieComponent = () => {
  const data = [
    { name: "Comida", value: 150 },
    { name: "Transporte", value: 100 },
    { name: "Alquiler", value: 200 },
    { name: "Entretenimiento", value: 80 },
    { name: "Otros", value: 20 },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#9933cc", "#4CAF50", "#ff725e"];

  const orderData = data.sort((a, b) => b.value - a.value);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={orderData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {orderData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
      <br />
      <br />
      <br />
    </ResponsiveContainer>
  );
};

export default PieComponent;
