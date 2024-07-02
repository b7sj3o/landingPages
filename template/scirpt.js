const form1 = document.getElementById('form');

const bot_token = '6406654898:AAH01hMh8y8CqJP55D6XtLUYOan7DQh-KeU'
const chat_id = '689759518'


form1.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form1.elements['name'].value;
  const phone = form1.elements['phone'].value;

  const message = `Заявка з сайту:%0AІм'я: ${name}%0AНомер телефону: ${phone}`

  const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${message}`;

  fetch(url, {
    method: 'POST',
  })
    .then(() => {
        console.log('Дані успішно надіслані')
    })
    .catch((error) => {
        console.error('Помилка при надсиланні даних:', error);
    });
});