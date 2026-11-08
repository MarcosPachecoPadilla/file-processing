const {
  calculateSum,
  findHighest,
  findLowest,
  calculateAverage
} = require('../src/numberProcessor');

describe('Number Processor', () => {
  test('calculates the sum of all numbers', () => {
    expect(calculateSum([10, 20, 30])).toBe(60);
  });

  test('finds the highest number', () => {
    expect(findHighest([5, 12, 3, 9])).toBe(12);
  });

  test('finds the lowest number', () => {
    expect(findLowest([5, 12, 3, 9])).toBe(3);
  });

  test('calculates the average', () => {
    expect(calculateAverage([10, 20, 30])).toBe(20);
  });

  test('returns 0 for the average of an empty array', () => {
    expect(calculateAverage([])).toBe(0);
  });
});