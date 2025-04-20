const header = document.getElementById('main-header');
let lastScrollTop = 0;
let navVisible = false;

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