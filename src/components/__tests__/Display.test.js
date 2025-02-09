// src/components/__tests__/Display.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from '../Display';

describe('Display', () => {
  it('数値が正しく表示される', () => {
    render(<Display value="123" />);
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('小数点を含む数値が正しく表示される', () => {
    render(<Display value="123.45" />);
    expect(screen.getByText('123.45')).toBeInTheDocument();
  });

  it('エラーメッセージが正しく表示される', () => {
    const errorMessage = 'ゼロによる除算はできません';
    render(<Display value={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('長い数値が適切に表示される', () => {
    const longNumber = '1234567890.1234567890';
    render(<Display value={longNumber} />);
    const display = screen.getByText(longNumber);
    expect(display).toBeInTheDocument();
    expect(display.parentElement).toHaveClass('overflow-hidden');
  });

  it('表示要素が正しいスタイルを持つ', () => {
    render(<Display value="123" />);
    const container = screen.getByText('123').closest('div');
    expect(container).toHaveClass('relative p-4 mb-6 bg-gray-800 rounded-xl');
  });

  it('フォントスタイルが正しく適用される', () => {
    render(<Display value="123" />);
    const text = screen.getByText('123');
    expect(text).toHaveClass('font-mono text-5xl');
  });
});