import React from "react";
import "./styles/base.scss";
import Routes from "./routes";
import MedioCirculo from "./components/MedioCirculo";
import MainRoutes from "./routes";

const App = () => {
  const porcentajes = [40, 10, 50];
  const colores = ["red", "#36A2EB", "green", "#0099cc"];
  return (
    <>
      <MainRoutes />
      {/* <MedioCirculo porcentajes={porcentajes} colores={colores} /> */}
    </>
  );
};

export default App;
