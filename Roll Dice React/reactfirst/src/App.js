// src/App.js
import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [dice, setDice] = useState(1);
  const [history, setHistory] = useState([]);
  const diceRef = useRef(null);

  const getDiceFace = (num) => {
    const faces = [
      "\u2680", // ⚀
      "\u2681", // ⚁
      "\u2682", // ⚂
      "\u2683", // ⚃
      "\u2684", // ⚄
      "\u2685", // ⚅
    ];

    return faces[num - 1];
  };

  const rollDice = () => {
    // Add animation class
    diceRef.current.classList.add("roll-animation");

    setTimeout(() => {
      diceRef.current.classList.remove("roll-animation");

      const result = Math.floor(Math.random() * 6) + 1;
      setDice(result);
      setHistory((prev) => [result, ...prev]); // latest on top
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Dice Roll Simulator</h1>

      <div className="dice" ref={diceRef}>
        {getDiceFace(dice)}
      </div>

      <button onClick={rollDice}>Roll Dice</button>

      <ul id="roll-history">
        {history.map((roll, idx) => (
          <li key={idx}>
            Roll {history.length - idx}: <span>{getDiceFace(roll)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
