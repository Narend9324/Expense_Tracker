import React from "react";

const ExpenseItem = ({ expense }) => {
  const formattedAmount = expense.amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <li>
      {expense.title} - {formattedAmount} on {expense.date} [{expense.category}]
    </li>
  );
};

export default ExpenseItem;
