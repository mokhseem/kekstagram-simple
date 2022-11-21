const REMOTE_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess, onFail) => {
  fetch(`${REMOTE_SERVER}/data`)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(onFail);
};

const sendData = (onSuccess, onFail, body) => {
  fetch(REMOTE_SERVER, {
    method: 'POST',
    body
  })
    .then((response) => (response.ok ? onSuccess() : onFail()))
    .catch(onFail);
};

export {getData, sendData};
