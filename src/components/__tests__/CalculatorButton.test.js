// src/components/__tests__/CalculatorButton.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CalculatorButton from '../CalculatorButton';
import { OPERATIONS, BUTTON_STYLES } from '../../constants/calculator';

describe('CalculatorButton', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('数字ボタンが正しく表示される', () => {
    render(<CalculatorButton value="7" onClick={mockOnClick} />);
    const button = screen.getByText('7');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Calculator 7 button');
  });

  it('演算子ボタンが正しいスタイルで表示される', () => {
    render(<CalculatorButton value={OPERATIONS.ADD} onClick={mockOnClick} />);
    const button = screen.getByText(OPERATIONS.ADD);
    expect(button).toHaveClass(BUTTON_STYLES.operation);
  });

  it('クリアボタンが正しいスタイルで表示される', () => {
    render(<CalculatorButton value="Clear" onClick={mockOnClick} />);
    const button = screen.getByText('Clear');
    expect(button).toHaveClass(BUTTON_STYLES.clear);
  });

  it('クリック時にコールバックが呼ばれる', () => {
    render(<CalculatorButton value="1" onClick={mockOnClick} />);
    fireEvent.click(screen.getByText('1'));
    expect(mockOnClick).toHaveBeenCalledWith('1');
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('イコールボタンが演算子スタイルで表示される', () => {
    render(<CalculatorButton value="=" onClick={mockOnClick} />);
    const button = screen.getByText('=');
    expect(button).toHaveClass(BUTTON_STYLES.operation);
  });

  it('アクセシビリティ属性が正しく設定される', () => {
    render(<CalculatorButton value={OPERATIONS.MULTIPLY} onClick={mockOnClick} />);
    const button = screen.getByText(OPERATIONS.MULTIPLY);
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('aria-label', `Calculator ${OPERATIONS.MULTIPLY} button`);
  });
});