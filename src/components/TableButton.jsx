import React from "react";

const TableButton = ({ bg, button }) => {
  return (
    <>
      <button style={{ backgroundColor: bg }} className="boton-ingreso">
        {button}
      </button>
    </>
  );
};

export default TableButton;
