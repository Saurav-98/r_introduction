import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSaveExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.ceil(Math.random() * 20236).toString(),
    };
    console.log(expenseData);
    console.log("From New Expense Component");

    onSaveExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
