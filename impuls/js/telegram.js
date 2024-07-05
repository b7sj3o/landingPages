const bot_token = '6406654898:AAH01hMh8y8CqJP55D6XtLUYOan7DQh-KeU'
const chat_id = '-1002175157881'

const form = document.getElementById(`popup-form`);

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = form.elements['name'].value
    const phone = form.elements['phone'].value
    const comment = form.elements['comment'].value

    const messageToBot = `
Заявка з сайту:%0A
Ім'я: ${name}%0A
Номер телефону: ${phone}%0A
Коментар: ${comment || "Відсутній"}
`

    const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${messageToBot}`;

    fetch(url, {
        method: 'POST',
      })
    .then(() => {
        console.log('Успішно!')
    })
    .catch((error) => {
        console.error('Помилка при надсиланні даних:', error);
    });
});