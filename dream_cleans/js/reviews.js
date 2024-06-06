const reviewsHiddenItemsStart = document.querySelectorAll('.reviews__page-hidden');
const showMoreBtn = document.getElementById('showMore-btn');
const reviewsStep = 6;

showMoreBtn.addEventListener('click', () => {
    const reviewsHiddenItems = document.querySelectorAll('.reviews__page-hidden');
    const hasHiddenItems = reviewsHiddenItems.length > 0;

    if (hasHiddenItems) {
        let count = 0;
        reviewsHiddenItems.forEach((item) => {
            if (count < reviewsStep) {
                try {
                    item.classList.remove('reviews__page-hidden');
                    count++;
                } catch (error) {
                    console.error(error);
                }
            }
        });
    } else {
        reviewsHiddenItemsStart.forEach((item) => {
            item.classList.add('reviews__page-hidden');
        });
    }

    if (document.querySelectorAll('.reviews__page-hidden').length === 0) {
        showMoreBtn.textContent = 'Сховати';
    } else {
        showMoreBtn.textContent = 'Показати ще';
    }
});
