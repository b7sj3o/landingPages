$('.header__burger, .overlay').click(function(){
    $('.header__burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('.header__mobile').toggleClass('show');
    $('body').toggleClass('overflow');
  });