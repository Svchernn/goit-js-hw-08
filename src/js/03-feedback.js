// const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const STOR_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  mail: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', formSubmit);

refs.form.addEventListener('input', throttle(setFormInput, 500));

getFormInput();

function formSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STOR_KEY);
  console.log(formData);
}

function setFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STOR_KEY, JSON.stringify(formData));
}

function getFormInput() {
  const newFormData = key => JSON.parse(localStorage.getItem(STOR_KEY));
  const formData = newFormData();

  if (newFormData()) {
    const keys = Object.keys(newFormData());
    for (const key of keys) {
      refs.form.elements[key].value = newFormData()[key];
    }
  }
}
