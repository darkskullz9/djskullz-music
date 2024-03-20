// window.addEventListener("scroll", function() 
    {
        const header = document.querySelector('header');
        const scrollTop = window.pageXOffset || document.documentElement.scrollTop;

        if (scrollTop === 0) 
            {
                header.style.backgroundColor = 'transparent'
            } 
        else 
            {
                header.style.backgroundColor = 'black';
            }
    }  
 );

const hamburgerMenu = document.getElementById('hamburger-menu');

function toggleMenu() {
    const linksContainer = document.querySelector('.navigation');
    navigation.classList.toggle('menu-open');
    if (navigation.classList.contains('menu-open')) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'auto';
    }
}

hamburgerMenu.addEventListener('click', toggleMenu);