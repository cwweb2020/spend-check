import React from "react";
import { datos } from "../utils/fakeData";
import edit from "../assets/icons/edit.svg";
import bin from "../assets/icons/bin.svg";

const Table = () => {
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
                {datos.map((dato, index) => {
                  return (
                    <tr
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#f6f8ec5c" : "white",
                      }}
                      key={dato.id}
                    >
                      <td>{dato.fecha}</td>
                      <td>{dato.descripcion}</td>
                      <td>{dato.categoria}</td>
                      <td>{dato.valor}</td>
                      <td className="edit-delete">
                        <button>
                          <img
                            style={{ marginRight: "18px" }}
                            src={edit}
                            alt=""
                          />
                        </button>
                        <button>
                          <img src={bin} alt="" />
                        </button>
                      </td>
                    </tr>
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
