// Animations for Button More '.btn-more'

const btns = document.querySelectorAll('.btn-more');

// Hover Animation 
btns.forEach(btnMore => {
    btnMore.addEventListener('mouseover', () => {
        anime({
            targets: btnMore,
            scale: 1.1,
            duration: 400,
        })
    })

    btnMore.addEventListener('mouseout', () => {
        anime({
            targets: btnMore,
            scale: 1,
            duration: 400,
        })
    })

    btnMore.addEventListener('click', () => {
        anime({
            targets: btnMore,
            scale: [1, 1.1],
            delay: 120,
            duration: 1000,
        })
    })
})
