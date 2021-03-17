// init Swiper Container Header:
const swiperHeader = new Swiper('.swiper-container-header', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-header',
    prevEl: '.swiper-button-prev-header',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar-header',
  },

  observer: true,
  observeParents: true,
  rebuildOnUpdate: true, 
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  
});

swiperHeader.update();

const headerContent = document.querySelector('.header-content-bg');
const titlesAndTexts = document.querySelectorAll('.header-content-title, .header-content-text');

document.querySelector('.swiper-button-next-header').addEventListener('click', () => {
    swiperHeader.update();
    
    if (headerContent.style.backgroundImage == 'url("assets/img/01.png")') {

      
      headerContent.style.transition = '0.5s';
      headerContent.style.backgroundImage = 'url("assets/img/02.png")';
    } else {
      headerContent.style.transition = '0.5s';
      headerContent.style.backgroundImage = 'url("assets/img/01.png")';
    }
})

document.querySelector('.swiper-button-prev-header').addEventListener('click', () => {
  swiperHeader.update();
  
  if (headerContent.style.backgroundImage == 'url("assets/img/01.png")') {
    headerContent.style.transition = '0.5s';
    headerContent.style.backgroundImage = 'url("assets/img/02.png")';
  } else {
    headerContent.style.transition = '0.5s';
    headerContent.style.backgroundImage = 'url("assets/img/01.png")';
  }
})

// Init Swiper Container 4

const swiperContainer4 = new Swiper('.swiper-container-job', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,
  slidesPerView: 2,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-job',
    prevEl: '.swiper-button-prev-job',
  },

  observer: true,
  observeParents: true,
  rebuildOnUpdate: true, 
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  
});

document.querySelector('.swiper-button-next-job').addEventListener('click', () => {
  swiperContainer4.update();
})

document.querySelector('.swiper-button-prev-job').addEventListener('click', () => {
  swiperContainer4.update();
})

// Init Swiper Container 5

const swiperContainer5 = new Swiper('.swiper-container-employee', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,
  slidesPerView: 2,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-employee',
    prevEl: '.swiper-button-prev-employee',
  },

  observer: true,
  observeParents: true,
  rebuildOnUpdate: true, 
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  
});

document.querySelector('.swiper-button-next-employee').addEventListener('click', () => {
  swiperContainer5.update();
})

document.querySelector('.swiper-button-prev-employee').addEventListener('click', () => {
  swiperContainer5.update();
})


// Init Swiper Container Footer

const swiperFooter = new Swiper('.swiper-container-logotype', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-logotype',
    prevEl: '.swiper-button-prev-logotype',
  },

  observer: true,
  observeParents: true,
  rebuildOnUpdate: true, 
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  
});

document.querySelector('.swiper-button-next-logotype').addEventListener('click', () => {
  swiperContainer5.update();
})

document.querySelector('.swiper-button-prev-logotype').addEventListener('click', () => {
  swiperContainer5.update();
})


document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    swiperHeader.update();
    swiperContainer4.update();
    swiperContainer5.update();
    swiperFooter.update();
  }, 100)

})