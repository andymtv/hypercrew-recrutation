document.addEventListener('DOMContentLoaded', () => {
    const btnShow = document.querySelector('.btn-show');
    const btnHide = document.querySelector('.btn-hide');


    btnShow.addEventListener('click', () => {
        btnShow.classList.add('hidden');
        btnShow.classList.remove('shown');
        btnHide.classList.remove('hidden');
        btnHide.classList.add('shown');
        document.querySelector('.nav-menu--container').style.display = 'flex';
        document.body.style.position = 'fixed';
        document.body.style.overflowY = 'scroll';
    });

    btnHide.addEventListener('click', () => {
        btnHide.classList.add('hidden');
        btnHide.classList.remove('shown');
        btnShow.classList.remove('hidden');
        btnShow.classList.add('shown');
        document.querySelector('.nav-menu--container').style.display = 'none';
        document.body.style.position = 'static';
        document.body.style.overflowY = 'auto';
    });
});