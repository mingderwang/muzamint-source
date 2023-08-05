import { isOdd } from './is-odd';

describe('isOdd()', () => {
  it('should return true for odd numbers', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
    expect(isOdd(99)).toBe(true);
  });

  it('should return false for even numbers', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(100)).toBe(false);
  });

  it('should return false for zero', () => {
    expect(isOdd(0)).toBe(false);
  });

  it('should return true for negative odd numbers', () => {
    expect(isOdd(-1)).toBe(true);
    expect(isOdd(-3)).toBe(true);
    expect(isOdd(-99)).toBe(true);
  });

  it('should return false for negative even numbers', () => {
    expect(isOdd(-2)).toBe(false);
    expect(isOdd(-4)).toBe(false);
    expect(isOdd(-100)).toBe(false);
  });

  // Additional edge cases (optional)
  it('should handle large odd numbers', () => {
    expect(isOdd(999999)).toBe(true);
  });

  it('should handle large even numbers', () => {
    expect(isOdd(1000000)).toBe(false);
  });
});