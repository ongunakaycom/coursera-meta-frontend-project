import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult((prev) => prev + Number(input));
    setInput("");
  };

  const handleMultiply = () => {
    setResult((prev) => prev * Number(input));
    setInput("");
  };

  const handleDivide = () => {
    if (Number(input) === 0) {
      alert("Cannot divide by zero!");
    } else {
      setResult((prev) => prev / Number(input));
    }
    setInput("");
  };

  const handleSubtract = () => {
    setResult((prev) => prev - Number(input));
    setInput("");
  };

  const handleReset = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div>Input: {input}</div>
        <div>Result: {result}</div>
      </div>
      <div className="controls">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number"
        />
        <div className="buttons">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleMultiply}>Multiply</button>
          <button onClick={handleDivide}>Divide</button>
          <button onClick={handleSubtract}>Subtract</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
