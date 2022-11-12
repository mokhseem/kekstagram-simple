import {isEscapeKey} from './util.js';
import {resetScaleValue} from './scale.js';
import {resetPhotoFilter} from './photofilter.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFormPopup = document.querySelector('.img-upload__overlay');
const uploadFormButton = document.querySelector('#upload-file');

const commentField = document.querySelector('.text__description');
const isTextFieldFocused = () =>
  document.activeElement === commentField;

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    uploadForm.reset();
  }
};

const togglePopupClass = (isPopupOpen) => {
  uploadFormPopup.classList.toggle('hidden', !isPopupOpen);
  document.body.classList.toggle('modal-open', isPopupOpen);
};

function openUploadForm() {
  togglePopupClass(true);
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUploadForm() {
  togglePopupClass(false);

  resetScaleValue();
  resetPhotoFilter();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadFormButton.addEventListener('change', openUploadForm);
uploadForm.addEventListener('reset', closeUploadForm);
