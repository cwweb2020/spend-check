import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function Flotante({ bg }) {
  console.log(bg);
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        style={{ background: bg }}
        size="small"
        color="secondary"
        aria-label="substract"
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
