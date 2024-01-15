import React from 'react';

const BuiltBudget = ({ handlePreview }) => {
  return (
    <>
      <h1>Presupuesto construido</h1>
      <button className="back" onClick={handlePreview}>
        ATRAS
      </button>
    </>
  );
};

export default BuiltBudget;
