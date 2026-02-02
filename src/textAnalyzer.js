const fs = require("fs");

/**
 * Reads a text file and returns its contents as a string
 */
function readTextFile(filePath) {
  return fs.readFileSync("data\sample-text.txt", "utf-8");
}

/**
 * Count the total number of words in a text
 */
function countWords(text) {
  if (!text) return 0;
  return text
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0).length;
}

/**
 * Find the longest word in a text
 */
function findLongestWord(text) {
  if (!text) return "";

  const words = text.split(/\s+/);
  let longest = "";

  for (const word of words) {
    const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
    if (cleanWord.length > longest.length) {
      longest = cleanWord;
    }
  }

  return longest;
}

/**
 * Count how many lines the text has
 */
function countLines(text) {
  if (!text) return 0;
  return text.split("\n").length;
}

module.exports = {
  readTextFile,
  countWords,
  findLongestWord,
  countLines,
};
