import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton";

const numbers = Array.from({ length: 10 }, (x, i) => i);

function NumberButtons() {
  return (
    <div className="number-buttons">
      {numbers.map(number => (
        <NumberButton number={number} />
      ))}
    </div>
  );
}

export default NumberButtons;