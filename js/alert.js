import {getTemplateById, isEscapeKey} from './util.js';

const successTemplate = getTemplateById('success');
const errorTemplate = getTemplateById('error');

function showAlert(template, message) {
  const alertPopup = template.cloneNode(true);
  const alertPopupButton = alertPopup.querySelector('button');
  const alertMessage = alertPopup.querySelector('.error__title');

  if (message) {
    alertMessage.textContent = message;
  }

  const onAlertEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeAlertPopup();
    }
  };

  alertPopup.addEventListener('click', closeAlertPopupOnClick);
  document.addEventListener('keydown', onAlertEscKeydown);

  function closeAlertPopupOnClick({target}) {
    if (target === alertPopup || target === alertPopupButton) {
      closeAlertPopup();
    }
  }

  function closeAlertPopup() {
    alertPopup.remove();
    alertPopup.removeEventListener('click', closeAlertPopupOnClick);
    document.removeEventListener('keydown', onAlertEscKeydown);
    document.body.style.removeProperty('overflow');
  }

  document.body.append(alertPopup);
  document.body.style.overflow = 'hidden';
}

function showErrorAlert(message) {
  showAlert(errorTemplate, message);
}

function showSuccessAlert() {
  showAlert(successTemplate);
}

export {showAlert, showErrorAlert, showSuccessAlert};
