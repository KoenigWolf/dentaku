// src/constants/calculator.js

export const OPERATIONS = {
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: '*',
  DIVIDE: '/',
};

export const ERROR_MESSAGES = {
  DIVISION_BY_ZERO: 'ゼロによる除算はできません',
  OVERFLOW: '計算結果が有効な範囲を超えています',
};

export const CALCULATOR_CONFIG = {
  MAX_DECIMAL_PLACES: 8,
  INITIAL_VALUE: '0',
  ERROR_DISPLAY_TIME: 2000,
};

export const OPERATION_FUNCTIONS = {
  [OPERATIONS.ADD]: (a, b) => a + b,
  [OPERATIONS.SUBTRACT]: (a, b) => a - b,
  [OPERATIONS.MULTIPLY]: (a, b) => a * b,
  [OPERATIONS.DIVIDE]: (a, b) => {
    if (b === 0) throw new Error(ERROR_MESSAGES.DIVISION_BY_ZERO);
    return a / b;
  },
};

export const BUTTONS = [
  '7', '8', '9', OPERATIONS.DIVIDE,
  '4', '5', '6', OPERATIONS.MULTIPLY,
  '1', '2', '3', OPERATIONS.SUBTRACT,
  '0', '.', '=', OPERATIONS.ADD,
];

export const BUTTON_STYLES = {
  default: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 text-2xl",
  operation: "bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 text-2xl",
  clear: "col-span-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 text-2xl"
};