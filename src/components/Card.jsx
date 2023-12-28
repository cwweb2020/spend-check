import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "../context/provider/DataUserProvider";
import chancho from "../assets/icons/chancho.svg";
import money from "../assets/icons/gastos.svg";

const Card = ({ icon, title, total }) => {
  const navigate = useNavigate();
  // const { subTotal } = useContext(DataContext);
  //

  // // obtengo la url actual
  // const location = useLocation();
  // const currentUrl = location.pathname;
  // const pureUrl = currentUrl.replace("/", "");
  // console.log(pureUrl);

  //

  const handleNavigate = (title) => {
    //  navigate("/dashboard");
    let changedTitle =
      title === "Tarjeta de credito"
        ? "tarjeta"
        : title === "Saldo actual"
        ? "saldo"
        : title.toLowerCase();
    // console.log(tarjeta);

    if (title === "Tarjeta de credito") {
      return;
    }

    if (title === "Saldo actual") title = "saldo";
    navigate(`/${changedTitle}`);
  };

  //
  return (
    <>
      <section onClick={() => handleNavigate(title)} className="total-card">
        <div className="card-wrapper">
          <div className="expenses">
            <h4>{title}</h4>
            <h5>{total}</h5>
          </div>
          <div className="icon">
            <img
              src={
                icon === "chancho" ? chancho : icon === "money" ? money : icon
              }
              alt="icon"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
