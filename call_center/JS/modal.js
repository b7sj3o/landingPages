const btns = document.querySelectorAll(".modalBtn");
const modal = document.querySelector(".modal-container");
const modalContent = document.querySelector(".modal-content");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.classList.add("active");
        modalContent.classList.add("active");
        document.body.style.overflow = "hidden";
    });
})

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-container")) {
        modal.classList.remove("active");
        modalContent.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});