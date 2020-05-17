'use strict';

const body = document.body;
const navbarToogleBtn = document.getElementById('navbar-toggle-btn');
const navbarMobile = document.getElementById('navbar-mobile');
const overlay = document.getElementById('overlay');

function toogleNavbar () {
    if (!navbarMobile.classList.contains('show')) {
        navbarMobile.classList.remove('display-none');
        overlay.classList.remove('display-none');
        navbarMobile.classList.add('show');
        overlay.classList.add('show');
        body.style.overflow = "hidden";
    } else {
        navbarMobile.classList.remove('show');
        overlay.classList.remove('show');
        body.removeAttribute('style');
        overlay.classList.add('display-none');
    }
}