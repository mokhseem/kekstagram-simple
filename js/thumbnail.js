import {createRandomPhotoCards} from './mock.js';

const photoCollage = document.querySelector('.pictures');
const photoThumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photoThumbnails = createRandomPhotoCards();
const photoCollageFragment = document.createDocumentFragment();

photoThumbnails.forEach(({url, likes, comments}) => {
  const photoThumbnail = photoThumbnailTemplate.cloneNode(true);
  photoThumbnail.querySelector('.picture__img').src = url;
  photoThumbnail.querySelector('.picture__likes').textContent = likes;
  photoThumbnail.querySelector('.picture__comments').textContent = comments;
  photoCollageFragment.append(photoThumbnail);
});

photoCollage.append(photoCollageFragment);
