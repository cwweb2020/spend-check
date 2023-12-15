import React from "react";
import "./styles/base.scss";
import Routes from "./routes";
import MedioCirculo from "./components/MedioCirculo";

const App = () => {
  const porcentajes = [40, 10, 50];
  const colores = ["red", "#36A2EB", "green", "#0099cc"];
  return (
    <>
      <Routes />
      {/* <MedioCirculo porcentajes={porcentajes} colores={colores} /> */}
    </>
  );
};

export default App;
