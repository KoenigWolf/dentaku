// src/components/CalculatorButton.js
import React from 'react';
import PropTypes from 'prop-types';
import { BUTTON_STYLES, OPERATIONS } from '../constants/calculator';

const getButtonStyle = (value) => {
  if (value === 'Clear') return BUTTON_STYLES.clear;
  if (Object.values(OPERATIONS).includes(value) || value === '=') {
    return BUTTON_STYLES.operation;
  }
  return BUTTON_STYLES.default;
};

const CalculatorButton = ({ value, onClick }) => (
  <button
    type="button"
    className={getButtonStyle(value)}
    onClick={() => onClick(value)}
    aria-label={`Calculator ${value} button`}
  >
    {value}
  </button>
);

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

CalculatorButton.displayName = 'CalculatorButton';

export default React.memo(CalculatorButton, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});