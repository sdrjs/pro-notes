'use strict';

window.addEventListener('load', function(e) {
    scrollToSection(location.hash);
});

const burgerMenu = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');

document.addEventListener('click', function (e) {
    if (burgerMenu.contains(e.target)) {
        menuBody.classList.toggle('_active');
        burgerMenu.classList.toggle('_active');

        if (document.body.style.overflow === '') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    if (e.target.classList.contains('nav__link')) {
        scrollToSection(e.target.getAttribute('href'), true);
    }

    const spoilerHeader = e.target.closest('.spoiler__header');
    if (spoilerHeader) {
        spoilerHeader.closest('.spoiler').classList.toggle('active');

        const isExpanded = spoilerHeader.ariaExpanded === 'true';
        spoilerHeader.ariaExpanded = !isExpanded;
    }
});

function scrollToSection(hash, isSmooth) {
    const title = hash.slice(1);
    const elem = document.querySelector(`[data-title="${title}"]`);

    if (elem) {
        const behavior = isSmooth ? "smooth" : "instant";
        elem.scrollIntoView({ block: "start", behavior });
    }
}