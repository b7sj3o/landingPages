document.addEventListener("DOMContentLoaded", function() {
    $('.header__burger, .overlay, .header__mobile__nav_link').click(function(){
      $('.header__burger').toggleClass('clicked');
      $('.overlay').toggleClass('show');
      $('.header__mobile').toggleClass('show');
      $('body').toggleClass('overflow');
    });
});
