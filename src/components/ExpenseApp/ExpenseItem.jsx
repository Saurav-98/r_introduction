import React, { useState } from "react";
import "./ExpenseItem.css";
import DateCalender from "./DateCalender";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className="expense-item">
        <DateCalender date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
