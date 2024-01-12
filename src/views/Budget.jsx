import React, { useState } from "react";
import CategoryDecider from "../components/CategoryDecider";
import BudgetDecider from "../components/BudgetDecider";

//

const Budget = () => {
  const [step, setStep] = useState(1);

  //
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
      ) : (
        <CategoryDecider handlePreview={handlePreview} />
      )}
    </>
  );
};

export default Budget;
