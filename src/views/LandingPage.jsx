import React, { useContext } from "react";
import g from "../assets/img/g.png";
import { DataContext } from "../context/provider/DataUserProvider";

const LandingPage = () => {
  const { handleLoged } = useContext(DataContext);

  return (
    <>
      <section className="landing-total">
        <div className="wrapper">
          <h1>Ingrese con su cuenta de google</h1>
          <button onClick={handleLoged}>
            <img src={g} alt="" />
            Accede con Google
          </button>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
