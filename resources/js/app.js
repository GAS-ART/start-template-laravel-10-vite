//import './bootstrap';

import { popUp } from './modules/popup.js';

//PopUp
const popupButtons = document.querySelectorAll('.link-on-popup');

popupButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    popUp(e.target.dataset.popupId);
  });
})


//Переключение языков (комп и мобилка)
const languageBtn = document.querySelector('.language-btn');
languageBtn.addEventListener('click', function (e) {
  if (window.matchMedia("(pointer: coarse)").matches) { // Устройства со стилусом
    if (!languageBtn.classList.contains('active')) {
      e.preventDefault()
    }
    languageBtn.classList.toggle('active');
  }
});

//Async form sending
const forms = document.querySelectorAll('form');
const errorsMessagesUA = {
  name: ['Не заполнено поле "ВАШЕ ИМЯ"', 'Не заповнено поле "ВАШЕ ІМ\'Я"', 'Поле \"ИМЯ\" должно иметь 2 или больше символов', 'Поле "ІМ\'Я" повинно мати 2 або більше символів', 'Поле \"ИМЯ\" должно иметь не больше 80 символов', 'Поле "ІМ\'Я" повинно мати не більше 80 символів', 'Поле \"ИМЯ\" не может содержать цифры', 'Поле "ІМ\'Я" не може містити цифри'],
  phone: ['Не верный формат номера телефона', 'Невірний формат номеру телефона', 'Не заполнено поле "Номер телефона"', 'Не заповнено поле "Номер телефону"',],
  text: ['Вы ввели слишком много символов в поле "Сообщение"', 'Ви ввели занадто багато символів у полі "Повідомлення"']
}

forms.forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const token = form.querySelector('input[name="_token"]').value;
    const nameError = form.querySelector('.error-name');
    const phoneError = form.querySelector('.error-phone');
    const textError = form.querySelector('.error-text');
    const loading = form.closest('.popup__row').previousElementSibling.previousElementSibling;
    loading.classList.add('active');
    const formData = new FormData(form);

    const local = 'http://localhost:8000/send-main-form';
    const server = 'https://eltop.artgas.pro/send-main-form'

    try {
      const response = await fetch(local, {
        headers: {
          "Accept": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-Token": token
        },
        method: 'post',
        body: formData,
        credentials: "same-origin",
      })
      if (response.ok) {
        loading.classList.remove('active');
        form.closest('.popup').classList.add('sent');
        nameError.innerText = '';
        nameError.classList.remove('error');
        nameError.previousElementSibling.classList.remove('error');
        nameError.previousElementSibling.previousElementSibling.classList.remove('error');
        phoneError.innerText = '';
        phoneError.classList.remove('error');
        phoneError.previousElementSibling.classList.remove('error');
        phoneError.previousElementSibling.previousElementSibling.classList.remove('error');
        if (textError) {
          textError.innerText = '';
          textError.classList.remove('error');
          textError.previousElementSibling.classList.remove('error');
          textError.previousElementSibling.previousElementSibling.classList.remove('error');
        }
        form.reset();
      } else {
        const data = await response.json();
        loading.classList.remove('active');
        if (form.classList.contains('ru')) {
          if (data.errors?.name) {
            nameError.innerText = data.errors?.name[0];
            nameError.classList.add('error');
            nameError.previousElementSibling.classList.add('error');
            nameError.previousElementSibling.previousElementSibling.classList.add('error');
            console.log(nameError.previousElementSibling);
          } else {
            nameError.innerText = '';
            nameError.classList.remove('error');
            nameError.previousElementSibling.classList.remove('error');
            nameError.previousElementSibling.previousElementSibling.classList.remove('error');
          }
          if (data.errors?.phone) {
            phoneError.innerText = data.errors?.phone[0];
            phoneError.classList.add('error');
            phoneError.previousElementSibling.classList.add('error');
            phoneError.previousElementSibling.previousElementSibling.classList.add('error');
          } else {
            phoneError.innerText = '';
            phoneError.classList.remove('error');
            phoneError.previousElementSibling.classList.remove('error');
            phoneError.previousElementSibling.previousElementSibling.classList.remove('error');
          }
          if (data.errors?.text) {
            textError.innerText = data.errors?.text[0];
            textError.classList.add('error');
            textError.previousElementSibling.classList.add('error');
            textError.previousElementSibling.previousElementSibling.classList.add('error');
          } else if (!data.errors?.text && textError) {
            textError.innerText = '';
            textError.classList.remove('error');
            textError.previousElementSibling.classList.remove('error');
            textError.previousElementSibling.previousElementSibling.classList.remove('error');
          }
          //data.errors?.name ? mainForm.querySelector('.error-name').innerText = data.errors?.name[0] : mainForm.querySelector('.error-name').innerText = "";
          //data.errors?.phone ? mainForm.querySelector('.error-phone').innerText = data.errors?.phone[0] : mainForm.querySelector('.error-phone').innerText = "";
          //data.errors?.text ? mainForm.querySelector('.error-text').innerText = data.errors?.text[0] : mainForm.querySelector('.error-text').innerText = "";
        } else {
          if (data.errors?.name) {
            nameError.innerText = errorsMessagesUA.name[errorsMessagesUA.name.findIndex(msg => msg == data.errors.name[0]) + 1];
            nameError.classList.add('error');
            nameError.previousElementSibling.classList.add('error');
            nameError.previousElementSibling.previousElementSibling.classList.add('error');
          } else {
            nameError.innerText = '';
            nameError.classList.remove('error');
            nameError.previousElementSibling.classList.remove('error');
            nameError.previousElementSibling.previousElementSibling.classList.remove('error');
          }
          if (data.errors?.phone) {
            phoneError.innerText = errorsMessagesUA.phone[errorsMessagesUA.phone.findIndex(msg => msg == data.errors.phone[0]) + 1];
            phoneError.classList.add('error');
            phoneError.previousElementSibling.classList.add('error');
            phoneError.previousElementSibling.previousElementSibling.classList.add('error');
          } else {
            phoneError.innerText = '';
            phoneError.classList.remove('error');
            phoneError.previousElementSibling.classList.remove('error');
            phoneError.previousElementSibling.previousElementSibling.classList.remove('error');
          }
          if (data.errors?.text) {
            textError.innerText = errorsMessagesUA.text[errorsMessagesUA.text.findIndex(msg => msg == data.errors.text[0]) + 1];
            textError.classList.add('error');
            textError.previousElementSibling.classList.add('error');
            textError.previousElementSibling.previousElementSibling.classList.add('error');
          } else if (!data.errors?.text && textError) {
            textError.innerText = '';
            textError.classList.remove('error');
            textError.previousElementSibling.classList.remove('error');
            textError.previousElementSibling.previousElementSibling.classList.remove('error');
          }
          // data.errors?.name ? mainForm.querySelector('.error-name').innerText = errorsMessagesUA.name[errorsMessagesUA.name.findIndex(msg => msg == data.errors.name[0]) + 1] : mainForm.querySelector('.error-name').innerText = "";
          // data.errors?.phone ? mainForm.querySelector('.error-phone').innerText = errorsMessagesUA.phone[errorsMessagesUA.phone.findIndex(msg => msg == data.errors.phone[0]) + 1] : mainForm.querySelector('.error-phone').innerText = "";
          // data.errors?.text ? mainForm.querySelector('.error-text').innerText = errorsMessagesUA.text[errorsMessagesUA.text.findIndex(msg => msg == data.errors.text[0]) + 1] : mainForm.querySelector('.error-text').innerText = "";
        }
      }
    } catch (e) {
      console.log(e);
    }
  })
});