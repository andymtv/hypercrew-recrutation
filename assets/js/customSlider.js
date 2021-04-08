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

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >=751) { 
    headerContent.style.backgroundImage = 'url("assets/img/01.png")';
    setCustomSliderBg();
  } else {
    headerContent.style.backgroundImage = 'url("assets/img/01small.png")';
    setCustomSliderBg();
  } 
});

window.addEventListener('resize', () => {
  if (window.innerWidth >=751) { 
    headerContent.style.backgroundImage = 'url("assets/img/01.png")';
    setCustomSliderBg();
  } else {
    headerContent.style.backgroundImage = 'url("assets/img/01small.png")';
    setCustomSliderBg();
  } 
});

function setCustomSliderBg() {
  document.querySelector('.swiper-button-next-header').addEventListener('click', () => {
    swiperHeader.update();
  
    if (window.innerWidth >=751) {
        if (headerContent.style.backgroundImage == 'url("assets/img/01.png")') {
        headerContent.style.transition = '0.5s';
        headerContent.style.backgroundImage = 'url("assets/img/02.png")';
      } else {
        headerContent.style.transition = '0.5s';
        headerContent.style.backgroundImage = 'url("assets/img/01.png")';
      }
    } else {
      if (headerContent.style.backgroundImage == 'url("assets/img/01small.png")') {
        headerContent.style.transition = '0.5s';
        headerContent.style.backgroundImage = 'url("assets/img/02small.png")';
      } else {
        headerContent.style.transition = '0.5s';
        headerContent.style.backgroundImage = 'url("assets/img/01small.png")';
      }
    }
  })

  document.querySelector('.swiper-button-prev-header').addEventListener('click', () => {
    swiperHeader.update();
    
    if (window.innerWidth >=751) {
      if (headerContent.style.backgroundImage == 'url("assets/img/01.png")') {
      headerContent.style.transition = '0.5s';
      headerContent.style.backgroundImage = 'url("assets/img/02.png")';
    } else {
      headerContent.style.transition = '0.5s';
      headerContent.style.backgroundImage = 'url("assets/img/01.png")';
    }
  } else {
    if (headerContent.style.backgroundImage == 'url("assets/img/01small.png")') {
      headerContent.style.transition = '0.5s';
      headerContent.style.backgroundImage = 'url("assets/img/02small.png")';
    } else {
      headerContent.style.transition = '0.5s';
      headerContent.style.backgroundImage = 'url("assets/img/01small.png")';
    }
  }
  })
}

// Init Swiper Container 3

const swiperContainer3 = new Swiper('.swiper-container-reason', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-reason',
    prevEl: '.swiper-button-prev-reason',
  },

  observer: true,
  observeParents: true,
  rebuildOnUpdate: true, 
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  
});

document.querySelector('.swiper-button-next-reason').addEventListener('click', () => {
  swiperContainer3.update();
})

document.querySelector('.swiper-button-prev-reason').addEventListener('click', () => {
  swiperContainer3.update();
})

// Init Swiper Container 5

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
  breakpoints: {
    750: {
      slidesPerView: 2,
    },
    
    749: {
      slidesPerView: 1,
    }

  },

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
  breakpoints: {
    750: {
      slidesPerView: 4,
    },
    
    350: {
      slidesPerView: 2,
    }

  },

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

// Each swiper needs to be updated because of their internal work principles
// If do not do that then they will not work properly
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    swiperHeader.update();
    swiperContainer3.update();
    swiperContainer4.update();
    swiperContainer5.update();
    swiperFooter.update();
  }, 300)

})