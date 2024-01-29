//

export const getPorcentageExpenses = (expenses, incomes) => {
  const porcentage = Math.floor((expenses * 100) / incomes);
  return porcentage;
};

// calculate the porcentage of expenses over the incomes

export const porcentageFunc = (gastosArr, totalIncomes) => {
  const porcentageArray = [];
  gastosArr.map((gasto) => {
    const percent = getPorcentageExpenses(gasto.amount, totalIncomes);
    porcentageArray.push({ label: gasto.label, percent });
  });
  return porcentageArray;
};
