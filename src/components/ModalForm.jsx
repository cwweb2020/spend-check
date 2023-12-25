import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DataContext } from "../context/provider/DataUserProvider";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel, Select } from "@mui/material";
import { VscChromeClose } from "react-icons/vsc";
import home from "../assets/icons/gastos-icon/home.svg";
import gym from "../assets/icons/gastos-icon/gym.svg";
import market from "../assets/icons/gastos-icon/market.svg";
import entert from "../assets/icons/gastos-icon/entert.svg";
import resto from "../assets/icons/gastos-icon/resto.svg";
import edu from "../assets/icons/gastos-icon/edu.svg";
import car from "../assets/icons/gastos-icon/car.svg";
import bus from "../assets/icons/gastos-icon/bus.svg";

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

export default function ModalForm() {
  const [formValue, setFormValue] = React.useState({
    amount: "",
    date: "",
    description: "",
    selection: "",
  });
  const [coleccionInputs, setColeccionInputs] = React.useState([]);

  //

  const { handleClose, open } = React.useContext(DataContext);

  const handleCloseForModal = () => {
    handleClose();
  };
  //
  const handleInputChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    console.log(formValue);
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    //

    setColeccionInputs([...coleccionInputs, formValue]);
    e.target.reset();
    //
    handleCloseForModal();
  };

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
                <h3 className="form-title">Añadir</h3>
                <input
                  className="input-money"
                  name="amount"
                  placeholder="$ 0.00"
                  type="number"
                  onChange={handleInputChange}
                />
                <input name="date" type="date" onChange={handleInputChange} />
                <label>Descripcion</label>
                <textarea
                  style={{ resize: "none" }}
                  name="description"
                  cols="50"
                  rows="1"
                  onChange={handleInputChange}
                />
                {/* <label>Categoria</label> */}
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="select-form"
                  name="selection"
                  //  defaultValue="deportes"
                  label="Catergoria"
                  onChange={handleInputChange}
                >
                  <MenuItem style={{ fontSize: "13px" }} value="vivienda">
                    vivienda
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value="deportes">
                    vivienda
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value="comestibles">
                    vivienda
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value="salidas">
                    vivienda
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value="alquiler">
                    vivienda
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value="otros">
                    vivienda
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value="otros">
                    vivienda
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value="otros">
                    vivienda
                  </MenuItem>
                </Select>
                <div className="buttons-container">
                  <span className="ex-close" style={ex}>
                    <VscChromeClose onClick={handleCloseForModal} />
                  </span>

                  {/* <Button
                    style={{ fontSize: "14px" }}
                    type="submit"
                    variant="contained"
                  >
                    Agregar
                  </Button> */}
                  <button className="modal-submit-button" type="submit">
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
