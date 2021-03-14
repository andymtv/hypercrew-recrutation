// init Swiper:
 const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    observer: true,
    observeParents: true,
    rebuildOnUpdate: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

document.querySelector('.swiper-button-next').addEventListener('click', () => {
    const headerContent = document.querySelector('.header-content');
    if (headerContent.style.backgroundImage == 'url("assets/img/01.png")') {
        headerContent.style.backgroundImage = 'url("assets/img/02.png")';
    } else {
        headerContent.style.backgroundImage = 'url("assets/img/01.png")';
    }
})

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    const headerContent = document.querySelector('.header-content');
    if (headerContent.style.backgroundImage == 'url("assets/img/01.png")') {
        headerContent.style.backgroundImage = 'url("assets/img/02.png")';
    } else {
        headerContent.style.backgroundImage = 'url("assets/img/01.png")';
    }
})