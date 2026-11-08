const {
  countWords,
  findLongestWord,
  countLines
} = require('../src/textAnalyzer');

describe('Text Analyzer', () => {
  test('counts the total number of words', () => {
    const text = 'Backend development is very useful';
    expect(countWords(text)).toBe(5);
  });

  test('finds the longest word', () => {
    const text = 'JavaScript makes backend development powerful';
    expect(findLongestWord(text)).toBe('development');
  });

  test('counts the number of lines', () => {
    const text = 'Line one\nLine two\nLine three';
    expect(countLines(text)).toBe(3);
  });

  test('returns 0 words for empty text', () => {
    expect(countWords('')).toBe(0);
  });

  test('returns an empty string when there are no words', () => {
    expect(findLongestWord('')).toBe('');
  });

  test('returns 0 lines for empty text', () => {
    expect(countLines('')).toBe(0);
  });
});