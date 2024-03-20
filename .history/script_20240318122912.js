window.addEventListener("scroll", function() 
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
 const linksContainer = 