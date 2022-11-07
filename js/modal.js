import {isEscapeKey} from './util.js';

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

function openUploadForm () {
  uploadFormPopup.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUploadForm () {
  uploadFormPopup.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

uploadFormButton.addEventListener('change', openUploadForm);
uploadForm.addEventListener('reset', closeUploadForm);
