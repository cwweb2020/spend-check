import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DataContext } from "../context/provider/DataUserProvider";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel, Select } from "@mui/material";
import { VscChromeClose } from "react-icons/vsc";
// import home from "../assets/icons/gastos-icon/home.svg";
// import gym from "../assets/icons/gastos-icon/gym.svg";
// import market from "../assets/icons/gastos-icon/market.svg";
// import entert from "../assets/icons/gastos-icon/entert.svg";
// import resto from "../assets/icons/gastos-icon/resto.svg";
// import edu from "../assets/icons/gastos-icon/edu.svg";
// import car from "../assets/icons/gastos-icon/car.svg";
// import bus from "../assets/icons/gastos-icon/bus.svg";

// estilos
const styleForm = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

const ex = {
  position: "absolute",
  top: "2.4%",
  right: "2.4%",
  cursor: "pointer",
};

//////////////////  fake data categorias
const categoriasDeGastos = [
  { text: "Alimentación", value: "alimentacion" },
  { text: "Vivienda", value: "vivienda" },
  { text: "Transporte", value: "transporte" },
  { text: "Entretenimiento", value: "entretenimiento" },
  { text: "Salud", value: "salud" },
  { text: "Educación", value: "educacion" },
  { text: "Servicios públicos", value: "servicios_publicos" },
  { text: "Misceláneos", value: "miscelaneos" },
];

export default function ModalForm({ url }) {
  const [formValue, setFormValue] = React.useState({
    amount: "",
    date: "",
    description: "",
    selection: "",
  });
  const [colectionInputs, setColectionInputs] = React.useState([]);
  const [buttonIsOn, setButtonIsOn] = React.useState(false);

  //

  const { handleClose, open } = React.useContext(DataContext);

  const handleCloseForModal = () => {
    handleClose();
  };
  //
  //
  const handleInputChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });

    if (formValue.amount !== "") setButtonIsOn(true);
  };

  //
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    //

    setColectionInputs([...colectionInputs, formValue]);
    e.target.reset();
    //
    console.log(colectionInputs);
    handleCloseForModal();
    setButtonIsOn(false);
  };

  //
  //

  //
  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseForModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleForm}>
          <div className="modal-form-container">
            <div className="modal-form-form">
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    color: url === "gastos" ? "#ff0000" : "#2a8c4a",
                  }}
                  className="form-title"
                >
                  {url === "gastos" ? "Añadir Gasto" : "Añadir Ingreso"}
                </h3>
                <input
                  className="input-money"
                  name="amount"
                  placeholder="$ 0.00"
                  type="number"
                  onChange={handleInputChange}
                  required
                />
                <input
                  name="date"
                  type="date"
                  onChange={handleInputChange}
                  required
                />
                <label>Descripcion</label>
                <textarea
                  style={{ resize: "none" }}
                  name="description"
                  cols="50"
                  rows="1"
                  onChange={handleInputChange}
                  required
                />
                {/* <label>Categoria</label> */}
                <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="select-form"
                  name="selection"
                  //  defaultValue="deportes"
                  label="Catergoria"
                  onChange={handleInputChange}
                  required
                >
                  {/* mapeo los datos para llenar el menu item */}

                  {categoriasDeGastos.map((categoria, index) => (
                    <MenuItem
                      style={{ fontSize: "13px", textTransform: "capitalize" }}
                      value={categoria.value}
                      key={index}
                    >
                      {categoria.text}
                    </MenuItem>
                  ))}
                </Select>
                <div className="buttons-container">
                  <span className="ex-close" style={ex}>
                    <VscChromeClose onClick={handleCloseForModal} />
                  </span>
                  <button
                    className="modal-submit-button"
                    type="submit"
                    disabled={!buttonIsOn}
                    style={{
                      backgroundColor: buttonIsOn ? "#2F80ED" : "#BDBDBD",
                    }}
                  >
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
