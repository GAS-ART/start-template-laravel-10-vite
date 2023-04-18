//import './bootstrap';

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
const mainForm = document.getElementById('mainForm');
if (mainForm) {
  const token = document.querySelector('input[name="_token"]').value;
  const errorsMessagesUA = {
    name: ['Не заполнено поле "ВАШЕ ИМЯ"', 'Не заповнено поле "ВАШЕ ІМ\'Я"', 'Поле \"ИМЯ\" должно иметь 2 или больше символов', 'Поле "ІМ\'Я" повинно мати 2 або більше символів', 'Поле \"ИМЯ\" должно иметь не больше 80 символов', 'Поле "ІМ\'Я" повинно мати не більше 80 символів', 'Поле \"ИМЯ\" не может содержать цифры', 'Поле "ІМ\'Я" не може містити цифри'],
    phone: ['Не верный формат номера телефона', 'Невірний формат номеру телефона', 'Не заполнено поле "Номер телефона"', 'Не заповнено поле "Номер телефону"',],
    text: ['Вы ввели слишком много символов в поле "Сообщение"', 'Ви ввели занадто багато символів у полі "Повідомлення"']
  }

  mainForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(mainForm);
    try {
      const response = await fetch('https://eltop.artgas.pro/send-main-form', {
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
        console.log('SEND WORK!');
        return
      } else {
        const data = await response.json();
        if (mainForm.classList.contains('ru')) {
          data.errors?.name ? mainForm.querySelector('.error-name').innerText = data.errors?.name[0] : mainForm.querySelector('.error-name').innerText = "";
          data.errors?.phone ? mainForm.querySelector('.error-phone').innerText = data.errors?.phone[0] : mainForm.querySelector('.error-phone').innerText = "";
          data.errors?.text ? mainForm.querySelector('.error-text').innerText = data.errors?.text[0] : mainForm.querySelector('.error-text').innerText = "";
        } else {
          data.errors?.name ? mainForm.querySelector('.error-name').innerText = errorsMessagesUA.name[errorsMessagesUA.name.findIndex(msg => msg == data.errors.name[0]) + 1] : mainForm.querySelector('.error-name').innerText = "";
          data.errors?.phone ? mainForm.querySelector('.error-phone').innerText = errorsMessagesUA.phone[errorsMessagesUA.phone.findIndex(msg => msg == data.errors.phone[0]) + 1] : mainForm.querySelector('.error-phone').innerText = "";
          data.errors?.text ? mainForm.querySelector('.error-text').innerText = errorsMessagesUA.text[errorsMessagesUA.text.findIndex(msg => msg == data.errors.text[0]) + 1] : mainForm.querySelector('.error-text').innerText = "";
        }
      }
    } catch (e) {
      console.log(e);
    }
  });
}