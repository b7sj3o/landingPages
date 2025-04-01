const bot_token = '6406654898:AAH01hMh8y8CqJP55D6XtLUYOan7DQh-KeU'
const chat_id = '928132950'

const form = document.getElementById(`form`);
const modalForm = document.getElementById(`modal-form`);

[form, modalForm].forEach((form) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        const name = form.elements['name'].value
        const phone = form.elements['phone'].value
        const username = form.elements['username'].value
    
        const messageToBot = `
    Заявка з сайту:%0A
    Ім'я: ${name}%0A
    Номер телефону: ${phone}%0A
    Нікнейм: ${username}
    `
    
        const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${messageToBot}`;
    
        fetch(url, {
            method: 'POST',
          })
        .then(() => {
            alert("Дякуємо! Ваше повідомлення надіслано.");
            if (modal.classList.contains("active")) {
                modal.classList.remove("active");
                modalContent.classList.remove("active");
                document.body.style.overflow = "auto";
            }
            form.reset(); // очищаємо форму після надсилання
        })
        .catch((error) => {
            console.error('Помилка при надсиланні даних:', error);
        });
    });
});

