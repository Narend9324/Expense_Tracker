import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="App">
      <Header />
      <AddExpense onAdd={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
      <h2>Total: ₹ {totalAmount.toFixed(2)}</h2>
    </div>
  );
}

export default App;
