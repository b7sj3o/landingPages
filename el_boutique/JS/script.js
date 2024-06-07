// CALC HOW MUCH SHOULD IT SCROLL 
const slideInLeft = `${100 / parseInt(getComputedStyle(document.body).getPropertyValue('--slider-items'))}%`;

// SLIDER 
$(function() {
    var inWrap = $('.main__slider-body-inner');
    var animating = false;

    $('.arrow-left').on('click', function() {
        if (!animating) {
            animating = true;
        
            $('.main__slider-item').first().before($('.main__slider-item').last());
        
            inWrap.css('left', `-${slideInLeft}`);
        
            inWrap.animate({'left': '0'}, 300, (e) => {
                animating = false;
            });
        }
    })

    $('.arrow-right').on('click', function() {
        if (!animating) {
            animating = true;
            inWrap.animate({left: `-${slideInLeft}`}, 300, function() {
                inWrap.css('left', '0');
                $('.main__slider-item').last().after($('.main__slider-item').first());
                animating = false;
            });
        }
    })
})


// ZOOM IMG BY CLICK ON IT

const zoomedImg = $('.main-zoomed-img')[0];

$('.main__slider-item, .main-overlay, .main-zoomed-img').click(function(e){
    $(".main-overlay").toggleClass('show');
    $('body').toggleClass('overflow');
    if (e.target.src) {
        zoomedImg.src = e.target.src;
        
    } else {
        zoomedImg.src = "";
    }
    zoomedImg.classList.toggle('active');
});




