const calculatorForm = document.getElementById('calculator__form');
const popup = document.getElementById('calcPopup');
const popupPriceField = document.getElementById('popupPrice');
const popupPricePerMeterField = document.getElementById('popupPricePerMeter');
const cleanKind = document.getElementById('select-kind');
const cleanExtra = document.getElementById('select-service');
const cleanTypeAccomodation = document.getElementById('select-accomodation');
const cleanArea = document.getElementById('range-number');
const userPhone = document.getElementById('phone');
const windowOption = document.getElementById('window_option');
const popupFormBlock = document.getElementById('popup__form');


const dryCleaningPrice = 1300;

const prices = {
    'supportive': [
        [27, 45], [22, 42] // [clean < 100m, clean < 100m + window], [clean > 100m, clean > 100m + window]
    ],
    'general': [
        [63, 91], [59, 86]
    ],
    'postRenovation': [
        [72, 94], [68, 89]
    ],
    'window': [
        [75, 75], [75, 75]
    ]
};

calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let generalPrice = 0;
    const cleanAreaValue = parseInt(cleanArea.textContent);
    const isWindowsCleaning = cleanExtra.value === 'window' ? 1 : 0;
    const isMoreThan100 = cleanAreaValue === 100 ? 1 : 0;
    const priceByMeter = prices[cleanKind.value][isMoreThan100][isWindowsCleaning];

    generalPrice += priceByMeter * cleanAreaValue;
    
    if (cleanExtra.value === 'furniture') {
        generalPrice += dryCleaningPrice;
        popupPricePerMeterField.textContent = priceByMeter + ` грн / м² (+${dryCleaningPrice}грн хімчистка)`;
    } else {
        popupPricePerMeterField.textContent = priceByMeter + ' грн / м²';
    }

    popupPriceField.textContent = generalPrice + ' грн';

    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

cleanKind.addEventListener('change', (e) => {
    e.preventDefault();

    if (cleanKind.value === 'window') {
        windowOption.remove();
    } else {
        cleanExtra.appendChild(windowOption);
    }
});


