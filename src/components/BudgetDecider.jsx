import { useState } from "react";
import piggy from "../assets/img/piggy.svg";
import { LuAsterisk } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGetScreenWidth } from "../hooks/useGetScreenWidth";

const BudgetDecider = ({ handleNext }) => {
  const [income, setIncome] = useState("");
  const [savingsPercentage, setSavingsPercentage] = useState("");
  const [savingsAmount, setSavingsAmount] = useState("");
  const [totalExpenses, setTotalExpenses] = useState("");

  const screenWidth = useGetScreenWidth();

  const calculateSavings = () => {
    const incomeValue = parseFloat(income);
    const percentageValue = parseFloat(savingsPercentage);

    if (!isNaN(incomeValue) && !isNaN(percentageValue)) {
      const savings = (incomeValue * percentageValue) / 100;
      setSavingsAmount(savings.toFixed(2));
      const monthlyExpenses = incomeValue - savings; // Restamos el ahorro del ingreso
      setTotalExpenses(monthlyExpenses.toFixed(2));
      const toSaveInLocalStorage = { savings, monthlyExpenses };
      localStorage.setItem("budget", JSON.stringify(toSaveInLocalStorage));
      //
    } else {
      setSavingsAmount("");
      setTotalExpenses("");
    }
  };
  //
  //
  return (
    <>
      <br />
      <br />
      <section className="budget-section">
        <h2 className="budget-title">Presupuesto</h2>
        <div className="budget-wrapper">
          <h4 className="budget-subtitle">Cuanto deseas ahorrar</h4>
          <div className="inputs-wrapper">
            {/* Primer input-container */}
            <div className="input-container">
              <label htmlFor="income">Ingreso Mensual ($):</label>
              <input
                type="number"
                id="income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
            </div>

            {/* Segundo input-container */}
            <div className="input-container">
              <label htmlFor="savingsPercentage">
                {screenWidth < 900
                  ? "Porcent. de ahorro (%):"
                  : "Porcentaje de Ahorro (%):"}
              </label>
              <input
                type="number"
                id="savingsPercentage"
                value={savingsPercentage}
                onChange={(e) => setSavingsPercentage(e.target.value)}
              />
            </div>
          </div>

          <button className="budget-button" onClick={calculateSavings}>
            Calcular Ahorro
          </button>

          {savingsAmount !== "" && (
            <div className="result-container">
              <p>Ahorro Mensual Resultante:</p>
              <div className="budget-amount-container">
                <img src={piggy} alt="" />

                <span>
                  <div className="budget-amount-meta">
                    <h4>Meta de gastos</h4>
                    <h3>${totalExpenses}</h3>
                  </div>

                  <div className="budget-amount-ahorro">
                    <h4>Ahorro Mensual</h4>
                    <h5>${savingsAmount}</h5>
                  </div>
                </span>
              </div>
            </div>
          )}
        </div>
        <p style={{ display: "flex", alignItems: "center", marginTop: "18px" }}>
          <LuAsterisk /> Estima una meta (presupuesto) de lo que quieres ahorrar
        </p>
        <button
          style={{
            top: screenWidth < 900 ? "100%" : "97%",
            background: savingsAmount === "" && "lightgray",
            cursor: savingsAmount === "" && "not-allowed",
          }}
          className="handle-next"
          disabled={savingsAmount === ""}
          onClick={handleNext}
        >
          {screenWidth > 900 ? "siguiente" : ""}{" "}
          <span style={{ visibility: "hidden" }}>/</span> <FaArrowRightLong />
        </button>
      </section>

      <br />
      <br />
    </>
  );
};

export default BudgetDecider;
