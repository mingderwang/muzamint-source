import { isEven } from './is-even';

describe('isEven', () => {
  describe('isEven()', () => {
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(4)).toBe(true);
      expect(isEven(6)).toBe(true);
      expect(isEven(100)).toBe(true);
    });
  
    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(5)).toBe(false);
      expect(isEven(99)).toBe(false);
    });
  
    it('should return true for zero', () => {
      expect(isEven(0)).toBe(true);
    });
  
    it('should return true for negative even numbers', () => {
      expect(isEven(-2)).toBe(true);
      expect(isEven(-4)).toBe(true);
      expect(isEven(-100)).toBe(true);
    });
  
    it('should return false for negative odd numbers', () => {
      expect(isEven(-1)).toBe(false);
      expect(isEven(-3)).toBe(false);
      expect(isEven(-99)).toBe(false);
    });
  
    // Additional edge cases (optional)
    it('should handle large even numbers', () => {
      expect(isEven(1000000)).toBe(true);
    });
  
    it('should handle large odd numbers', () => {
      expect(isEven(999999)).toBe(false);
    });
  })}
);
