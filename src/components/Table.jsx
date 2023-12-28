import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { datos } from "../utils/fakeData";
import TrTableComponent from "./TrTableComponent";
import Card from "./Card";
import { DataContext } from "../context/provider/DataUserProvider";
import iconChancho from "../assets/icons/chancho.svg";
import TheadTable from "./TheadTable";
import TableButton from "./TableButton";
import Flotante from "./material-icons/Flotante";
import money from "../assets/img/money.svg";
import expenses from "../assets/img/expenses.svg";
import ModalForm from "./ModalForm";

//

const Table = ({ titulo, bg }) => {
  const [data, setData] = useState(datos);
  const [total, setTotal] = useState(0);
  //
  // const { setSubTotal } = useContext(DataContext);

  ////

  // obtengo la url actual
  const location = useLocation();
  const currentUrl = location.pathname;
  const pureUrl = currentUrl.replace("/", "");
  console.log(pureUrl);

  ////
  const handleDelete = (id) => () => {
    const newData = data.filter((dato) => dato.id !== id);
    setData(newData);
  };

  ///

  const getTotal = () => {
    let precioSinSigno = data.map((dato) => dato.valor.replace("$", "").trim());
    let precioNumerico = precioSinSigno.map((dato) => parseFloat(dato));
    let total = precioNumerico.reduce((acc, curr) => acc + curr, 0);
    setTotal(total.toFixed(2));
  };

  useEffect(() => {
    getTotal();
  }, [data]);

  return (
    <>
      <section className="total-table">
        <div className="table-wrapper">
          <div className="contenedor-titulo-botoningreso">
            <h2>{titulo} </h2>
            <div className="testing">
              {/* <TableButton titulo={titulo} button={button} bg={bg} /> */}
              <Flotante bg={bg} />
              <h4 style={{ color: titulo === "Gastos" ? "red" : "#388e3c" }}>
                {titulo}
              </h4>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <TheadTable />
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
      <div className="box">
        <img
          src={titulo === "Ingresos" ? money : expenses}
          alt=""
          width="161px"
        />
        <div className="box-wrapper">
          <Card
            title={"Total"}
            total={total}
            icon={titulo === "Ingresos" ? "chancho" : "money"}
          />
        </div>
      </div>
      <br />
      <br />
      <ModalForm url={pureUrl} />
    </>
  );
};

export default Table;
