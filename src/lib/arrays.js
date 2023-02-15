const getNthElement = (index, array) => { 
  if (index>array.length -1){
      return array[index-array.length];
    }
  return array[index];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  const newStringArray = string.split();
    return newStringArray;
};

const addToArray = (element, array) => {
    array.push(element);
      array;
};

const addToArray2 = (element, array) => {
  let newArray = array.concat(element);
    return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return '"'+numbers.join('", "')+'"';
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
