const bot_token = '6406654898:AAH01hMh8y8CqJP55D6XtLUYOan7DQh-KeU'
const chat_id = '-4256553062'

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


const programBlocks = document.querySelectorAll('.course-program__page-block')
const faqBlocks = document.querySelectorAll('.faq__page-item-question')
const root = document.querySelector(':root')

programBlocks.forEach(block => {
    var title = block.children[0]
    var text = block.children[1]
    title.addEventListener('click', e => {
        text.classList.toggle('active')
    })
})

faqBlocks.forEach(block => {
    block.addEventListener('click', e => {
        block.parentElement.children[0].classList.toggle('active')
        block.parentElement.children[1].classList.toggle('active')
    })
})
