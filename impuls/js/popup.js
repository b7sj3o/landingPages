const closeFormButton = document.getElementById('popup-form-close');
const formWrapper = document.getElementById('popup-form-wrapper');


closeFormButton.addEventListener('click', () => {
  formWrapper.style.display = 'none';
  document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (event) => {
  if (event.target === formWrapper) {
    formWrapper.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }
});

function openForm() {
  formWrapper.style.display = 'flex';
  document.body.classList.add('no-scroll');
}



