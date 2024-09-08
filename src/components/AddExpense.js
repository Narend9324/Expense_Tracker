import React, { useState } from "react";

const AddExpense = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    onAdd({ title, amount: parseFloat(amount), id: Date.now() });

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
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
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
