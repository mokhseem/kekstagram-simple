import {
  getRandomPositiveInteger,
  getPositiveIntegerArray,
  shuffleArray
} from './util.js';

const ORIGINAL_PHOTO_COUNT = 25;
const DISCLAIMER = 'Данное сообщение (материал) создано и (или) распространено иностранным средством массовой информации, выполняющим функции иностранного агента, и (или) российским юридическим лицом, выполняющим функции иностранного агента.';

const createPhotoCard = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DISCLAIMER,
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200)
});

const createRandomPhotoCards = () => {
  const ids = getPositiveIntegerArray(ORIGINAL_PHOTO_COUNT);
  shuffleArray(ids);

  return ids.map((id) => createPhotoCard(id));
};

export {createRandomPhotoCards};
