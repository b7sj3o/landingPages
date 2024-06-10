const video = $('.title__page-video')[0];
video.volume = 0.4;
var fullScreen = false;


$('.title__page-overlay, .title__page-watch-link').click(function(e){ 
    $(".title__page-overlay").toggleClass('show');
    $('body').toggleClass('overflow');
    
    video.classList.toggle('active');

    console.log(fullScreen)
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
    
});

