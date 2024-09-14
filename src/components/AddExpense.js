import React, { useState } from "react";
import "./AddExpense.css"; // Import the CSS file

const AddExpense = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format: 'YYYY-MM-DD'
  });
  const [category, setCategory] = useState("");
  const [currency, setCurrency] = useState("INR");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) return;

    onAdd({
      title,
      amount: parseFloat(amount),
      date,
      category,
      id: Date.now(),
    });
  };

  return (
    <form onSubmit={submitHandler} className={`expense-form ${category}`}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Expense Title"
        />
      </div>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
      </div>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="INR">INR (₹)</option>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
        </select>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
