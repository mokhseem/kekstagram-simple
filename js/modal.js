import {isEscapeKey} from './util.js';
import {resetScaleValue} from './scale.js';
import {resetPhotoFilter} from './photofilter.js';
import {sendData} from './api.js';
import {showSuccessAlert, showErrorAlert} from './alert.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFormPopup = uploadForm.querySelector('.img-upload__overlay');
const uploadFormButton = uploadForm.querySelector('#upload-file');
const submitButton = uploadForm.querySelector('.img-upload__submit');

const isTextFieldFocused = () =>
  document.activeElement === uploadForm.description;

const isErrorAlert = () =>
  document.body.querySelector('.error');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextFieldFocused() && !isErrorAlert()) {
    evt.preventDefault();
    uploadForm.reset();
  }
};

const togglePopupClass = (isPopupOpen) => {
  uploadFormPopup.classList.toggle('hidden', !isPopupOpen);
  document.body.classList.toggle('modal-open', isPopupOpen);
};

const openUploadForm = () => {
  togglePopupClass(true);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeUploadForm = () => {
  togglePopupClass(false);
  resetScaleValue();
  resetPhotoFilter();
  document.removeEventListener('keydown', onPopupEscKeydown);
};

uploadFormButton.addEventListener('change', openUploadForm);
uploadForm.addEventListener('reset', closeUploadForm);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitButton.disabled = true;

  sendData(
    () => {
      submitButton.disabled = false;
      showSuccessAlert();
      uploadForm.reset();
    },
    () => {
      submitButton.disabled = false;
      showErrorAlert();
    },
    new FormData(evt.target)
  );
});
