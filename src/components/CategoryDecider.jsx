import { useState } from "react";
import { categoryList } from "../constants/category_list";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useGetScreenWidth } from "../hooks/useGetScreenWidth";

//
//

const CategoryDecider = ({ handlePreview }) => {
  const getLocalStorage = JSON.parse(localStorage.getItem("budget"));
  const [savingsAmount, setSavingsAmount] = useState(getLocalStorage.savings);
  const [totalExpenses, setTotalExpenses] = useState(
    getLocalStorage.monthlyExpenses
  );
  console.log(savingsAmount, totalExpenses);
  //  categorias seleccionadas
  const [allCategories, setAllCategories] = useState(categoryList);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [inputValue, setInputValue] = useState({
    name: "",
    value: "",
  });

  const handleAddToSelected = (category) => {
    const newSelectedCategories = [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
    setAllCategories(allCategories.filter((cat) => cat.id !== category.id));
  };

  const handleRemoveFromSelected = (category) => {
    const newSelectedCategories = selectedCategories.filter(
      (cat) => cat.id !== category.id
    );
    setSelectedCategories(newSelectedCategories);
    setAllCategories([...allCategories, category]);
  };

  // get screenwidth
  const screenWidth = useGetScreenWidth();
  const manageDiv2 = () => {
    if (screenWidth < 900) {
      if (selectedCategories.length <= 0) {
        return "none";
      } else {
        return "block";
      }
    } else {
      return "flex";
    }
  };

  const manageDivSecond = manageDiv2();

  const divDos = {
    display: manageDivSecond,
  };

  const handleCatInput = (e) => {
    // const { name, value } = e.target;

    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    console.log(inputValue);
  };

  return (
    <>
      <br />
      <br />
      <section className="total-category-decider budget-section">
        <h4 className="category-decider-title">Planifica tus gastos</h4>
        <div className="cat-decider-big-container">
          <h4 className="cat-decider-subtitulo">
            Elije los gastos que deseas trackear
          </h4>
          <div className="cat-decider-wrapper">
            <div className="uno">
              {allCategories.map((category) => {
                return (
                  <div
                    onClick={() => handleAddToSelected(category)}
                    key={category.id}
                  >
                    <span className="cat-decider-img-container">
                      <img src={category.icon} alt="" />
                    </span>
                    <h3>{category.name}</h3>
                  </div>
                );
              })}
            </div>

            {selectedCategories.length > 0 && screenWidth < 900 && (
              <>
                <hr />
                <h4 style={catSelected} className="cat-decider-subtitulo">
                  Categorias seleccionadas
                </h4>
              </>
            )}

            <div style={divDos} className="dos">
              {screenWidth > 900 && (
                <>
                  <h4 style={catSelected} className="cat-decider-subtitulo">
                    Categorias seleccionadas
                  </h4>
                </>
              )}

              {selectedCategories.map((category) => {
                return (
                  <div
                    className="dos-container"
                    // onClick={() => handleRemoveFromSelected(category)}
                    key={category.id}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <span className="cat-decider-title-img">
                      <h4>{category.name} </h4>
                      <img
                        onClick={() => handleRemoveFromSelected(category)}
                        src={category.icon}
                        alt=""
                      />
                    </span>
                    <span className="cat-decider-input">
                      <input
                        onChange={(e) => handleCatInput(e, category)}
                        name={category.name}
                        type="number"
                      />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="cat-decider-buttons-container">
              <button className="back" onClick={handlePreview}>
                <FaArrowLeftLong />{" "}
                <span style={{ visibility: "hidden" }}>/</span>{" "}
                {screenWidth > 900 ? "volver" : ""}
              </button>
              <button
                style={{
                  top: screenWidth < 900 ? "100%" : "97%",
                  //  background: savingsAmount === "" && "lightgray",
                  //   cursor: savingsAmount === "" && "not-allowed",
                }}
                className=" next-category"
                //  disabled={savingsAmount === ""}
                //  onClick={handleNext}
              >
                {screenWidth > 900 ? "siguiente" : ""}
                <span style={{ visibility: "hidden" }}>/</span>{" "}
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
        <div className="cat-decider-progresive-line">
          <h4></h4>
          <div className="cat-decider-line"></div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

const catSelected = {
  marginTop: "1em",
  textAlign: "center",
};

export default CategoryDecider;
