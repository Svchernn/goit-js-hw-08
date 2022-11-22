// const throttle = require('lodash.throttle');

const STOR_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  mail: document.querySelector('.feedback-form email'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', formSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

populateTextarea();

// refs.form.addEventListener('input', setFormInput);

function formSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STOR_KEY);
}

function onTextareaInput(e) {
  const message = e.target.value;
  localStorage.setItem(STOR_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STOR_KEY);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
// // function setFormInput(e) {
// //   formData[e.target.name] = e.target.value;
// //   localStorage.setItem(STOR_KEY, JSON.stringify(formData));
// // }

// // const getData = () => JSON.parse(localStorage.getItem(STOR_KEY));
// // const dataForm = getData();
// // console.log(dataForm);

// // function getFormInput(e) {
// //   if (dataForm) {
// //     refs.mail = dataForm[e.target.name] = e.target.value;
// //   }
// // }
