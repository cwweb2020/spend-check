import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import toast, { Toaster } from "react-hot-toast";

export default function Flotante({ bg }) {
  //

  //

  const notify = () => {
    let text = bg === "#388e3c" ? "Ingreso" : "Gasto";
    toast.success(`${text} añadido.`);
  };

  //

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        style={{ background: bg }}
        size="small"
        color="secondary"
        aria-label="substract"
        onClick={notify}
      >
        <AddIcon />
      </Fab>
      <Toaster
        position="top-center"
        gutter={8}
        containerStyle={{}}
        toastOptions={{
          // Define default options
          duration: 5000,
          style: {
            //  background: "#363636",
            background: "#fff",
            color: "#000000",
            fontWeight: "bold",
            padding: "10px 20px",
          },

          // Default options for specific types
          success: {
            duration: 4000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </Box>
  );
}
