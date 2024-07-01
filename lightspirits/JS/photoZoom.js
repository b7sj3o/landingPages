document.addEventListener("DOMContentLoaded", function() {
    const zoomedImg = $('.photos__page-zoomed-img')[0];
    const zoomedFolderName = "zoomed"

    $('.photos__page-img, .photos__page-overlay, .photos__page-zoomed-img').click(function(e){
        $(".photos__page-overlay").toggleClass('show');
        $('body').toggleClass('overflow');

        if (e.target.src) {
            if (e.target.src.includes('/photos/')) {
                const srcArray = e.target.src.split("/");
                srcArray.push(srcArray[srcArray.length - 1]);
                srcArray[srcArray.length - 2] = zoomedFolderName;
                const newSrc = srcArray.join("/");

                zoomedImg.src = newSrc;

            } else {
                zoomedImg.src = e.target.src;
            }
            
            
        } else {
            zoomedImg.src = "";
        }
        zoomedImg.classList.toggle('active');
    });

});
