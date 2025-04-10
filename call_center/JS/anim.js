document.addEventListener("DOMContentLoaded", function() {
    // add wow.js + animate.css animations
    const elements = document.querySelectorAll(".wow");
    const isMobile = window.innerWidth <= 480; // Перевірка мобільного пристрою

    elements.forEach(el => {
        const desktopClass = el.getAttribute("data-anim");
        const mobileClass = el.getAttribute("data-mobile-anim");

        if (desktopClass && mobileClass) {
            const desktopClasses = desktopClass.split(" ");
            const mobileClasses = mobileClass.split(" ");

            if (isMobile) {
                el.classList.remove(...desktopClasses);
                el.classList.add(...mobileClasses);
            } else {
                el.classList.remove(...mobileClasses);
                el.classList.add(...desktopClasses);
            }
        }
    });
});



