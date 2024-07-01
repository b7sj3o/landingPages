window.addEventListener('load', function() {
    setTimeout(() => {
        document.querySelector('.wrapper').classList.remove('hidden');
        document.querySelector('.preloader').style.display = 'none'
    }, 1000);
    
});