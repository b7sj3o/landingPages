const rangeThumb = document.getElementById('range-thumb');
const rangeNumber = document.getElementById('range-number');
const rangeLine = document.getElementById('range-line');
const rangeInput = document.getElementById('range-input');
const menu = document.querySelector('.header__mobile__menu');
const menuItem = document.querySelectorAll('.header__menu__link');
const hamburger = document.querySelector('.hamburger');
const preloader = document.querySelector(".preloader");

const step = 100 / rangeInput.max;


const rangeInputSlider = () => {
    rangeNumber.textContent = rangeInput.value;
    if (rangeNumber.textContent === rangeInput.max) rangeNumber.textContent += '+';

    const thumbPosition = rangeInput.value !== rangeInput.min ? (rangeInput.value / rangeInput.max) : 0;

    const space = rangeInput.offsetWidth - rangeThumb.offsetWidth;

    rangeThumb.style.left = (thumbPosition * space) + 'px';
    rangeLine.style.width = rangeInput.value * step + '%';
};

rangeInputSlider();
rangeInput.addEventListener('input', rangeInputSlider);

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function(){
        preloader.style.display = "none";
        document.body.style.overflow = 'visible'
    }, 2000);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__mobile__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('header__mobile__menu_active'); 
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const anchor = document.querySelector('.anchor');
    const footer = document.querySelector('.footer');
    window.addEventListener('scroll', function() {
        const footerOffset = footer.getBoundingClientRect();
        const anchorOffset = anchor.getBoundingClientRect();
        

        if (anchorOffset.bottom >= footerOffset.top) {
        anchor.style.visibility = 'hidden';
        } else {
        anchor.style.visibility = 'visible';
        }
    });
});