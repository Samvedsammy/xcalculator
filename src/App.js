/* eslint-disable no-new-func */
import React, { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
      return;
    }

    if (value === "=") {
      if (expression === "") {
        setResult("Error");
        return;
      }
      try {
        const evalResult = Function(`return ${expression}`)();
        setResult(String(evalResult));
      } catch {
        setResult("Error");
      }
      return;
    }

    setExpression((prev) => prev + value);
  };

  const buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "C", "0", "=", "/"
  ];

  return (
    <div className="calculator">
      <h1>React Calculator</h1>

      {/* REAL input (no fake/hidden input) */}
      <input
        type="text"
        value={expression}
        readOnly
        data-testid="calculator-input"
      />

      {/* SINGLE result div */}
      <div className="result" data-testid="calculator-result">
        {result}
      </div>

      <div className="buttons">
        {buttons.map((btn, i) => (
          <button
            key={i}
            type="button"
            data-testid={`btn-${btn}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
