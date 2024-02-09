import { useState, useCallback, useMemo } from 'react'
import { categoryList } from '../constants/category_list'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useGetScreenWidth } from '../hooks/useGetScreenWidth'
import CategoryCard from './categoryCard/CategoryCard'

const CategoryDecider = ({ handlePreview, handleNext }) => {
  const storedBudget = JSON.parse(localStorage.getItem('budget')) || {}
  const { savings = null, monthlyExpenses = null } = storedBudget

  const [categoryData, setCategoryData] = useState({
    allCategories: categoryList,
    selectedCategories: [],
    totalAmount: 0,
    arrOfInputValues: [],
  })

  const screenWidth = useGetScreenWidth()

  const handleAddToSelected = useCallback(
    (category) => {
      const newSelectedCategories = [...categoryData.selectedCategories, category]
      setCategoryData({
        ...categoryData,
        selectedCategories: newSelectedCategories,
        allCategories: categoryData.allCategories.filter((cat) => cat.id !== category.id),
      })
    },
    [categoryData],
  )

  const handleRemoveFromSelected = useCallback(
    (category) => {
      const newSelectedCategories = categoryData.selectedCategories.filter((cat) => cat.id !== category.id)
      setCategoryData({
        ...categoryData,
        selectedCategories: newSelectedCategories,
        allCategories: [...categoryData.allCategories, category],
      })
    },
    [categoryData],
  )

  const handleCatInput = useCallback(
    (e, category) => {
      const updatedCategories = categoryData.selectedCategories.map((cat) =>
        cat.id === category.id ? { ...cat, value: e.target.value } : cat,
      )

      setCategoryData((prevData) => ({
        ...prevData,
        selectedCategories: updatedCategories,
        totalAmount: updatedCategories.reduce((total, cat) => total + parseFloat(cat.value) || 0, 0),
        isDataEntered: true,
        arrOfInputValues: updatedCategories.map((cat) => cat.value),
      }))
    },
    [categoryData],
  )

  // const gatherBudgetData = useCallback(() => {
  //   const budgetData = categoryData.selectedCategories.map((category) => ({
  //     name: category.name,
  //     value: category.value,
  //   }))
  //   console.log(budgetData, 'budgetData')
  //   setCategoryData({ ...categoryData, arrOfSelectedDataInput: budgetData })
  // }, [categoryData])

  const arrOfSelectedDataInput = useMemo(() => {
    console.log(categoryData.selectedCategories, 'categoryData.selectedCategories')
    return categoryData.selectedCategories.map((category) => ({
      name: category.name,
      value: category.value,
    }))
  }, [categoryData.selectedCategories])
  console.log(arrOfSelectedDataInput, 'arrOfSelectedDataInput')

  return (
    <>
      <br />
      <br />
      <section className="total-category-decider">
        <h4 className="category-decider-title">
          <button className="category-decider-back" onClick={handlePreview}>
            <FaArrowLeftLong />
            <span style={{ visibility: 'hidden' }}>/</span>
          </button>
          Planifica tus gastos
        </h4>
        <div className="category-decider-wrapper">
          <div className={`category-decider-left ${categoryData.selectedCategories.length <= 0 ? 'with-no-items' : ''}`}>
            {categoryData.selectedCategories.length > 0 ? (
              categoryData.selectedCategories.map((category) => (
                <CategoryCard
                  category={category}
                  handleCatInput={handleCatInput}
                  handleRemoveFromSelected={handleRemoveFromSelected}
                  key={category.id}
                />
              ))
            ) : (
              <h4 style={catSelected}>Agrega categorias </h4>
            )}
          </div>
          <div className="category-decider-right">
            <h4>Elige categorias para trackear:</h4>
            <div className="category-decider-gastos-icon-container">
              {categoryData.allCategories.map((item, index) => (
                <div onClick={() => handleAddToSelected(item)} key={index}>
                  <span className="cat-decider-img-container">
                    <img src={item.icon} alt="" />
                  </span>
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ul>
          {arrOfSelectedDataInput.map((item, index) => (
            <li key={index}>{`${item.name}: ${item.value === undefined ? '0' : item.value}`}</li>
          ))}
        </ul>
        <h4>Suma total: ${categoryData.totalAmount.toFixed(2)}</h4>
      </section>
      <br />
      <br />
      {screenWidth < 900 && (
        <>
          <br />
          <br />
          <br />
        </>
      )}
    </>
  )
}

const catSelected = {
  marginTop: '1em',
  textAlign: 'center',
}

export default CategoryDecider
