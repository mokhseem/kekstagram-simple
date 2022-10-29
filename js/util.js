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

const ebala = 'Данное сообщение (материал) создано и (или) распространено иностранным средством массовой информации, выполняющим функции иностранного агента, и (или) российским юридическим лицом, выполняющим функции иностранного агента.';

const getPhotoCardTemplate = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: ebala,
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200)
});

export {checkStringLength, getRandomPositiveInteger, getPhotoCardTemplate};
