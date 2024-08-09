const section = document.querySelector('#hero-container');
const headerHeight = document.querySelector('.header').offsetHeight;

function setSectionHeight() {
    section.style.height = `calc(100vh - ${headerHeight}px)`;
}

window.addEventListener('resize', setSectionHeight);

setSectionHeight();