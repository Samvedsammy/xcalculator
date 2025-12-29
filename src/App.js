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

      {/* single input */}
      <input type="text" value={expression} readOnly />

      {/* single result div */}
      <div className="result">{result}</div>

      <div className="buttons">
        {buttons.map((btn, i) => (
          <button key={i} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
