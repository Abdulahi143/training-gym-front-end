const hamburger = document.querySelector('.hamburger');

const mobileMenu = document.querySelector('.mobile-menu');

const icons = document.querySelectorAll('i');

hamburger.addEventListener("click", function(event) {
    const isVisible = mobileMenu.getAttribute('data-visible');
    if(isVisible == "true") {
        // Hide the mobile menu
        mobileMenu.setAttribute('data-visible', "false");
        icons[0].setAttribute('data-visible', "true");
        icons[1].setAttribute('data-visible', "false");
    }else if(isVisible == "false") {
        // Show the Mobile Menus
        mobileMenu.setAttribute('data-visible', "true");
        icons[0].setAttribute('data-visible', "false");
        icons[1].setAttribute('data-visible', "true");
    }
})

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var videoHeight = document.querySelector('#bg-video').offsetHeight;


    if(window.scrollY > videoHeight) {
        header.classList.add('sticky-header');
    }else {
        header.classList.remove('sticky-header');
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const menuLink = document.querySelectorAll('.menu-links a');

    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if(targetId) {
                targetSection.scrollIntoView({behavior: 'smooth'});
            }
        })
    })
})