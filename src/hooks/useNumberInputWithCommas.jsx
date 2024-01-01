import { useState } from "react";

const useNumberInputWithCommas = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/[^\d]/g, ""); // Elimina todo excepto los dígitos

    // Formatea el número con comas
    const formattedValue = Number(inputValue).toLocaleString("es-ES", {
      minimumFractionDigits: 2,
    });

    setValue(formattedValue);
  };

  return {
    value,
    onChange: handleInputChange,
  };
};

export default useNumberInputWithCommas;
