const fs = require('fs');

function calculateSum(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

function findHighest(numbers) {
  return Math.max(...numbers);
}

function findLowest(numbers) {
  return Math.min(...numbers);
}

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return calculateSum(numbers) / numbers.length;
}

if (require.main === module) {
  const numberText = fs.readFileSync('./data/sample-numbers.txt', 'utf8');

  const numbers = numberText
    .trim()
    .split(/\r?\n/)
    .map(Number);

  console.log('Numbers file:');
  console.log('Sum:', calculateSum(numbers));
  console.log('Highest number:', findHighest(numbers));
  console.log('Lowest number:', findLowest(numbers));
  console.log('Average:', calculateAverage(numbers));
}

module.exports = {
  calculateSum,
  findHighest,
  findLowest,
  calculateAverage
};