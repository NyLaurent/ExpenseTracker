import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <input
          type="text"
          placeholder="Filter by category"
          onChange={(e) => setFilterCategory(e.target.value)}
          className="w-full p-2 mt-4 mb-6 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-pink-400"
        />
        <TotalExpenses expenses={expenses} />
        <ExpenseList expenses={expenses} filterCategory={filterCategory} />
      </div>
    </div>
  );
};

export default App;
