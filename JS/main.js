// ----------- Burger menu animation --------------

const burgerBtn = document.querySelector('.burger');
var mobileNav = document.querySelector('.navbar-mobile');
let navOpen = false;

burgerBtn.addEventListener('click', () => {
    if(!navOpen) {
        burgerBtn.classList.add('open');
        navOpen = true;
        mobileNav.style.display = 'flex';
        mobileNav.style.transition = 'all 0.5s ease-in-out 0s';
    } else {
        burgerBtn.classList.remove('open');
        navOpen = false;
        mobileNav.style.display = 'none';
    }   
});