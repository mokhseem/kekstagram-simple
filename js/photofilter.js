const uploadForm = document.querySelector('.img-upload__form');
const imagePreview = uploadForm.querySelector('.img-upload__preview img');
const photoFilters = uploadForm.querySelector('.effects__list');

const resetPhotoFilter = () => {
  imagePreview.classList = '';
};

photoFilters.addEventListener('change', () => {
  resetPhotoFilter();
  imagePreview.classList.add(`effects__preview--${uploadForm.effect.value}`);
});

export {resetPhotoFilter};
