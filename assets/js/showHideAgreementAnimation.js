// Increasing the height of the container with user agreement

const container = document.querySelector('.footer-form--agreement');
const containerBtn = document.querySelector('.show-more--container');
const btn = document.querySelector('.show-more');

containerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (btn.textContent.includes('rozwiń')) {
        container.style.height = '28px';

        anime({
            targets: container,
            height: 28 + container.scrollHeight,
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)',
        })
        // container.style.height = (30 + container.scrollHeight) + 'px';
        btn.textContent = 'zwiń';
    } else {
        anime({
            targets: container,
            height: 28,
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)',
        })
        btn.textContent = 'rozwiń';
    }
})