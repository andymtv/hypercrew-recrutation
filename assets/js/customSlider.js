// init Swiper:
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  speed: 1000,
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  observer: true,
  observeParents: true,
  rebuildOnUpdate: true, 
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  
});

swiper.update();

document.querySelector('.swiper-button-next').addEventListener('click', () => {
    swiper.update();
    const headerContent = document.querySelector('.header-content-bg');
    if (headerContent.style.backgroundImage == 'url("assets/img/01.png")') {
      headerContent.style.transition = '0.5s';
      headerContent.style.backgroundImage = 'url("assets/img/02.png")';
    } else {
      headerContent.style.transition = '0.5s';
      headerContent.style.backgroundImage = 'url("assets/img/01.png")';
    }
})

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
  swiper.update();
  const headerContent = document.querySelector('.header-content-bg');
  if (headerContent.style.backgroundImage == 'url("assets/img/01.png")') {
    headerContent.style.transition = '0.5s';
    headerContent.style.backgroundImage = 'url("assets/img/02.png")';
  } else {
    headerContent.style.transition = '0.5s';
    headerContent.style.backgroundImage = 'url("assets/img/01.png")';
  }
})

 