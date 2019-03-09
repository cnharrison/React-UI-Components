import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton"

const actions = [
  {
    name: "Add",
    symbol: "+"
  },
  {
    name: "Subtract",
    symbol: "-"
  },
  {
    name: "Multiply",
    symbol: "×"
  },
  {
    name: "Divide",
    symbol: "÷"
  },
  {
    name: "Clear",
    symbol: "clear"
  }
];

function ActionButtons() {
  return (
    <div className="action-buttons">
      {actions.map(action => (
        <ActionButton action={action} />
      ))}
    </div>
  );
}

export default ActionButtons; 