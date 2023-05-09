import React from "react";
import "./DateCalender.css";

const DateCalender = ({ date }) => {
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const day = date.getDate();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default DateCalender;
