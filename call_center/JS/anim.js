document.addEventListener("DOMContentLoaded", function() {
    const loaderContainer = document.getElementById("loader-container");
    const MIN_LOADING_TIME = 1500; // Мінімальний час показу лоадера
    const startTime = Date.now();
    
    // animate for at least 2 seconds
    window.addEventListener("load", () => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);

        setTimeout(() => {
            setTimeout(() => {
                removeAnimation()
                document.body.style.overflow = "auto";
                loaderContainer.classList.add("ended");
            }, 1500);
        }, remainingTime);
    });

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


function removeAnimation() {
    const animatedBlocks = document.querySelectorAll(".loader-numbers .digit");
    console.log(animatedBlocks);
    let delay = 200;
    for (let block of animatedBlocks) {
        setTimeout(() => {
            block.style.animation = "none";
        }, delay);
        delay += 200;
    }
    return delay
}
