// Increasing the height of the container with user agreement

const container = document.querySelector('.footer-form--agreement');
const containerBtn = document.querySelector('.show-more--container');
const btn = document.querySelector('.show-more');
console.log(containerBtn);
containerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(containerBtn.childNodes);
    if (containerBtn.childNodes[1].tagName == 'BUTTON') {
        container.style.height = '28px';
        containerBtn.innerHTML = '';
        containerBtn.innerHTML = `
        <i class="fas fa-chevron-left"></i>
        <i class="fas fa-chevron-left"></i>
        <button class="show-more">zwiń</button>`;

        anime({
            targets: container,
            height: 28 + container.scrollHeight,
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)',
        })
        // btn.textContent = 'zwiń';
    } else if (containerBtn.childNodes[1].tagName == 'I') {
        console.log(containerBtn);
        anime({
            targets: container,
            height: 28,
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)',
        })
        containerBtn.innerHTML = '';
        containerBtn.innerHTML = `
        <button class="show-more">rozwiń</button>
        <i class="fas fa-chevron-right"></i>
        <i class="fas fa-chevron-right"></i>`;
    }
})