const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const getIntegerFromString = (str) => parseInt(str, 10);

const getTemplateById = (id) => {
  const template = document.querySelector(`#${id}`);
  if (template === null) {
    return template;
  }
  const fragment = template.content;
  return fragment.firstElementChild;
};

export {
  isEscapeKey,
  getIntegerFromString,
  getTemplateById
};
