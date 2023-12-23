import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 3,
    backgroundColor: theme.palette.mode === "light" ? "green" : "#1a90ff",
  },
}));

export default function ProgressiveBar() {
  let ingresos = 1000;
  let gastos = 250;

  // Calcular la proporción entre ingresos y gastos
  const proportion = 10 * (ingresos / gastos);

  // Imprimir la proporción en la consola
  console.log("La proporción entre ingresos y gastos es: " + proportion + "%");

  return (
    <div style={{ width: "550px" }}>
      <br />
      <BorderLinearProgress variant="determinate" value={proportion} />
    </div>
  );
}
