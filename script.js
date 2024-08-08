const section = document.querySelector('#title-section');
const headerHeight = document.querySelector('.header').offsetHeight;

function setSectionHeight() {
    section.style.height = `calc(100vh - ${headerHeight}px)`;
}

window.addEventListener('resize', setSectionHeight);

setSectionHeight();

// window.addEventListener("scroll", function() {
//     const header = document.querySelector('header');
//     const scrollTop = window.pageXOffset || document.documentElement.scrollTop;

//     if (scrollTop === 0) {
//             header.style.backgroundColor = 'transparent'
//         } else {
//             header.style.backgroundColor = 'black';
//         }
// });