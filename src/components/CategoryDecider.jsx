import { useState } from 'react';
import { categoryList } from '../constants/category_list';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { useGetScreenWidth } from '../hooks/useGetScreenWidth';
import ProgressBar from './ProgressBar';

//

const CategoryDecider = ({ handlePreview, handleNext }) => {
  const getLocalStorage = JSON.parse(localStorage.getItem('budget'));
  const [budgetData, setBudgetData] = useState({
    savings: getLocalStorage.savings || '',
    monthlyExpenses: getLocalStorage.monthlyExpenses || '',
  });
  // estado para guardar los values de las categorias seleccionadas
  const [arrOfInputValues, setArrOfInputValues] = useState([]);
  // console.log('gastos', budgetData.monthlyExpenses);

  //  categorias seleccionadas
  const [allCategories, setAllCategories] = useState(categoryList);
  const [selectedCategories, setSelectedCategories] = useState([]);
  //

  const [arrOfSelectedDataInput, setArrOfSelectedDataInput] = useState([]);
  const [isDataEntered, setIsDataEntered] = useState(false);

  const handleAddToSelected = (category) => {
    const newSelectedCategories = [...selectedCategories, category];

    setSelectedCategories(newSelectedCategories);
    setAllCategories(allCategories.filter((cat) => cat.id !== category.id));
  };

  const handleRemoveFromSelected = (category) => {
    const newSelectedCategories = selectedCategories.filter((cat) => cat.id !== category.id);
    setSelectedCategories(newSelectedCategories);
    setAllCategories([...allCategories, category]);
  };

  // get screenwidth
  const screenWidth = useGetScreenWidth();
  const manageDiv2 = () => {
    if (screenWidth < 900) {
      if (selectedCategories.length <= 0) {
        return 'none';
      } else {
        return 'block';
      }
    } else {
      return 'flex';
    }
  };
  // get screenwidth

  const manageDivSecond = manageDiv2();

  const divDos = {
    display: manageDivSecond,
  };

  const handleCatInput = (e, category) => {
    const updatedCategories = selectedCategories.map((cat) =>
      cat.id === category.id ? { ...cat, value: e.target.value } : cat,
    );
    setSelectedCategories(updatedCategories);
    setIsDataEntered(true);
    //  console.log('updatedCategories', updatedCategories);

    // tomo los valores que va ingresando el cliente y los guardo en un array
    const arrOfInputValues = updatedCategories.map((cat) => cat.value);
    setArrOfInputValues(arrOfInputValues);
  };

  const handleOnClick = () => {
    const budgetData = selectedCategories.map((category) => ({
      name: category.name,
      value: category.value,
    }));

    // arr de objetos con los valores de las categorias seleccionadas
    console.log(budgetData);
    setArrOfSelectedDataInput(budgetData);
  };

  return (
    <>
      <br />
      <br />
      <section className="total-category-decider budget-section">
        <h4 className="category-decider-title">Planifica tus gastos</h4>
        <div className="cat-decider-big-container">
          <h4 className="cat-decider-subtitulo">Elije los gastos que deseas trackear</h4>
          <div className="cat-decider-wrapper">
            <div className="uno">
              {allCategories.map((category) => {
                return (
                  <div onClick={() => handleAddToSelected(category)} key={category.id}>
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
                  <div className="dos-container" key={category.id} style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="cat-decider-title-img">
                      <h4>{category.name} </h4>
                      <img onClick={() => handleRemoveFromSelected(category)} src={category.icon} alt="" />
                    </span>
                    <span className="cat-decider-input">
                      <input
                        onChange={(e) => handleCatInput(e, category)}
                        name={category.name}
                        type="number"
                        value={category.value || ''}
                      />
                    </span>
                  </div>
                );
              })}
            </div>
            {selectedCategories.length > 0 && (
              <ProgressBar totalGastos={budgetData.monthlyExpenses} values={arrOfInputValues} />
            )}

            {/* buttons en posicion absoluta */}
            <div className="cat-decider-buttons-container">
              <button className="back" onClick={handlePreview}>
                <FaArrowLeftLong /> <span style={{ visibility: 'hidden' }}>/</span> {screenWidth > 900 ? 'volver' : ''}
              </button>
              <button
                style={{
                  top: screenWidth < 900 ? '100%' : '97%',
                  background: !isDataEntered && 'lightgray',
                }}
                disabled={!isDataEntered || selectedCategories.length === 0}
                className="next-category"
                onClick={() => {
                  handleNext();
                  handleOnClick();
                }}>
                {screenWidth > 900 ? 'siguiente' : ''}
                <span style={{ visibility: 'hidden' }}>/</span> <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

const catSelected = {
  marginTop: '1em',
  textAlign: 'center',
};

export default CategoryDecider;
