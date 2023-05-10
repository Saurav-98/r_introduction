import React, { useState } from "react";
import "./ExpenseItem.css";
import DateCalender from "./DateCalender";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, amount }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);

  const clickHandler = () => {
    setExpenseTitle("Saurav Verma");
  };
  return (
    <Card className="expense-item">
      <DateCalender date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
