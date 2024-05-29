const zoomedImg = $('.photos__page-zoomed-img')[0];

$('.photos__page-img, .photos__page-overlay, .photos__page-zoomed-img').click(function(e){
    $(".photos__page-overlay").toggleClass('show');
    $('body').toggleClass('overflow');
    if (e.target.src) {
        zoomedImg.src = e.target.src;
        
    } else {
        zoomedImg.src = "";
    }
    zoomedImg.classList.toggle('active');
});

