const fs = require("fs");

/**
 * Reads a file containing numbers (one per line)
 * Returns an array of numbers
 */
function readNumberFile(filePath) {
  const data = fs.readFileSync("data\sample-numbers.txt", "utf-8");

  return data
    .split("\n")
    .map(line => line.trim())
    .filter(line => line !== "")
    .map(Number);
}

/**
 * Calculate the sum of all numbers
 */
function calculateSum(numbers) {
  if (!numbers || numbers.length === 0) return 0;

  return numbers.reduce((sum, num) => sum + num, 0);
}

/**
 * Find the highest number
 */
function findMax(numbers) {
  if (!numbers || numbers.length === 0) return null;

  return Math.max(...numbers);
}

/**
 * Find the lowest number
 */
function findMin(numbers) {
  if (!numbers || numbers.length === 0) return null;

  return Math.min(...numbers);
}

/**
 * Calculate the average of the numbers
 */
function calculateAverage(numbers) {
  if (!numbers || numbers.length === 0) return 0;

  return calculateSum(numbers) / numbers.length;
}

module.exports = {
  readNumberFile,
  calculateSum,
  findMax,
  findMin,
  calculateAverage,
};
