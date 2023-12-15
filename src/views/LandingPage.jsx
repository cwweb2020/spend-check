import React from "react";
import g from "../assets/img/g.png";

const LandingPage = () => {
  return (
    <>
      <section className="landing-total">
        <div className="wrapper">
          <h1>Ingrese con su cuenta de google</h1>
          <button>
            <img src={g} alt="" />
            Accede con Google
          </button>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
