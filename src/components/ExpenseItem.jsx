import React from "react";
import "./ExpenseItem.css";
import DateCalender from "./DateCalender";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <article className="expense-item">
      <DateCalender date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </article>
  );
};

export default ExpenseItem;
