// Animation from old logo to new logo
// AnimeJS used
const logos = document.querySelectorAll('#logo-old, #logo-new--logo, #logo-new--text');
// Height of the container with logos
const logosHeight = document.querySelector('.company-transform-logos--container').clientHeight;
logos[1].style.opacity = 0;
logos[2].style.opacity = 0;

// if 'isAnimationStarted' or 'isAnimationCompleted' are equal to 'true' the animation won't be triggered 
let isAnimationStarted = false  
let isAnimationCompleted = false;

document.addEventListener('scroll', () => {

    // get window height
    let windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    let scrollY = window.scrollY || window.pageYOffset;
    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    let scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    let logosPosition = logos[0].getBoundingClientRect().top + scrollY + logosHeight;

    if (scrollPosition > logosPosition && !isAnimationStarted && !isAnimationCompleted) {
        isAnimationStarted = true;

        let tl = anime.timeline({
            delay: 150
        });
        
        tl.add({
            targets: logos[0],
            rotate: {
                value: 720,
                duration: 1500,
                easing: 'linear'
            },
            scale: 1,
            opacity: [1, 0],
            duration: 1500,
            easing: 'linear',
        })

        tl.add({
            targets: logos[1],
            rotate: {
                value: 360,
                duration: 1800,
                easing: 'easeInOutSine'
            },
            scale: 1,
            opacity: [0, 1],
            easing: 'easeInOutQuart',
        }, '-=1400')

        tl.add({
            targets: logos[2],
            scale: 1,
            opacity: [0, 1],
            easing: 'easeInOutQuart',
            complete: function() {
                isAnimationCompleted = true;
            }
        }, '-=1200')
        
    }
})

