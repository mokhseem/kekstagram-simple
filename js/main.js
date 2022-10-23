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

const createPhotoCards = (amount) => {
  const photoCards = [];
  const seqNumbers = Array.from({ length: amount }, (_, i) => i + 1);
  for (let i = 0, count = seqNumbers.length; i < count; i++) {
    const randomNumber = getRandomPositiveInteger(1, amount);
    const j = randomNumber - 1;
    if (seqNumbers[j] === undefined) {
      count++;
      continue;
    }
    delete seqNumbers[j];
    photoCards.push({
      id: randomNumber,
      url: `photos/${randomNumber}.jpg`,
      description: 'Сидим с другом в летней кафешке',
      likes: getRandomPositiveInteger(15, 200),
      comments: getRandomPositiveInteger(0, 200)
    });
  }
  return photoCards;
};

checkStringLength();
getRandomPositiveInteger();
createPhotoCards(25);

