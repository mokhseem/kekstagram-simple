const uploadForm = document.querySelector('.img-upload__form');
const imagePreview = document.querySelector('.img-upload__preview img');

const photoFilters = document.querySelector('.effects__list');

photoFilters.addEventListener('change', () => {
  resetPhotoFilter();
  imagePreview.classList.add(`effects__preview--${uploadForm.effect.value}`);
});

function resetPhotoFilter() {
  imagePreview.classList = '';
}

export {resetPhotoFilter};
