document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".wow");

    elements.forEach(el => {
        const desktopClass = el.getAttribute("data-anim").split(" ");

        const mobileClass = el.getAttribute("data-mobile-anim").split(" ");

        if (window.innerWidth <= 480) { // Якщо мобілка
            el.classList.remove(...desktopClass);
            el.classList.add(...mobileClass);
        } else { // Якщо десктоп
            el.classList.remove(...mobileClass);
            el.classList.add(...desktopClass);
        }
    });
});
