const header = document.getElementById('main-header');
let lastScrollTop = 0;
let navVisible = false;

const handLeft = document.querySelector('.hand-left');
const handRight = document.querySelector('.hand-right');

const devLeft = document.querySelector('.dev-left');
const devRight = document.querySelector('.dev-right');

// const slides = document.querySelectorAll('.slideshow img');
// let current = 0;

// event listener for the header visibility on scroll
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

//event listener for the circular cursor
document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('circularcursor');
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


// event listener for setting the timeout for the pulse effect
document.addEventListener('DOMContentLoaded', () => {
    const leftGlowFront = document.querySelector('.hand-left-glow-front');
    const rightGlowFront = document.querySelector('.hand-right-glow-front');

    if (leftGlowFront && rightGlowFront) {
        
        setTimeout(() => {
            leftGlowFront.classList.add('pulse-cue');
            rightGlowFront.classList.add('pulse-cue');
        }, 1000); //1 second delay
    }

});

handLeft.addEventListener('mouseenter', () => {
    devLeft.classList.add('hovered');
});
handLeft.addEventListener('mouseleave', () => {
    devLeft.classList.remove('hovered');
});

handRight.addEventListener('mouseenter', () => {
    devRight.classList.add('hovered');
});
handRight.addEventListener('mouseleave', () => {
    devRight.classList.remove('hovered');
});


// document.addEventListener('DOMContentLoaded', () => {
//   const slides = document.querySelectorAll('.slideshow img');
//   let current = 0;

//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       slide.classList.toggle('active', i === index);
//     });
//   }

//   function nextSlide() {
//     current = (current + 1) % slides.length;
//     showSlide(current);
//   }

//   showSlide(current);
//   setInterval(nextSlide, 3000);
// });


