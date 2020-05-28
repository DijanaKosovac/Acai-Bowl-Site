let nav = document.querySelector('.navbar');
let header = document.getElementsByTagName('header');
let navLink = document.querySelector('.nav-link');
let logo = document.querySelector('.logo');

window.addEventListener('scroll', function (event) {
    event.preventDefault();

    if (window.scrollY <= 310) {
        nav.style.backgroundColor = 'transparent';
        nav.style.borderBottom = '2px solid white';
    } else {
        nav.style.backgroundColor = '#000';
        nav.style.transition = '0.7s';
    }
});

