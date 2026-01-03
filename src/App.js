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

  const preprocessExpression = (expr) => {
    return expr.replace(/(\d|\))(\()/g, "$1*(");
};

  const calculate = () => {
    try {
      const processedExpr = preprocessExpression(expression);

      const tokens = processedExpr.match(/(\d+\.?\d*|\+|-|\*|\/|\(|\))/g);
      if (!tokens) {
        setExpression("Error");
        return;
      }
        const output = [];
        const operators = [];
        const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };

        tokens.forEach((token) => {
          if (!isNaN(token)) {
            output.push(parseFloat(token));
          } else if (token === "(") {
            operators.push(token);
          } else if (token === ")") {
            while (operators.length && operators.at(-1) !== "(") {
              output.push(operators.pop());
            }
            operators.pop();
          } else {
            while (
              operators.length &&
              precedence[operators.at(-1)] >= precedence[token]
            ) {
              output.push(operators.pop());
            }
            operators.push(token);
          }
        });

        while (operators.length) output.push(operators.pop());

        const stack = [];
        output.forEach((token) => {
          if (typeof token === "number") {
            stack.push(token);
          } else {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
              case "+": stack.push(a + b); break;
              case "-": stack.push(a - b); break;
              case "*": stack.push(a * b); break;
              case "/": stack.push(a / b); break;
              default: break;
            }
          }
        });

        setExpression(stack[0].toString());
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
        {/* Top row */}
        <button className="clear" onClick={clearAll}>C</button>
        <button className="bracket" onClick={() => handleClick("(")}>(</button>
        <button className="bracket" onClick={() => handleClick(")")}>)</button>
        <button className="operator" onClick={() => handleClick("/")}>÷</button>

        {/* Numbers + operators */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="operator" onClick={() => handleClick("*")}>×</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="operator" onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="operator" onClick={() => handleClick("+")}>+</button>

        {/* Bottom */}
        <button className="zero" onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button className="equals" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
