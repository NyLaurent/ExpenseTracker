import React from 'react';

const TotalExpenses = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0).toFixed(2);
  return <h2 className="text-xl font-bold text-gray-800 bg-pink-100 p-4 rounded-lg shadow mb-4">Total Expenses: ${total}</h2>;
};

export default TotalExpenses;
