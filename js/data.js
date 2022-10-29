import {getRandomPositiveInteger, getPhotoCardTemplate} from './util.js';

const createRandomPhotoCards = (amount) => {
  const photoCards = [];
  const seqNumbers = Array.from({ length: amount }, (_, i) => i + 1);
  for (let i = 0, count = seqNumbers.length; i < count; i++) {
    const rndNumber = getRandomPositiveInteger(1, amount);
    if (!seqNumbers[rndNumber - 1]) { count++; continue; }
    delete seqNumbers[rndNumber - 1];
    photoCards.push(getPhotoCardTemplate(rndNumber));
  }
  return photoCards;
};

export {createRandomPhotoCards};
