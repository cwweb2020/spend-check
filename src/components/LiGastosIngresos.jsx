import React from "react";

const LiGastosIngresos = ({ category, color }) => {
  return (
    <>
      <li>
        <span style={{ backgroundColor: color }}></span> {category}
      </li>
    </>
  );
};

export default LiGastosIngresos;
