const navLinks = document.querySelectorAll('.nav__link');
const togglerBtn = document.querySelector('#togglerBtn');
const navContainer = document.querySelector('#navContainer');

document.addEventListener("DOMContentLoaded", () => {

    initApp();

    togglerBtn.addEventListener("click", showCloseNav);

});

function initApp() {

    navLinks.forEach(navLink => {
        navLink.addEventListener("click", activeNavLink);
    });

}

function activeNavLink(e) {

    e.target.classList.toggle("nav__link--active");

    const actualSubMenu = e.target.nextElementSibling;
    const actualHeightSubMenu = actualSubMenu.scrollHeight;

    if(!actualSubMenu.style.maxHeight) {
        actualSubMenu.style.maxHeight = `${actualHeightSubMenu}px`;
    } else {
        actualSubMenu.style.maxHeight = null;
    }
    
    navLinks.forEach(navLink => {
        if (navLink !== e.currentTarget) {
            navLink.classList.remove("nav__link--active");
            navLink.nextElementSibling.style.maxHeight = null;
        }
    });
    

}

function showCloseNav() {

    navLinks.forEach(navLink => {
        navLink.classList.remove("nav__link--active");
        navLink.nextElementSibling.style.maxHeight = null;
    });

    togglerBtn.classList.toggle("navbar__toggler--active");
    navContainer.classList.toggle("nav__container--active");

}