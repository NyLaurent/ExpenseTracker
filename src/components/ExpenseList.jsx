import React from 'react';

const ExpenseList = ({ expenses, filterCategory }) => {
  const filteredExpenses = filterCategory ? expenses.filter(exp => exp.category === filterCategory) : expenses;

  return (
    <ul className="space-y-4 mt-4">
      {filteredExpenses.map((expense, index) => (
        <li key={index} className="p-4 bg-gray-100 border-l-4 border-pink-400 rounded-lg shadow-sm">
          <p className="text-lg font-semibold text-gray-700">Amount: ${expense.amount}</p>
          <p className="text-sm text-gray-500">Category: {expense.category}</p>
          <p className="text-sm text-gray-500">Date: {expense.date}</p>
          <p className="text-gray-600">{expense.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
