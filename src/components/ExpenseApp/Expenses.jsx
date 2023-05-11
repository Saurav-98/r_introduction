import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ expenses }) => {
  const [expenseYear, setExpenseYear] = useState("2023");
  const saveEnteredYear = (enteredYear) => {
    setExpenseYear(enteredYear);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() == Number(expenseYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={expenseYear} onYearEnter={saveEnteredYear} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
