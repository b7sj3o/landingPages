const myForm = document.querySelector('.my-form-inner')

const bot_token = '6406654898:AAH01hMh8y8CqJP55D6XtLUYOan7DQh-KeU'
const chat_id = '928132950'


myForm.addEventListener('submit', (event) => {
  event.preventDefault();   

  const typeAuto = myForm.elements['type-auto'].value;
  const yearFrom = myForm.elements['from-year'].value;
  const yearTo = myForm.elements['to-year'].value;
  const budgetFrom = myForm.elements['from-price'].value;
  const budgetTo = myForm.elements['to-price'].value;
  const username = myForm.elements['name'].value;
  const phoneNumber = myForm.elements['phone'].value;
  const comment = myForm.elements['comment'].value;

  const message = `Заявка з сайту:%0AІм'я: ${typeAuto}%0AРік випуску машини: ${yearFrom}-${yearTo}%0AБюджет: ${budgetFrom}-${budgetTo}
  %0AІм'я: ${username}%0AНомер телефону: ${phoneNumber}%0AКоментар: ${comment || 'Відсутній'}`

  const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${message}`;

  fetch(url, {
    method: 'POST',
  })
    .then(() => {
        
    })
    .catch((error) => {
        console.error('Помилка при надсиланні даних:', error);
    });
});