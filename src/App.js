import React, { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const clearAll = () => {
    setExpression("");
  };

  const calculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch {
      setExpression("Error");
    }
  };

  return (
    <div className="counter-container">
      <h3>Calculator</h3>

      <input
        className="calc-display"
        type="text"
        value={expression || "0"}
        readOnly
      />

      <div className="calc-buttons">
        <button onClick={clearAll}>C</button>
        <button onClick={() => handleClick("/")}>÷</button>
        <button onClick={() => handleClick("*")}>×</button>
        <button onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>

        <button className="zero" onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="equals" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
