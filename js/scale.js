import {getIntegerFromString} from './util.js';

const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const PERCENTUM = 100;
const STEP = 25;

const uploadForm = document.querySelector('.img-upload__form');
const imagePreview = uploadForm.querySelector('.img-upload__preview img');
const zoomInButton = uploadForm.querySelector('.scale__control--bigger');
const zoomOutButton = uploadForm.querySelector('.scale__control--smaller');

let currentValue = getIntegerFromString(uploadForm.scale.value);

const setNewScaleValue = (newValue) => {
  uploadForm.scale.value = `${newValue}%`;
  imagePreview.style.transform = `scale(${newValue / PERCENTUM})`;
  currentValue = newValue;
};

zoomInButton.addEventListener('click', () => {
  let nextValue = currentValue + STEP;
  nextValue = nextValue > MAX_SCALE ? MAX_SCALE : nextValue;
  setNewScaleValue(nextValue);
});

zoomOutButton.addEventListener('click', () => {
  let nextValue = currentValue - STEP;
  nextValue = nextValue < MIN_SCALE ? MIN_SCALE : nextValue;
  setNewScaleValue(nextValue);
});

const resetScaleValue = () =>
  setNewScaleValue(DEFAULT_SCALE);

export {resetScaleValue};
