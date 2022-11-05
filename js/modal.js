import {isEscapeKey} from './util.js';

const uploadForm = document.querySelector('.img-upload__overlay');
const openUploadForm = document.querySelector('#upload-file');
const closeUploadForm = uploadForm.querySelector('.img-upload__cancel');

openUploadForm.addEventListener('click', () => {
  uploadForm.classList.remove('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      uploadForm.classList.add('hidden');
    }
  });
});

closeUploadForm.addEventListener('click', () => {
  uploadForm.classList.add('hidden');
});

