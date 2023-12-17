import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const MedioCirculo = ({ porcentajes, colores }) => {
  const data = porcentajes.map((porcentaje, index) => ({
    value: porcentaje,
    color: colores[index],
  }));

  return (
    <PieChart
      data={data}
      lineWidth={30}
      style={{ width: "fit-content" }} // Ajusta la altura según tus necesidades
      startAngle={-90}
      totalValue={100}
    />
  );
};

export default MedioCirculo;
