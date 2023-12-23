import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { DataContext } from "../context/provider/DataUserProvider";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";

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

export default function ModalForm() {
  const [formValue, setFormValue] = React.useState({
    amount: "",
    date: "",
    description: "",
    selection: "",
  });
  const [coleccionInputs, setColeccionInputs] = React.useState([]);

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
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
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
                <h3 className="form-title">Ingresar</h3>
                <input
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

                <label>Categoria</label>
                <Select
                  id="demo-simple-select"
                  className="select-form"
                  name="selection"
                  defaultValue="deportes"
                  onChange={handleInputChange}
                >
                  <MenuItem style={{ fontSize: "13px" }} value={10}>
                    vivienda
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value="deportes">
                    deportes
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value="comestibles">
                    comestibles
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value="salidas">
                    salidas
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value="otros">
                    otros
                  </MenuItem>
                  <MenuItem style={{ fontSize: "13px" }} value={30}>
                    Thirty
                  </MenuItem>
                </Select>
                <div className="buttons-container">
                  <Button onClick={handleCloseForModal}>Cancelar</Button>
                  <button type="submit">click me</button>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
