import React from "react";
import edit from "../assets/icons/edit.svg";
import bin from "../assets/icons/bin.svg";

const TrTableComponent = ({ dato, index, handleDelete }) => {
  return (
    <>
      <tr
        style={{
          backgroundColor: index % 2 === 0 ? "#f6f8ec5c" : "white",
        }}
        // key={dato.id}
      >
        <td>{dato.fecha}</td>
        <td>{dato.descripcion}</td>
        <td>{dato.categoria}</td>
        <td>{dato.valor}</td>
        <td className="edit-delete">
          <button>
            <img style={{ marginRight: "18px" }} src={edit} alt="" />
          </button>
          <button onClick={handleDelete(dato.id)}>
            <img src={bin} alt="" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TrTableComponent;
