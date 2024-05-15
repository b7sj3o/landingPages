const bot_token = '6406654898:AAH01hMh8y8CqJP55D6XtLUYOan7DQh-KeU'
const chat_id = '928132950'

const form = document.getElementById(`form_1`);
form.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = form.elements['name'].value
    const phone = form.elements['phone'].value
    const message = form.elements['message'].value

    const messageToBot = `
Заявка з сайту:%0A
Ім'я: ${name}%0A
Номер телефону: ${phone}%0A
Повідомлення: ${message}
`

    const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${messageToBot}`;

    fetch(url, {
        method: 'POST',
      })
    .then(() => {
        window.location.reload()
    })
    .catch((error) => {
        console.error('Помилка при надсиланні даних:', error);
    });
});

