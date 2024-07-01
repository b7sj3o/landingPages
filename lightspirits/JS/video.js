
document.addEventListener("DOMContentLoaded", function() {
    const video = $('.title__page-video')[0];
    video.volume = 0.4;

    $('.title__page-overlay, .title__page-watch-link').click(function(e){ 
        $(".title__page-overlay").toggleClass('show');
        $('body').toggleClass('overflow');
        
        video.classList.toggle('active');

        !video.paused ? video.pause() : null
        
    });
   
});


