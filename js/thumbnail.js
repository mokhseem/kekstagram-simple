import {getData} from './api.js';
import {getTemplateById} from './util.js';
import {showErrorAlert} from './alert.js';

const photoCollage = document.querySelector('.pictures');
const photoThumbnailTemplate = getTemplateById('picture');
const photoCollageFragment = document.createDocumentFragment();

const createPhotoCollage = (thumbnails) => {
  if (photoThumbnailTemplate) {
    for (const {url, likes, comments, description} of thumbnails) {
      const photoThumbnail = photoThumbnailTemplate.cloneNode(true);
      photoThumbnail.querySelector('.picture__img').src = url;
      photoThumbnail.querySelector('.picture__img').alt = description;
      photoThumbnail.querySelector('.picture__likes').textContent = likes;
      photoThumbnail.querySelector('.picture__comments').textContent = comments;
      photoCollageFragment.append(photoThumbnail);
    }
    photoCollage.append(photoCollageFragment);
  }
};

getData(createPhotoCollage, () =>
  showErrorAlert('Ошибка соединения'));
