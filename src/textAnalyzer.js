const fs = require('fs');

function countWords(text) {
  if (!text.trim()) {
    return 0;
  }

  return text.trim().split(/\s+/).length;
}

function findLongestWord(text) {
  if (!text.trim()) {
    return '';
  }

  const words = text.match(/\b[\w'-]+\b/g) || [];
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

function countLines(text) {
  if (!text) {
    return 0;
  }

  return text.split(/\r?\n/).length;
}

const quotesText = fs.readFileSync('./data/quotes.txt', 'utf8');
const sampleText = fs.readFileSync('./data/sample-text.txt', 'utf8');

console.log('Quotes file:');
console.log('Word count:', countWords(quotesText));
console.log('Longest word:', findLongestWord(quotesText));
console.log('Line count:', countLines(quotesText));

console.log('\nSample text file:');
console.log('Word count:', countWords(sampleText));
console.log('Longest word:', findLongestWord(sampleText));
console.log('Line count:', countLines(sampleText));

module.exports = {
  countWords,
  findLongestWord,
  countLines
};