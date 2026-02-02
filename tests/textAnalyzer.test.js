const {
  countWords,
  findLongestWord,
  countLines,
} = require("../src/textAnalyzer.js");

describe("Text Analyzer Functions", () => {

  describe("countWords()", () => {
    test("counts words in a normal sentence", () => {
      expect(countWords("Hello world")).toBe(2);
    });

    test("handles multiple spaces correctly", () => {
      expect(countWords("Hello    world   again")).toBe(3);
    });

    test("returns 0 for empty string", () => {
      expect(countWords("")).toBe(0);
    });

    test("returns 0 for null or undefined", () => {
      expect(countWords(null)).toBe(0);
      expect(countWords(undefined)).toBe(0);
    });
  });

  describe("findLongestWord()", () => {
    test("finds the longest word in a sentence", () => {
      expect(findLongestWord("I love programming")).toBe("programming");
    });

    test("ignores punctuation", () => {
      expect(findLongestWord("Hello, world!!!")).toBe("Hello");
    });

    test("returns empty string for empty input", () => {
      expect(findLongestWord("")).toBe("");
    });

    test("returns empty string for null or undefined", () => {
      expect(findLongestWord(null)).toBe("");
      expect(findLongestWord(undefined)).toBe("");
    });
  });

  describe("countLines()", () => {
    test("counts lines correctly", () => {
      const text = "Line one\nLine two\nLine three";
      expect(countLines(text)).toBe(3);
    });

    test("single line text returns 1", () => {
      expect(countLines("Just one line")).toBe(1);
    });

    test("empty string returns 0", () => {
      expect(countLines("")).toBe(0);
    });
  });

});
