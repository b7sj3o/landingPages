document.addEventListener("DOMContentLoaded", () => {
    const loaderContainer = document.getElementById("loader-container");
    const loaderLine = document.querySelector(".loader-line");
    // const timerText = document.querySelector(".loader-timer span");
    const MIN_LOADING_TIME = 3000;
    
    const startTime = Date.now();
    let duration = MIN_LOADING_TIME;
    let animationFrame;
    
    const loaderVideo = document.querySelector(".loader-video");
    loaderVideo.play();

    const animate = () => {
        const elapsed = Date.now() - startTime;
        let progress = Math.min(elapsed / duration, 1);
        // timerText.innerText = Math.floor(progress * 100);
        loaderLine.style.width = `${progress * 100}%`;
        if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
        } else {
            // timerText.innerText = "100";
        }
    };

    function removeAnimation() {
        const animatedBlocks = document.querySelectorAll(".loader-numbers .digit");
        let delay = 200;
        for (let block of animatedBlocks) {
            setTimeout(() => {
                block.style.animation = "none";
            }, delay);
            delay += 200;
        }
        return delay
    }

    // запускаємо анімацію одразу
    animate();

    window.addEventListener("load", () => {
        const loadTime = Date.now() - startTime;
        duration = Math.max(MIN_LOADING_TIME, loadTime);

        // чекаємо поки мине вся тривалість (якщо вона ще не минула)
        const remainingTime = duration - loadTime;
        setTimeout(() => {
            cancelAnimationFrame(animationFrame);
            removeAnimation()
            // timerText.innerText = "100";
            loaderContainer.classList.add("ended");
            document.body.style.overflow = "auto";

            setTimeout(() => {
                loaderContainer.style.display = "none";
            }, 1000);

        }, Math.max(0, remainingTime));
    });
});

