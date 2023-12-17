import React from "react";
import home from "../assets/icons/home.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/Dashboard");
  };

  return (
    <>
      <section className="total-header">
        <div className="header-wrapper">
          <div onClick={redirectToHome} className="home">
            <img src={home} alt="" />
          </div>
          <div className="person">
            <img
              style={{ width: "40px", height: "40px" }}
              src="https://portalvhdshl0fsz1rywfcp.blob.core.windows.net/fotoperfilmobills/avatar.png"
              alt=""
            />
            <h3>claudio</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
