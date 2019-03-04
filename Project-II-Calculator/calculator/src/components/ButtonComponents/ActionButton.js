import React from "react";
import "./Button.css";
import "./ActionButtons"

function ActionButton(props) {
  return (
    <div className="action-button" alt={props.action.name}>
      <p>{props.action.symbol}</p>
    </div>
  );
}

export default ActionButton;
