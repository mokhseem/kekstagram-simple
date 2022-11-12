const imagePreview = document.querySelector('.img-upload__preview img');
const photoFilters = document.querySelectorAll('input[name="effect"]');

for (const photoFilter of photoFilters) {
  photoFilter.addEventListener('change', (evt) => {
    resetPhotoFilter();
    if (evt.target.checked) {
      imagePreview.classList.add(`effects__preview--${evt.target.value}`);
    }
  });
}

function resetPhotoFilter() {
  imagePreview.classList = '';
}

export {resetPhotoFilter};
