import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/provider/DataUserProvider";

const PrivateRoute = ({ redirect, component }) => {
  const { isLoged } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoged) navigate(redirect);
  });

  return component;
};

export default PrivateRoute;
