import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [expenseYear, setExpenseYear] = useState("2023");
  const saveEnteredYear = (enteredYear) => {
    setExpenseYear(enteredYear);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === expenseYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={expenseYear} onYearEnter={saveEnteredYear} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
