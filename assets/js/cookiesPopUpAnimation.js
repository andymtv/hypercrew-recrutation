const cookiesPopup = document.querySelector('.cookies-popup');
const btnClose = document.querySelector('.cookies-popup--btn-close');

anime({
    targets: cookiesPopup,
    delay: 2000,
    duration: 1000,
    opacity: [0, 1]
});


btnClose.addEventListener('click', () => {
    anime({
        targets: cookiesPopup,
        delay: 250,
        duration: 1000,
        opacity: [1, 0],
        complete: function() {
            cookiesPopup.style.display = 'none';
        }
    });
})
