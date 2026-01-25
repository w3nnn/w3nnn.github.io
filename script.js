const header = document.getElementById('main-header');
let lastScrollTop = 0;
let navVisible = false;

const cursor = document.getElementById('circularcursor');


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
// Check if device is touch-enabled
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  cursor.style.display = 'none';
} else {
  // Only run the mouse movement logic if it's NOT a touch device
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
}
//event listener for the circular cursor
document.addEventListener('mousemove', function(e) {    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// when hovering on clickable elements
const clickableElements = document.querySelectorAll('a, .clickable-project, button, input, textarea, select, [role="button"]');


clickableElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('active');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
  });
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
