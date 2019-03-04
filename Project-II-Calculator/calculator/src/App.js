import React from "react";
import "./App.css";
import ActionButtons from "./components/ButtonComponents/ActionButtons";
import NumberButtons from "./components/ButtonComponents/NumberButtons";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

function App() {
  return (
    <div className="app">
      <CalculatorDisplay />
      <ActionButtons />
      <NumberButtons />
    </div>
  );
}

export default App;
