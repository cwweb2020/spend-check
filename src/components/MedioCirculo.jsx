import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const MedioCirculo = ({ porcentage, colors }) => {
  const data = porcentage.map((porcentage, index) => ({
    value: porcentage,
    color: colors[index],
  }));
  //
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
