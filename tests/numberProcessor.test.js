const {
  calculateSum,
  findMax,
  findMin,
  calculateAverage,
} = require("../src/numberProcessor.js");

describe("Number Processor Functions", () => {

  describe("calculateSum()", () => {
    test("calculates the sum of numbers", () => {
      expect(calculateSum([1, 2, 3, 4])).toBe(10);
    });

    test("returns 0 for empty array", () => {
      expect(calculateSum([])).toBe(0);
    });

    test("returns 0 for null or undefined", () => {
      expect(calculateSum(null)).toBe(0);
      expect(calculateSum(undefined)).toBe(0);
    });
  });

  describe("findMax()", () => {
    test("finds the highest number", () => {
      expect(findMax([1, 5, 3, 9, 2])).toBe(9);
    });

    test("works with negative numbers", () => {
      expect(findMax([-10, -3, -20])).toBe(-3);
    });

    test("returns null for empty array", () => {
      expect(findMax([])).toBeNull();
    });

    test("returns null for null or undefined", () => {
      expect(findMax(null)).toBeNull();
      expect(findMax(undefined)).toBeNull();
    });
  });

  describe("findMin()", () => {
    test("finds the lowest number", () => {
      expect(findMin([1, 5, 3, 9, 2])).toBe(1);
    });

    test("works with negative numbers", () => {
      expect(findMin([-10, -3, -20])).toBe(-20);
    });

    test("returns null for empty array", () => {
      expect(findMin([])).toBeNull();
    });

    test("returns null for null or undefined", () => {
      expect(findMin(null)).toBeNull();
      expect(findMin(undefined)).toBeNull();
    });
  });

  describe("calculateAverage()", () => {
    test("calculates the average correctly", () => {
      expect(calculateAverage([2, 4, 6, 8])).toBe(5);
    });

    test("returns 0 for empty array", () => {
      expect(calculateAverage([])).toBe(0);
    });

    test("returns 0 for null or undefined", () => {
      expect(calculateAverage(null)).toBe(0);
      expect(calculateAverage(undefined)).toBe(0);
    });
  });

});
