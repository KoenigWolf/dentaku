// src/hooks/useCalculator.js
import { useState, useCallback } from 'react';
import {
  ERROR_MESSAGES,
  CALCULATOR_CONFIG,
  OPERATION_FUNCTIONS
} from '../constants/calculator';

const validateNumber = (value) => {
  const num = Number.parseFloat(value);
  if (!Number.isFinite(num)) {
    throw new Error(ERROR_MESSAGES.OVERFLOW);
  }
  return num;
};

const formatResult = (result) => {
  if (!Number.isFinite(result)) {
    throw new Error(ERROR_MESSAGES.OVERFLOW);
  }
  return Number.isInteger(result)
    ? result.toString()
    : result.toFixed(CALCULATOR_CONFIG.MAX_DECIMAL_PLACES).replace(/\.?0+$/, '');
};

export const useCalculator = () => {
  const [display, setDisplay] = useState(CALCULATOR_CONFIG.INITIAL_VALUE);
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operation, setOperation] = useState(null);

  const handleClear = useCallback(() => {
    setDisplay(CALCULATOR_CONFIG.INITIAL_VALUE);
    setCurrentValue("");
    setPreviousValue("");
    setOperation(null);
  }, []);

  const handleNumber = useCallback((num) => {
    if (num === '.' && currentValue.includes('.')) {
      return;
    }

    const newValue = currentValue === "" ? num : currentValue + num;
    setCurrentValue(newValue);
    setDisplay(newValue);
  }, [currentValue]);

  const calculateResult = useCallback((prev, curr, op) => {
    try {
      const prevNum = validateNumber(prev);
      const currNum = validateNumber(curr);
      const result = OPERATION_FUNCTIONS[op](prevNum, currNum);
      return formatResult(result);
    } catch (error) {
      setDisplay(error.message);
      setTimeout(() => handleClear(), CALCULATOR_CONFIG.ERROR_DISPLAY_TIME);
      throw error;
    }
  }, [handleClear]);

  const handleEqual = useCallback(() => {
    if (!previousValue || !currentValue || !operation) {
      return;
    }

    try {
      const result = calculateResult(previousValue, currentValue, operation);
      setDisplay(result);
      setCurrentValue(result);
      setPreviousValue("");
      setOperation(null);
    } catch (error) {
      // エラー処理は calculateResult 内で行われます
    }
  }, [previousValue, currentValue, operation, calculateResult]);

  const handleOperation = useCallback((op) => {
    if (!currentValue && !previousValue) {
      return;
    }

    try {
      if (currentValue && previousValue && operation) {
        const result = calculateResult(previousValue, currentValue, operation);
        setPreviousValue(result);
      } else {
        setPreviousValue(currentValue || display);
      }
      setOperation(op);
      setCurrentValue("");
    } catch (error) {
      // エラー処理は calculateResult 内で行われます
    }
  }, [currentValue, previousValue, operation, display, calculateResult]);

  return {
    display,
    currentValue,
    previousValue,
    operation,
    handleNumber,
    handleOperation,
    handleEqual,
    handleClear
  };
};