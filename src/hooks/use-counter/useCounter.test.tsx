import { renderHook } from "@testing-library/react";
import { act } from "react";
import { useCounter } from "./useCounter";

describe('useCounter', () => {
  test('should renders initial count', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  })

  test('should accept the initialRender count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      }
    })

    expect(result.current.count).toBe(10);
  })

  test('should increment the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment);
    expect(result.current.count).toBe(1);
  })
  test('should decrement the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement);
    expect(result.current.count).toBe(-1);
  })
})