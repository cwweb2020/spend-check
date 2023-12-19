import React, { useContext } from "react";
import house from "../assets/icons/house.svg";
import { useNavigate } from "react-router-dom";
import person from "../assets/icons/person-svgrepo-com.svg";
import { DataContext } from "../context/provider/DataUserProvider";

const Header = () => {
  const navigate = useNavigate();
  const { handleLogingOut } = useContext(DataContext);

  const redirectToHome = () => {
    navigate("/dashboard");
  };
  //

  const handleLogOut = () => {
    handleLogingOut();
  };

  return (
    <>
      <section className="total-header">
        <div className="header-wrapper">
          <div onClick={redirectToHome} className="home">
            <img src={house} alt="" />
          </div>
          <div className="person">
            <img
              //  style={{ width: "40px", height: "40px" }}
              src={person}
              alt=""
            />
            <h3>claudio</h3>/
            <h4 onClick={handleLogOut} style={salir}>
              Salir
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

const salir = {
  color: "#ff0000",
  cursor: "pointer",
  fontSize: "1.06em",
};

export default Header;
