
document.addEventListener('DOMContentLoaded', () => {
    const btnShow = document.querySelector('.btn-show');
    const btnHide = document.querySelector('.btn-hide');
    const menu = document.querySelector('.nav-menu--container');
    const btnShowPaths = btnShow.querySelectorAll('path');
    const btnShowPathsD = [];
    const btnHideLines = btnHide.querySelectorAll('line');


    btnShowPaths.forEach(path => {
        const dAttr = path.getAttribute('d');
        btnShowPathsD.push(dAttr);
    })

    btnShow.addEventListener('click', () => {
        anime({
            targets: menu,
            translateX: ["100%", "0"],
            duration: 400,
            easing: 'easeInOutQuart',
            begin: function() {
                btnShow.classList.add('hidden');
                btnShow.classList.remove('shown');
                btnHide.classList.remove('hidden');
                btnHide.classList.add('shown');
                menu.style.display = 'flex';
            }
        })
        document.body.style.position = 'fixed';
        document.body.style.overflowY = 'scroll';
    });

    btnShow.addEventListener('mouseenter', () => {
        btnShowPaths.forEach(path => {
            const dAttr = path.getAttribute('d');
            let arr = dAttr.split(' ');
            arr[2] = 'H0';
            arr[3] = '100'
            const newdAttr = arr.join(' ')
            path.setAttribute('d', newdAttr);
            path.style.transition = 'all .5s';
        })
    });

    btnShow.addEventListener('mouseleave', () => {
        let count = 0;
        btnShowPaths.forEach(path => {
            path.setAttribute('d', btnShowPathsD[count]);
            path.style.transition = 'all .5s';
            count++;
        })
    });


    btnHide.addEventListener('click', () => {
        anime({
            targets: menu,
            translateX: ["0", "100%"],
            duration: 400,
            easing: 'easeInOutQuart',
            begin: function() {
                btnHide.classList.add('hidden');
                btnHide.classList.remove('shown');
                btnShow.classList.remove('hidden');
                btnShow.classList.add('shown');
            },
            complete: function() {
                menu.style.display = 'none';
            }
        })
        document.body.style.position = 'static';
        document.body.style.overflowY = 'auto';
    });

    btnHide.addEventListener('mouseenter', () => {
        anime({
            targets: btnHide,
            duration: 500,
            rotate: 90,
            easing: "linear"
        })

        anime({
            targets: btnHideLines,
            duration: 100,
            begin: function(t) {
                btnHideLines.forEach(line => {
                    line.style.strokeWidth = 14;
                })
            },
        })
    })

    btnHide.addEventListener('mouseleave', () => {
        anime({
            targets: btnHide,
            duration: 500,
            rotate: 0,
            easing: "linear"
        })

        anime({
            targets: btnHideLines,
            duration: 100,
            begin: function(t) {
                btnHideLines.forEach(line => {
                    line.style.strokeWidth = 9;
                })
            },
        })
    })

});