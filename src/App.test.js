// src/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('電卓アプリが正しくレンダリングされる', () => {
    const { container } = render(<App />);
    // 電卓の主要なコンポーネントが存在することを確認
    expect(container.querySelector('.bg-gray-800')).toBeInTheDocument(); // Display
    expect(container.querySelectorAll('button')).toHaveLength(17); // 数字+演算子+クリア
  });

  it('初期表示が0である', () => {
    const { getByText } = render(<App />);
    expect(getByText('0')).toBeInTheDocument();
  });

  it('アプリケーションのレイアウトが正しい', () => {
    const { container } = render(<App />);
    const calculator = container.firstChild;
    expect(calculator).toHaveClass('flex flex-col items-center justify-center min-h-screen');
  });
});
