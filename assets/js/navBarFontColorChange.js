
document.addEventListener('DOMContentLoaded', () => {
    changeFontColor();
})

window.addEventListener('resize', () => {
    changeFontColor();
})

function changeFontColor(){
    const navMenu = document.querySelector('.nav-menu');
    const navMenuItems = navMenu.querySelectorAll('li');


    for (let i = 0; i < navMenuItems.length; i++) {
        navMenuItems[i].classList.remove('item-inverted');
        if (window.innerWidth >= 1920) {
            if(i > 3) {
                navMenuItems[i].classList.add('item-inverted')
            }
        } else if (window.innerWidth >= 1366) {
            if(i > 4) {
                navMenuItems[i].classList.add('item-inverted')
            }
        }
    }
}

