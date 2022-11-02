const checkStringLength = (string, length) => string.length <= length;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/** {@link https://doka.guide/js/array-from} */
const getPositiveIntegerArray = (length, from = 1) =>
  Array.from({length}, (_, i) => from + i);

/** {@link https://learn.javascript.ru/task/shuffle} */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export {
  checkStringLength,
  getRandomPositiveInteger,
  getPositiveIntegerArray,
  shuffleArray
};
