import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log(setTitle);
  const clickHandler = () => {
    setTitle("updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2 className="expense-item__price">${props.amount}</h2>
        <button onClick={clickHandler}>click me</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
