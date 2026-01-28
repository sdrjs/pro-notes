'use strict';

const burgerMenu = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
burgerMenu.onclick = function(e) {
    menuBody.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
    if (document.body.style.overflow === '') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

const navBody = document.querySelector('.nav__body');
navBody.onclick = function(e) {
    if (!e.target.classList.contains('nav__link')) return;
    const title = e.target.getAttribute('href').slice(1);
    const elem = document.querySelector(`[data-title="${title}"]`);
    elem.scrollIntoView({block: "start", behavior: "smooth"});
}

const spoilerHeader = document.querySelectorAll('.spoiler__header');
spoilerHeader.forEach(spoiler => {
    spoiler.addEventListener('click', function(e) {
        e.currentTarget.closest('.spoiler').classList.toggle('active');

        const isExpanded = e.currentTarget.ariaExpanded === 'true';
        e.currentTarget.ariaExpanded = !isExpanded;
    });
});