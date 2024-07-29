// src/components/MainComponent.js
"use client";
import React from "react";

function MainComponent() {
  const [display, setDisplay] = React.useState("0");
  const [currentValue, setCurrentValue] = React.useState("");
  const [previousValue, setPreviousValue] = React.useState("");
  const [operation, setOperation] = React.useState(null);

  const handleNumber = (num) => {
    if (display === "0" || operation) {
      setDisplay(num);
      setCurrentValue(num);
    } else {
      setDisplay((prevDisplay) => prevDisplay + num);
      setCurrentValue((prevValue) => prevValue + num);
    }
  };

  const handleOperation = (op) => {
    if (currentValue) {
      setPreviousValue(currentValue);
      setOperation(op);
      setCurrentValue("");
    }
  };

  const handleEqual = () => {
    if (previousValue && currentValue && operation) {
      const prev = parseFloat(previousValue);
      const curr = parseFloat(currentValue);
      const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
      };
      const result = operations[operation](prev, curr);
      setDisplay(result.toString());
      setCurrentValue(result.toString());
      setPreviousValue("");
      setOperation(null);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setCurrentValue("");
    setPreviousValue("");
    setOperation(null);
  };

  const renderButton = (btn) => {
    const isOperation = ["+", "-", "*", "/"].includes(btn);
    const isEqual = btn === "=";
    const onClick = isOperation
      ? () => handleOperation(btn)
      : isEqual
      ? handleEqual
      : () => handleNumber(btn);

    let buttonClass =
      "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 text-2xl";

    if (isOperation || isEqual) {
      buttonClass =
        "bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 text-2xl";
    }

    return (
      <button key={btn} className={buttonClass} onClick={onClick}>
        {btn}
      </button>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-roboto p-4">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="bg-gray-800 p-4 mb-6 rounded-xl">
          <p className="text-right text-5xl text-white overflow-x-auto whitespace-nowrap">
            {display}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map(renderButton)}
          <button
            className="col-span-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 text-2xl"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
