import React from "react";

const Card = ({ icon, title }) => {
  return (
    <>
      <section className="total-card">
        <div className="card-wrapper">
          <div className="saldo">
            <h4>{title}</h4>
            <h5>$ 948</h5>
          </div>
          <div className="icono">
            <img src={icon} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
