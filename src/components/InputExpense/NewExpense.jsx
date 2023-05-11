import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSaveExpense }) => {
  const [showInputForm, setShowInputForm] = React.useState(false);
  const addBtnHandler = () => setShowInputForm(true);
  const addBtnClickHandler = () => {
    setShowInputForm(true);
  };
  const cancelBtnHandler = () => {
    setShowInputForm(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.ceil(Math.random() * 20236).toString(),
    };
    onSaveExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {showInputForm ? (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          onCancelClick={cancelBtnHandler}
        />
      ) : (
        <button onClick={addBtnClickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
