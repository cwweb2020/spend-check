import { useState, useCallback, useMemo } from 'react';
import { categoryList } from '../constants/category_list';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { useGetScreenWidth } from '../hooks/useGetScreenWidth';
import ProgressBar from './ProgressBar';

const CategoryDecider = ({ handlePreview, handleNext }) => {
  const storedBudget = JSON.parse(localStorage.getItem('budget')) || {};
  const { savings = null, monthlyExpenses = null } = storedBudget;

  const [categoryData, setCategoryData] = useState({
    allCategories: categoryList,
    selectedCategories: [],
    totalAmount: 0,
    arrOfInputValues: [],
  });

  const screenWidth = useGetScreenWidth();

  const handleAddToSelected = useCallback(
    (category) => {
      const newSelectedCategories = [...categoryData.selectedCategories, category];
      setCategoryData({
        ...categoryData,
        selectedCategories: newSelectedCategories,
        allCategories: categoryData.allCategories.filter((cat) => cat.id !== category.id),
      });
    },
    [categoryData],
  );

  const handleRemoveFromSelected = useCallback(
    (category) => {
      const newSelectedCategories = categoryData.selectedCategories.filter((cat) => cat.id !== category.id);
      setCategoryData({
        ...categoryData,
        selectedCategories: newSelectedCategories,
        allCategories: [...categoryData.allCategories, category],
      });
    },
    [categoryData],
  );

  const handleCatInput = useCallback(
    (e, category) => {
      const updatedCategories = categoryData.selectedCategories.map((cat) =>
        cat.id === category.id ? { ...cat, value: e.target.value } : cat,
      );

      setCategoryData((prevData) => ({
        ...prevData,
        selectedCategories: updatedCategories,
        totalAmount: updatedCategories.reduce((total, cat) => total + parseFloat(cat.value) || 0, 0),
        isDataEntered: true,
        arrOfInputValues: updatedCategories.map((cat) => cat.value),
      }));
    },
    [categoryData],
  );

  const gatherBudgetData = useCallback(() => {
    const budgetData = categoryData.selectedCategories.map((category) => ({
      name: category.name,
      value: category.value,
    }));

    setCategoryData({ ...categoryData, arrOfSelectedDataInput: budgetData });
  }, [categoryData]);

  const arrOfSelectedDataInput = useMemo(() => {
    return categoryData.selectedCategories.map((category) => ({
      name: category.name,
      value: category.value,
    }));
  }, [categoryData.selectedCategories]);

  const nextButtonStyle = {
    top: screenWidth < 900 ? '100%' : '97%',
    background: !categoryData.isDataEntered && 'lightgray',
    cursor: !categoryData.isDataEntered && 'not-allowed',
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
              {categoryData.allCategories.map((category) => {
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

            {categoryData.selectedCategories.length > 0 && screenWidth < 900 && (
              <>
                <hr />
                <h4 style={catSelected} className="cat-decider-subtitulo">
                  Categorias seleccionadas
                </h4>
              </>
            )}

            <div
              style={
                screenWidth < 900
                  ? { display: categoryData.selectedCategories.length <= 0 ? 'none' : 'block' }
                  : { display: 'flex' }
              }
              className="dos">
              {screenWidth > 900 && (
                <>
                  <h4 style={catSelected} className="cat-decider-subtitulo">
                    Categorias seleccionadas
                  </h4>
                </>
              )}

              {categoryData.selectedCategories.map((category) => {
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
            {categoryData.selectedCategories.length > 0 && (
              <ProgressBar totalGastos={monthlyExpenses} values={categoryData.arrOfInputValues} />
            )}

            <div className="cat-decider-buttons-container">
              <button className="back" onClick={handlePreview}>
                <FaArrowLeftLong /> <span style={{ visibility: 'hidden' }}>/</span> {screenWidth > 900 ? 'volver' : ''}
              </button>
              <button
                style={nextButtonStyle}
                disabled={!categoryData.isDataEntered || categoryData.selectedCategories.length === 0}
                className="next-category"
                onClick={() => {
                  handleNext();
                  gatherBudgetData();
                }}>
                {screenWidth > 900 ? 'siguiente' : ''}
                <span style={{ visibility: 'hidden' }}>/</span> <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
        <p>Total: {categoryData.totalAmount.toFixed(2)}</p>
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
