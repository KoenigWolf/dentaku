// src/components/Calculator.js
import React, { useCallback } from 'react';
import { BUTTONS, OPERATIONS } from '../constants/calculator';
import { useCalculator } from '../hooks/useCalculator';
import Display from './Display';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
  const {
    display,
    handleNumber,
    handleOperation,
    handleEqual,
    handleClear
  } = useCalculator();

  const handleButtonClick = useCallback((value) => {
    if (value === 'Clear') {
      handleClear();
      return;
    }

    if (value === '=') {
      handleEqual();
      return;
    }

    if (Object.values(OPERATIONS).includes(value)) {
      handleOperation(value);
      return;
    }

    handleNumber(value);
  }, [handleClear, handleEqual, handleOperation, handleNumber]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl">
        <Display value={display} />
        <div className="grid grid-cols-4 gap-4">
          {BUTTONS.map((value) => (
            <CalculatorButton
              key={value}
              value={value}
              onClick={handleButtonClick}
            />
          ))}
          <CalculatorButton
            value="Clear"
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Calculator);