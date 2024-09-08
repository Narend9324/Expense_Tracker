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

  return (
    <div className="App">
      <Header />
      <AddExpense onAdd={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
