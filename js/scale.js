import {getIntegerFromString} from './util.js';

const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP = 25;

const zoomInButton = document.querySelector('.scale__control--bigger');
const zoomOutButton = document.querySelector('.scale__control--smaller');
const scalePercentage = document.querySelector('input[name="scale"]');
const imagePreview = document.querySelector('.img-upload__preview img');

let currentValue = getIntegerFromString(scalePercentage.value);

function setNewScaleValue(newValue) {
  scalePercentage.value = `${newValue}%`;
  imagePreview.style.transform = `scale(${newValue / 100})`;
  currentValue = newValue;
}

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

function resetScaleValue() {
  setNewScaleValue(DEFAULT_SCALE);
}

export {resetScaleValue};
