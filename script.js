(function() {
    // All your variables are now safe inside this 'bubble'
    const header = document.getElementById('main-header');
    let lastScrollTop = 0;
    let navVisible = false;

    const cursor = document.getElementById('circularcursor');
    const isTouchscreen = window.matchMedia('(pointer: coarse)').matches;

    const handLeft = document.querySelector('.hand-left');
    const handRight = document.querySelector('.hand-right');

    const devLeft = document.querySelector('.dev-left');
    const devRight = document.querySelector('.dev-right');

    // Scroll Logic
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 0 && scrollTop > lastScrollTop && !navVisible) {
            header.classList.add('nav-visible');
            navVisible = true;
        } else if (scrollTop === 0) {
            header.classList.remove('nav-visible');
            navVisible = false;
        }
        lastScrollTop = scrollTop;
    });

    // Cursor Logic
    if (isTouchscreen) {
        if (cursor) cursor.style.display = 'none';
    } else {
        document.addEventListener('mousemove', (e) => {
            if (cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        });
    }

    // Hover Logic
    const clickableElements = document.querySelectorAll('a, .clickable-project, button, input, textarea, select, [role="button"]');
    clickableElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor?.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor?.classList.remove('active'));
    });

    // Hand/Dev Interactions
    document.addEventListener('DOMContentLoaded', () => {
        const leftGlowFront = document.querySelector('.hand-left-glow-front');
        const rightGlowFront = document.querySelector('.hand-right-glow-front');

        if (leftGlowFront && rightGlowFront) {
            setTimeout(() => {
                leftGlowFront.classList.add('pulse-cue');
                rightGlowFront.classList.add('pulse-cue');
            }, 1000);
        }

        // Slideshow Logic
        const slides = document.querySelectorAll('.slideshow img');
        let current = 0;

        if (slides.length > 0) {
            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
            }

            function nextSlide() {
                current = (current + 1) % slides.length;
                showSlide(current);
            }

            showSlide(current);
            setInterval(nextSlide, 3000);
        }
    });

    if (handLeft && devLeft) {
        handLeft.addEventListener('mouseenter', () => devLeft.classList.add('hovered'));
        handLeft.addEventListener('mouseleave', () => devLeft.classList.remove('hovered'));
    }

    if (handRight && devRight) {
        handRight.addEventListener('mouseenter', () => devRight.classList.add('hovered'));
        handRight.addEventListener('mouseleave', () => devRight.classList.remove('hovered'));
    }
})();