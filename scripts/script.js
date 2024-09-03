const section = document.querySelector('#hero-container');
const headerHeight = document.querySelector('.header').offsetHeight;

function setSectionHeight() {
    section.style.height = `calc(100vh - ${headerHeight}px)`;
}

window.addEventListener('resize', setSectionHeight);

setSectionHeight();

// Pour sélectionner la première carte
const firstCard = document.querySelector('.card');

// Pour afficher les styles appliqués à la carte dans la console
console.log(window.getComputedStyle(firstCard));