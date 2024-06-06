const popupForm = document.getElementById('popup__form');
const thanksPopup = document.getElementById('thanks__popup');
const popupClose1 = document.getElementById('popupClose1');
const popupClose2 = document.getElementById('popupClose2');
const popupClose3 = document.getElementById('popupClose3');


// CALCULATOR POPUP
popupClose1.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'none';
    document.body.style.overflow = 'visible';
});

popupClose2.addEventListener('click', (e) => {
    e.preventDefault();
    popupFormBlock.style.display = 'none';
    document.body.style.overflow = 'visible';
});

// FORM POPUP
popupForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

let whatFormChosen;

function showPopupForm(text) {
    popupFormBlock.style.display = 'block';
    document.body.style.overflow = 'hidden';

    whatFormChosen = text;
}

// THANKS POPUP
popupClose3.addEventListener('click', (e) => {
    e.preventDefault();
    thanksPopup.style.display = 'none';
    document.body.style.overflow = 'visible';
});
