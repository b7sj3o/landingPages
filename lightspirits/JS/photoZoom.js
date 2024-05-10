const slider = $('.photos__page-slider')[0];
const zoomedImg = $('.photos__page-zoomed-img')[0];
let imageAmount = $('.photos__page-img').length;

$('.photos__page-img, .photos__page-overlay').click(function(e){
    $(".photos__page-overlay").toggleClass('show');
    $('body').toggleClass('overflow');
    e.target.src ? zoomedImg.src = e.target.src : zoomedImg.src = ""; 
    zoomedImg.dataset.queueZoomed = e.target.dataset.queue || zoomedImg.dataset.queueZoomed
    slider.classList.toggle('active');
});


$('.photos__page-slider-btn').click(function(e){
    const k = e.target.dataset.name === 'prev' ? -1 : 1

    const nextImageDataQueue = parseInt(zoomedImg.dataset.queueZoomed)+k

    let nextImage = null;
    if (nextImageDataQueue == 0) {
        nextImage = document.querySelector(`[data-queue="${imageAmount}"]`)

    } else if (nextImageDataQueue > imageAmount) {
        nextImage = document.querySelector(`[data-queue="1"]`)

    } else {
        nextImage = document.querySelector(`[data-queue="${nextImageDataQueue}"]`)

    }

    zoomedImg.src = nextImage.src
    zoomedImg.dataset.queueZoomed = nextImage.dataset.queue

});