// src/components/__tests__/Calculator.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../Calculator';
import { OPERATIONS } from '../../constants/calculator';

describe('Calculator', () => {
  it('数字ボタンをクリックすると表示が更新される', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('演算子ボタンが正しく表示される', () => {
    render(<Calculator />);
    for (const op of Object.values(OPERATIONS)) {
      expect(screen.getByText(op)).toBeInTheDocument();
    }
  });

  it('クリアボタンで表示がリセットされる', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('Clear'));
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('基本的な計算が正しく実行される', () => {
    render(<Calculator />);
    
    // 2 + 3 = 5
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText(OPERATIONS.ADD));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('小数点の計算が正しく実行される', () => {
    render(<Calculator />);
    
    // 1.5 * 2 = 3
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText(OPERATIONS.MULTIPLY));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});