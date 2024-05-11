const zoomedImg = $('.photos__page-zoomed-img')[0];

$('.photos__page-img, .photos__page-overlay, .photos__page-zoomed-img').click(function(e){
    $(".photos__page-overlay").toggleClass('show');
    $('body').toggleClass('overflow');
    if (e.target.src) {
        zoomedImg.src = e.target.src;
        checkOriginalSize(zoomedImg, function(realWidth, realHeight) {
            console.log(realWidth, realHeight)
            if (realWidth / realHeight > 1.5) {
                zoomedImg.classList.toggle('rotate')
            } 
        });
    } else {
        zoomedImg.src = "";
    }
    zoomedImg.classList.toggle('active');
});

function checkOriginalSize(img, callback) {
    $("<img>").attr("src", $(img).attr("src")).on("load", function() {
        var realWidth = this.width;
        var realHeight = this.height;
        callback(realWidth, realHeight);
    });
}
