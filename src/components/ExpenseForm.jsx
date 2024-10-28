import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category && date) {
      addExpense({ amount, category, date, description });
      setAmount('');
      setCategory('');
      setDate('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-pink-400"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-pink-400"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-pink-400"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-pink-400"
      ></textarea>
      <button type="submit" className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow hover:bg-purple-600 transition duration-300">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
