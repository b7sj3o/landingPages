const form1 = document.getElementById('popup-content-form');
const form2 = document.getElementById('calculator__form');
const bot_token = '6406654898:AAH01hMh8y8CqJP55D6XtLUYOan7DQh-KeU'
const chat_id = '928132950'

const translations = {
    'supportive': 'Підтримуюче',
    'general': 'Генеральне',
    'postRenovation': 'Після будівництва',
    'window': 'Миття вікон',
    'flat': 'Квартира',
    'house': 'Дім',
    'office': 'Офіс',
    'etc': 'Інше',
    'none': 'Відстунє',
    'window': 'Миття вікон',
    'furniture': 'Хімчистка м’яких меблів',
}

form1.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form1.elements['name'].value;
  const phone = form1.elements['phone'].value;
  
  const message = `${whatFormChosen}:%0AІм'я: ${name}%0AНомер телефону: ${phone}`

  const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${message}`;

  fetch(url, {
    method: 'POST',
  })
    .then((response) => {
        if (response.status == 404) {
            console.error('Помилка при надсиланні даних');
        } else if (response.status == 200) {
            console.log('Дані успішно надіслано на Telegram бота');
        }
        popupForm.style.display = 'none';
        thanksPopup.style.display = 'block';
    })
    .catch((error) => {
        console.error('Помилка при надсиланні даних:', error);
    });
});

form2.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const cleaningType = translations[form2.elements['kind'].value];
    const accomodationType = translations[form2.elements['accomodation'].value];
    const additional = translations[form2.elements['service'].value];
    const cleaningArea = form2.elements['area'].value;
    const phone = form2.elements['phone'].value;
  
    const message = `
    Заявка з сайту:
    %0AВид прибирання: ${cleaningType}
    %0AВид житла: ${accomodationType}
    %0AДодаткові послуги: ${additional}
    %0AПлоща прибирання: ${cleaningArea}м2
    %0AНомер телефону: ${phone}
    `
  
    const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${message}`;
  
    fetch(url, {
      method: 'POST',
    })
      .then((response) => {
          if (response.status == 404) {
              console.error('Помилка при надсиланні даних');
          } else if (response.status == 200) {
              console.log('Дані успішно надіслано на Telegram бота');
          }
      })
      .catch((error) => {
          console.error('Помилка при надсиланні даних:', error);
      });
  });