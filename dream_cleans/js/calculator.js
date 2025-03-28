const calculatorForm = document.getElementById("calculator__form");
const popup = document.getElementById("calcPopup");
const popupPriceField = document.getElementById("popupPrice");
const popupPricePerMeterField = document.getElementById("popupPricePerMeter");
const cleanKind = document.getElementById("select-kind");
const cleanExtra = document.getElementById("select-service");
const cleanArea = document.getElementById("range-number");
const windowOption = document.getElementById("window_option");

const prices = {
    supportive: [45, 95, 75],
    general: [95, 165, 125],
    postRenovation: [110, 185, 140],
    window: [180, 180, 230]
};

calculatorForm.addEventListener("submit", handleFormSubmit);
cleanKind.addEventListener("change", handleCleanKindChange);

function handleFormSubmit(event) {
    event.preventDefault();
    
    const cleanAreaValue = parseInt(cleanArea.textContent) || 0;
    if (cleanAreaValue <= 0) {
        alert("Будь ласка, введіть коректну площу приміщення.");
        return;
    }

    const extraFeatureId = getExtraFeatureId(cleanExtra.value);
    const priceByMeter = prices[cleanKind.value]?.[extraFeatureId] || 0;
    const totalPrice = priceByMeter * cleanAreaValue;

    updatePopup(priceByMeter, totalPrice);
}

function getExtraFeatureId(extraService) {
    const extraFeatures = { "": 0, window: 1, furniture: 2 };
    return extraFeatures[extraService] ?? 0;
}

function updatePopup(pricePerMeter, totalPrice) {
    popupPricePerMeterField.textContent = `${pricePerMeter} грн / м²`;
    popupPriceField.textContent = `${totalPrice} грн`;
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
}

function handleCleanKindChange() {
    if (cleanKind.value === "window") {
        windowOption.remove();
    } else if (!cleanExtra.contains(windowOption)) {
        cleanExtra.insertBefore(windowOption, cleanExtra.firstChild);
    }
}

popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
        document.body.style.overflow = "visible";
    }
});