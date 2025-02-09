// src/hooks/__tests__/useCalculator.test.js
import { renderHook, act } from '@testing-library/react';
import { useCalculator } from '../useCalculator';

describe('useCalculator', () => {
  it('初期状態が正しく設定されている', () => {
    const { result } = renderHook(() => useCalculator());
    expect(result.current.display).toBe('0');
    expect(result.current.currentValue).toBe('');
    expect(result.current.previousValue).toBe('');
    expect(result.current.operation).toBeNull();
  });

  it('数字の入力が正しく処理される', () => {
    const { result } = renderHook(() => useCalculator());
    
    act(() => {
      result.current.handleNumber('1');
    });
    expect(result.current.display).toBe('1');
    
    act(() => {
      result.current.handleNumber('2');
    });
    expect(result.current.display).toBe('12');
  });

  it('小数点の重複入力を防ぐ', () => {
    const { result } = renderHook(() => useCalculator());
    
    act(() => {
      result.current.handleNumber('1');
      result.current.handleNumber('.');
      result.current.handleNumber('5');
      result.current.handleNumber('.');
    });
    expect(result.current.display).toBe('1.5');
  });

  it('基本的な計算操作が正しく動作する', () => {
    const { result } = renderHook(() => useCalculator());
    
    // 2 + 3 = 5
    act(() => {
      result.current.handleNumber('2');
      result.current.handleOperation('+');
      result.current.handleNumber('3');
      result.current.handleEqual();
    });
    expect(result.current.display).toBe('5');
  });

  it('ゼロ除算を適切に処理する', () => {
    const { result } = renderHook(() => useCalculator());
    jest.useFakeTimers();
    
    act(() => {
      result.current.handleNumber('5');
      result.current.handleOperation('/');
      result.current.handleNumber('0');
      result.current.handleEqual();
    });
    expect(result.current.display).toBe('ゼロによる除算はできません');
    
    act(() => {
      jest.runAllTimers();
    });
    expect(result.current.display).toBe('0');
    
    jest.useRealTimers();
  });

  it('クリア機能が正しく動作する', () => {
    const { result } = renderHook(() => useCalculator());
    
    act(() => {
      result.current.handleNumber('1');
      result.current.handleOperation('+');
      result.current.handleNumber('2');
      result.current.handleClear();
    });
    
    expect(result.current.display).toBe('0');
    expect(result.current.currentValue).toBe('');
    expect(result.current.previousValue).toBe('');
    expect(result.current.operation).toBeNull();
  });
});