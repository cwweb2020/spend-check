//
//

export const getPorcentageExpenses = (expenses, incomes) => {
  const porcentage = Math.floor((expenses * 100) / incomes);
  return porcentage;
};
