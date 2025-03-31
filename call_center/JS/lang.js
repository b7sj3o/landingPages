document.addEventListener('DOMContentLoaded', function() {
    const DEFAULT_LANG = 'ru';

    const googtransCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('googtrans='))
        ?.split('=')[1];
        
    const langs = document.querySelectorAll('a.glink');
    
    langs.forEach((lang) => {
        const langCode = lang.getAttribute('data-gt-lang').toLowerCase();
        if (lang.classList.contains("gt-current-lang")) {
            if (langCode != DEFAULT_LANG && !googtransCookie) {
                lang.classList.remove("gt-current-lang");
            }
        } else {
            if (langCode == DEFAULT_LANG && !googtransCookie) {
                lang.classList.add("gt-current-lang");
            }
        }
        
    })
});