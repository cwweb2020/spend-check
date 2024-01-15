import React, { useState } from 'react';
import BudgetDecider from '../components/BudgetDecider';
import CategoryDecider from '../components/CategoryDecider';
import BuiltBudget from '../components/BuiltBudget'; // Importa el nuevo componente

const Budget = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePreview = () => {
    setStep(step - 1);
  };

  return (
    <>
      {step === 1 ? (
        <BudgetDecider handleNext={handleNext} />
      ) : step === 2 ? (
        <CategoryDecider handlePreview={handlePreview} handleNext={handleNext} />
      ) : (
        <BuiltBudget handlePreview={handlePreview} />
      )}
    </>
  );
};

export default Budget;
