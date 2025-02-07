// inject year into footer
const curYear = new Date();
document.querySelector('#year').textContent = curYear.getFullYear();

const hamburgerElement = document.querySelector('#navButton');
const navElement = document.querySelector('.navLinks');
hamburgerElement.addEventListener('click', () => {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');
});