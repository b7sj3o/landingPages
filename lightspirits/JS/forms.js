const form1 = document.getElementById('form_1');
const form2 = document.getElementById('form_2');

const bot_token = '6406654898:AAH01hMh8y8CqJP55D6XtLUYOan7DQh-KeU'
const chat_id = '928132950'


form1.addEventListener('submit', (event) => {
    event.preventDefault();
    sendToBot(form1)
});
form2.addEventListener('submit', (event) => {
    event.preventDefault();
    sendToBot(form2)
});




// function showThanks() {
//     document.getElementById('thanks__form').style.display = 'block';
// }   

// function closeThanks() {
//     document.getElementById('thanks__form').style.display = 'none';
//     window.location.reload()
// }   

function sendToBot(form) {
    const name = form.elements['name'].value;
    const phone = form.elements['phone'].value;

    const message = `
Заявка з сайту:%0A
Ім'я: ${name}%0A
Номер телефону: ${phone}
    `

    const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${message}`;

    fetch(url, {
        method: 'POST',
    })
        .then(() => {
            // showThanks()
            alert('Заявку надіслано! Ми з Вами зв`яжемось найближчим часом')
            // document.getElementById('modal-help').style.display = 'none';
        })
        .catch((error) => {
            console.error('Помилка при надсиланні даних:', error);
        });
}