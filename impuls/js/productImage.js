document.addEventListener("DOMContentLoaded", function() {
    const selectedImg = $('#product-selected-image')[0];

    $('.product-image').click(function(e){
        let tempSrc = e.target.src
        e.target.src = selectedImg.src
        selectedImg.src = tempSrc
    });

});
