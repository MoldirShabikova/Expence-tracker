import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const expenses = [
    {
      id: 234,
      name: "Shopping",
      cost: 56,
    },
    {
      id: 234,
      name: "Holiday",
      cost: 500,
    },
    {
      id: 234,
      name: "Trip",
      cost: 2300,
    },
    {
      id: 234,
      name: "Child Care",
      cost: 2000,
    },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} /> 
      ))}
    </ul>
  );
}

export default ExpenseList;
