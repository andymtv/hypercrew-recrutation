// Increasing the height of the container with user agreement

const container = document.querySelector('.footer-form--agreement');
const containerBtn = document.querySelector('.show-more--container');
const btn = document.querySelector('.show-more');
containerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (containerBtn.childNodes[1].tagName == 'BUTTON') {
        container.style.height = window.innerWidth >= 751 ? '28px' : '20px';
        containerBtn.innerHTML = '';
        containerBtn.innerHTML = `
        <i class="fas fa-chevron-left"></i>
        <i class="fas fa-chevron-left"></i>
        <button class="show-more">zwiń</button>`;
        document.querySelector('.footer-form--checkbox-container').style.alignItems = 'flex-start';
        anime({
            targets: container,
            height: (window.innerWidth >= 751 ? 28 : 20) + container.scrollHeight,
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)',
        })
        // btn.textContent = 'zwiń';
    } else if (containerBtn.childNodes[1].tagName == 'I') {
        anime({
            targets: container,
            height: window.innerWidth >= 751 ? 28 : 20,
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)',
            complete: function() {
                document.querySelector('.footer-form--checkbox-container').style.alignItems = 'center';
            },
        })
        containerBtn.innerHTML = '';
        containerBtn.innerHTML = `
        <button class="show-more">rozwiń</button>
        <i class="fas fa-chevron-right"></i>
        <i class="fas fa-chevron-right"></i>`;
    }
})