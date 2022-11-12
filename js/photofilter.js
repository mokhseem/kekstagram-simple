const imagePreview = document.querySelector('.img-upload__preview img');
const photoFilters = document.querySelectorAll('input[name="effect"]');

for (const photoFilter of photoFilters) {
  photoFilter.addEventListener('change', applySelectedFilter);
}

function applySelectedFilter() {
  resetPhotoFilter();
  if (this.checked) {
    imagePreview.classList.add(`effects__preview--${this.value}`);
  }
}

function resetPhotoFilter() {
  imagePreview.classList = '';
}

export {resetPhotoFilter};
