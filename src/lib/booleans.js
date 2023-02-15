function negate(a) {
  return !a;
};

function both(a, b) {
  return a&&b;
};

function either(a, b) {
  return a||b;
};

function none(a, b) {
  return !a&&!b;
};

function one(a, b) {
  return a!=b;
};

function truthiness(a) {
  return ;
};

function isEqual(a, b) {
  return a===b;
};

function isGreaterThan(a, b) {
  return a>b;
};

function isLessThanOrEqualTo(a, b) {
  return a<=b;
};

function isOdd(a) {
  return Math.abs(a % 2) == 1;
};

function isEven(a) {
  return (a % 2) == 0;
};

function isSquare(a) {
  return a >= 0 && Math.sqrt(a) % 1===0;
};

function startsWith(char, string) {
  return string.startsWith(char);
};

function containsVowels(string) {
  const vowels = /[aeiou]/i;
  return vowels.test(string);
};

function isLowerCase(string) {
  return string !== string.toUpperCase;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
