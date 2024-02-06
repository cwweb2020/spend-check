import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const CategoryCard = ({ category, handleRemoveFromSelected, handleCatInput }) => {
  return (
    <>
      <div className="category-card-dos-container" key={category.id} style={{ display: 'flex', alignItems: 'center' }}>
        <span className="cat-decider-title-img">
          <h4>{category.name} </h4>
          <img src={category.icon} alt="" />
        </span>
        <span className="cat-decider-input">
          <input
            onChange={(e) => handleCatInput(e, category)}
            name={category.name}
            type="number"
            value={category.value || ''}
          />
        </span>
        <span onClick={() => handleRemoveFromSelected(category)} className="arrow-back">
          <FaArrowRight />
        </span>
      </div>
    </>
  )
}

export default CategoryCard
