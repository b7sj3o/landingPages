document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const MIN_LOADING_TIME = 2000; // Мінімальний час показу лоадера

    const startTime = Date.now();
    
    window.addEventListener("load", () => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);

        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
                document.body.style.overflow = "auto";
            }, 1);
        }, 1);
    });
    
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
