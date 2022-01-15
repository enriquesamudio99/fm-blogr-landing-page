const navLinks = document.querySelectorAll('.nav__link');

document.addEventListener("DOMContentLoaded", () => {

    initApp();

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