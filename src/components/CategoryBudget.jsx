import React from "react";

const CategoryBudget = ({ src, key }) => {
  return (
    <>
      <div key={key} className="category-budget-img">
        <img src={src} alt="" />
      </div>
    </>
  );
};

export default CategoryBudget;
