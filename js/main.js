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

const createPhotoCards = (uniqueRandomNumber) => ({
  id: uniqueRandomNumber,
  url: `photos/${uniqueRandomNumber}.jpg`,
  description: 'Сидим с другом в летней кафешке',
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200)
});

const getPhotoCollection = (amount) => {
  // готовим пустой массив загодя
  const photoCards = [];
  // генерируем уникальное число от 1 до amount
  // создаем массив из amount чисел
  const seqNumbers = Array.from({ length: amount }, (_, i) => i + 1);
  // создаем цикл с изменяемым числом итераций
  for (let i = 0, count = seqNumbers.length; i < count; i++) {
    // генерируем число в переменную
    const randomNumber = getRandomPositiveInteger(1, amount);
    // j — это индекс сгенерированного числа в массиве
    const j = randomNumber - 1;
    // проверка того, что полученное число еще не было удалено из массива
    if (typeof seqNumbers[j] === 'undefined') {
      // если числа нет в массиве, то добавляем еще итерацию
      // пока рандом не выдаст подходящее число
      count++;
      continue;
    }
    // удаляем сгенерированное число из массива
    delete seqNumbers[j];
    // сразу понимаю, что у этого способа есть большой недостаток
    // он создает кучу лишних итераций, которые тупо скипаются
    photoCards.push(createPhotoCards(randomNumber));
  }
  return photoCards;
};

checkStringLength();
getRandomPositiveInteger();
getPhotoCollection(25);

