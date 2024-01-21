import { useState } from 'react';
import { categoryList } from '../constants/category_list';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { useGetScreenWidth } from '../hooks/useGetScreenWidth';
import ProgressBar from './ProgressBar';

//

const CategoryDecider = ({ handlePreview, handleNext }) => {
  const storedBudget = JSON.parse(localStorage.getItem('budget')) || {};
  const { savings = '', monthlyExpenses = '' } = storedBudget;
  const [budgetData, setBudgetData] = useState({ savings, monthlyExpenses });
  console.log('budgetData', budgetData);
  // get screenwidth
  const screenWidth = useGetScreenWidth();

  // state to store the values of the selected categories
  const [arrOfInputValues, setArrOfInputValues] = useState([]);
  // console.log('gastos', budgetData.monthlyExpenses);

  // selected categories
  const [allCategories, setAllCategories] = useState(categoryList);
  const [selectedCategories, setSelectedCategories] = useState([]);
  //

  // this state is for the total amount of the selected categories
  const [totalAmount, setTotalAmount] = useState(0);

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

  // const manageDivSecond = manageDiv2();
  const manageDivSecond = { display: screenWidth < 900 ? (selectedCategories.length <= 0 ? 'none' : 'block') : 'flex' };

  const divDos = {
    display: manageDivSecond,
  };

  const handleCatInput = (e, category) => {
    const updatedCategories = selectedCategories.map((cat) =>
      cat.id === category.id ? { ...cat, value: e.target.value } : cat,
    );
    setSelectedCategories(updatedCategories);

    // add the values of the selected categories in real time
    const totalAmount = updatedCategories.reduce((total, cat) => total + parseFloat(cat.value) || 0, 0);
    setTotalAmount(totalAmount);
    console.log('totalAmount', totalAmount);
    setIsDataEntered(true);
    //  console.log('updatedCategories', updatedCategories);

    // create array of the values of the selected categories
    const arrOfInputValues = updatedCategories.map((cat) => cat.value);

    setArrOfInputValues(arrOfInputValues);
  };

  const handleOnClick = () => {
    const budgetData = selectedCategories.map((category) => ({
      name: category.name,
      value: category.value,
    }));

    // array of objects with the selected categories and their values
    console.log(budgetData);
    setArrOfSelectedDataInput(budgetData);
  };

  //next button style
  const nextButton = {
    top: screenWidth < 900 ? '100%' : '97%',
    background: !isDataEntered && 'lightgray',
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
                style={nextButton}
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
        <p>Total: {totalAmount.toFixed(2)}</p>
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
