import React, { useState } from "react";
import { datos } from "../utils/fakeData";
import TrTableComponent from "./TrTableComponent";

const Table = () => {
  /////

  const [data, setData] = useState(datos);

  ////
  const handleDelete = (id) => () => {
    const newData = data.filter((dato) => dato.id !== id);
    setData(newData);
  };

  ///

  return (
    <>
      <section className="total-table">
        <div className="table-wrapper">
          <h2>Ingresos</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Categoría</th>
                  <th>Valor</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- Filas --> */}
                {data.map((dato, index) => {
                  return (
                    <TrTableComponent
                      key={dato.id}
                      dato={dato}
                      index={index}
                      handleDelete={handleDelete}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Table;
